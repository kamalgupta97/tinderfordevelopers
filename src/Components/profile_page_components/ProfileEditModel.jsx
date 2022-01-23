import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { updateProfile } from "../../Redux/action";
const ProfileEditModel = ({ toggleModel }) => {
  const profileInfoFromStore = useSelector((store) => store.user_profile);
  const [profileInfo, setProfileInfo] = useState(profileInfoFromStore);
  const dispatch = useDispatch();
  const changeProfileInfo = (e) => {
    let payload = {
      ...profileInfo,
      [e.target.name]: e.target.value,
    };
    setProfileInfo(payload);
  };
  return (
    <StyledDialog open={true} onClose={() => toggleModel()}>
      <StyledDialogTitle>
        <h3> Edit Profile</h3> <StyledClearIcon onClick={() => toggleModel()} />
      </StyledDialogTitle>
      <StyledDialogContent>
        <p> * Indicates required </p>
        <form>
          <div>
            <TextField
              label="First name *"
              name="first_name"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.first_name}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Last name"
              variant="outlined"
              name="last_name"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.last_name}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Position *"
              name="position"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.position}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Location *"
              name="location"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.location}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <p>Contact Information</p>
          <div>
            <TextField
              label="Github URL *"
              name="github_url"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.github_url}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Linkedin URL "
              name="linkedin_url"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.linkedin_url}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Twitter URL "
              name="twitter_url"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.twitter_url}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.email}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
          <div>
            <TextField
              label="Phone Number "
              name="phone"
              variant="outlined"
              margin="dense"
              fullWidth
              defaultValue={profileInfo.phone}
              onChange={(e) => changeProfileInfo(e)}
            />
          </div>
        </form>
      </StyledDialogContent>
      <footer>
        <button
          onClick={() => {
             dispatch(updateProfile(profileInfo));
            toggleModel();
          }}
        >
          Save
        </button>
      </footer>
    </StyledDialog>
  );
};

export { ProfileEditModel };
const StyledDialog = styled(Dialog)`
  &
    div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper {
    min-width: 40%;
    background-color: white;
  }
`;
const StyledDialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;
const StyledDialogContent = styled.div`
  padding: 0 5% 0 5%;
  border: 1px solid gainsboro;
  border-left: none;
  border-right: none;
  overflow: auto;
  & > form {
    margin-bottom: 20px;
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
