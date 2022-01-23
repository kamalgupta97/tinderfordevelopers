import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateGithub } from "../../Redux/action";
const GithubEditModel = ({ toggleModel }) => {
  const {github: githubUserNameFromStore} = useSelector((store) => store.user_profile);
  const [newUserName, setNewUserName] = useState(githubUserNameFromStore);
  const dispatch = useDispatch();
  return (
    <StyledDialog open={true} onClose={() => toggleModel()}>
      <StyledDialogTitle>
        <h3> Edit about</h3> <StyledClearIcon onClick={() => toggleModel()} />
      </StyledDialogTitle>
      <StyledDialogContent>
        <input type="search" value={newUserName} placeholder="Enter skill name" onChange={(e) => setNewUserName(e.target.value)} />
      </StyledDialogContent>
      <footer>
        <button
          onClick={() => {
            dispatch(updateGithub( newUserName));
            toggleModel();
          }}
        >
          Save
        </button>
      </footer>
    </StyledDialog>
  );
};

export { GithubEditModel };
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

`;

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
