
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { updateProfileInfo } from "../../../Redux/action";
import {Model} from './Model.material'
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
    <Model onSave={() =>  dispatch(updateProfileInfo(profileInfo))} modelName={"Edit intro"} toggleModel={toggleModel}>
      <p> * Indicates required </p>
        <form style={{"marginBottom":"20px"}}>
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
    </Model>
  );
};

export { ProfileEditModel };

