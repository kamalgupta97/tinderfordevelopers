import { Dialog } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import GoogleIcon from "@mui/icons-material/Google";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
const SignupModel = ({ handleSignupModel }) => {
  return (
    <StyledDialog open={true} onClose={handleSignupModel}>
      <div className="modelContent">
        <nav>
            <ClearIcon style={{ "cursor": "pointer" }} onClick={ handleSignupModel}/>
        </nav>
        <h1>Let’s go!</h1>
        <StyledSignupBtn>
          <GoogleIcon />
          Continue with Google
        </StyledSignupBtn>
        <StyledSignupBtn>
          <GitHubIcon />
          Continue with Github
        </StyledSignupBtn>
        <StyledSignupBtn>
          <LoginIcon />
          Sign up manually
        </StyledSignupBtn>
      </div>
    </StyledDialog>
  );
};
export { SignupModel };

const StyledDialog = styled(Dialog)`
  &
    div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper {
    min-width: 40%;
    background-color: white;
    border-radius: 20px;
  }
  & .modelContent {
    padding: 5%;
    text-align: center;
    nav {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
const StyledSignupBtn = styled.div`
  border: 1px solid gainsboro;
  width: 80%;
  margin: auto;
  justify-content: center;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
  svg {
    margin-right: 5%;
  }
  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-color: transparent;
  }
`;
