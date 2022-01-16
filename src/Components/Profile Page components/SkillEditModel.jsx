import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChipsArray } from "./ChipsArray.material";
import { updateSkill } from '../../Redux/action'
import { v4 as uuid } from 'uuid';
const SkillEditModel = ({ closeModel }) => {
    const skillsFromStore = useSelector((store) => store.user_skills);
    const [newSkill, setNewSkill] = useState("");
    const [allSkills, setAllSkills] = useState(skillsFromStore);
    const dispatch = useDispatch();
    const addSkill = () => {
        if (newSkill === '') {
            alert('Please add Skill')
            return;
        }
        let payload = {
            key: uuid(),
            label:newSkill
        }
        setNewSkill("")
        setAllSkills([...allSkills, payload])
    }
    const removeSkill = (key) => {
        let payload = allSkills.filter((skill) => skill.key !== key);
        setAllSkills(payload);
    }
    console.log(allSkills)
    const saveSkills = () => {
        dispatch(updateSkill(allSkills))
    }
    return (
        <StyledDialog open={true} onClose={() => closeModel()}>
            <StyledDialogTitle>
                <h3> Edit skills</h3> <StyledClearIcon onClick={() => closeModel()} />
            </StyledDialogTitle>
            <StyledDialogContent>
                <ChipsArray chips={allSkills} removeSkill={removeSkill} isEditable={ true }/>
                <input type="search" value={ newSkill}  placeholder="Enter skill name" onChange={(e) => setNewSkill(e.target.value)} />
                <div className="addSkillBtnCont">
                    <button onClick={addSkill}>Add skill</button>
                </div>
            </StyledDialogContent>
            <footer>
                <button
                    onClick={() => {
                        saveSkills();
                        closeModel();
                    }}
                >
                    Save
                </button>
            </footer>
        </StyledDialog>
    );
};

export { SkillEditModel };
const StyledDialog = styled(Dialog)`
    & div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper {
        min-width:40%;
        background-color:white;
    }
`;
const StyledDialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;
const StyledDialogContent = styled.div`
  padding: 2% 5% 2% 5%;
  border: 1px solid gainsboro;
  border-left: none;
  border-right: none;
  & > input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-top: 20px;
    box-sizing: border-box;
  }
  & + footer {
    display: flex;
    justify-content: flex-end;
    padding: 2% 5% 2% 5%;
    button {
      padding: 10px 20px 10px 20px;
      background-color: rgb(0, 200, 5);
      color: white;
      cursor: pointer;
      font-size: 15px;
      border: none;
      border-radius: 30px;
    }
  }

  & > .addSkillBtnCont {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
  & > .addSkillBtnCont > button {
    padding: 10px 20px 10px 20px;
    background-color: rgb(0, 200, 5);
    color: white;
    cursor: pointer;
    font-size: 15px;
    border: none;
    border-radius: 30px;
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
