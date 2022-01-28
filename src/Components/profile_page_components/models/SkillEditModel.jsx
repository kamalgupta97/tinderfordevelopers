import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChipsArray } from "../ChipsArray.material";
import { updateSkill } from "../../../Redux/action";
import { v4 as uuid } from "uuid";
import { Model } from "./Model.material";
const SkillEditModel = ({ toggleModel }) => {
  const { skills: skillsFromStore } = useSelector(
    (store) => store.user_profile
  );
  const [newSkill, setNewSkill] = useState("");
  const [allSkills, setAllSkills] = useState(skillsFromStore);
  const dispatch = useDispatch();
  const addSkill = () => {
    if (newSkill === "") {
      alert("Please add Skill");
      return;
    }
    let payload = {
      key: uuid(),
      label: newSkill,
    };
    setNewSkill("");
    setAllSkills([...allSkills, payload]);
  };
  const removeSkill = (key) => {
    let payload = allSkills.filter((skill) => skill.key !== key);
    setAllSkills(payload);
  };
  const saveSkills = () => {
    dispatch(updateSkill(allSkills));
  };
  return (
    <Model
      toggleModel={toggleModel}
      modelName={"Edit skills"}
      onSave={() => saveSkills()}
    >
      <ChipsArray
        chips={allSkills}
        removeSkill={removeSkill}
        isEditable={true}
      />
      <StyledInput
        type="search"
        value={newSkill}
        placeholder="Enter skill name"
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <div className="addSkillBtnCont">
        <button onClick={addSkill}>Add skill</button>
      </div>
    </Model>
  );
};

export { SkillEditModel };

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-top: 20px;
  box-sizing: border-box;
  & + .addSkillBtnCont {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
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
`;
