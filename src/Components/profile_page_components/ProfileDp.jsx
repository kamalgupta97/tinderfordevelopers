import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Tooltip from '@mui/material/Tooltip';

const ProfileDp = ({ toggleProfileModel, toggleDPModel, toggleCoverModel }) => {
  const profileInfo = useSelector((store) => store.user_profile);
  return (
    <StyledProfileDp>
      <StyledCoverNDp>
        <div id="cover_img">
          <div className='editIcon' onClick={toggleCoverModel}>
            <ModeEditOutlineOutlinedIcon />
          </div>
          <img
            src={profileInfo.cover_photo}
            alt=""
          />
        </div>
        <div id="user_dp">
          <img src={profileInfo.dp} alt="DP" />
          <div className="overlay" onClick={() => toggleDPModel()}>
            <div>
              <CameraAltOutlinedIcon />
              <p> Change Photo </p>
            </div>
          </div>
        </div>
      </StyledCoverNDp>
      <StyledUserDpInfo>
        <h1>
          {profileInfo.first_name} {profileInfo.last_name}
        </h1>
        <h4>{profileInfo.position}</h4>
        <div id="location">
          <LocationOnIcon />
          {profileInfo.location}
        </div>
        <div className="social_media_icons">
          <Tooltip title="Github">
            <StyledSocialIcon>
              <a href={profileInfo.github} target="_blank">
                <GitHubIcon />
              </a>
            </StyledSocialIcon>
          </Tooltip>
          <Tooltip title="Linkedin">
            <StyledSocialIcon>
              <a href={profileInfo.linkedin_url} target="_blank">
                <LinkedInIcon />
              </a>
            </StyledSocialIcon>
          </Tooltip>
          <Tooltip title="Twitter">
            <StyledSocialIcon>
              <a href={profileInfo.twitter_url} target="_blank">
                <TwitterIcon />
              </a>
            </StyledSocialIcon>
          </Tooltip>
          <Tooltip title="Mail">
            <StyledSocialIcon>
              <MailIcon />
            </StyledSocialIcon>
          </Tooltip>
          <Tooltip title="Phone Number">
            <StyledSocialIcon>
              <LocalPhoneIcon />
            </StyledSocialIcon>
          </Tooltip>
        </div>
        {/* Edit profile button */}
        <StyledEditProfileBtn onClick={() => toggleProfileModel()}>
          <ModeEditOutlineOutlinedIcon />
          Edit profile
        </StyledEditProfileBtn>
      </StyledUserDpInfo>
    </StyledProfileDp>
  );
};
export { ProfileDp };
const StyledProfileDp = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  height: 450px;
  border-radius: 20px;
  margin-top: 20px;
`;
const StyledCoverNDp = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 20px 20px 0 0;
  position: relative;
  & > #cover_img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px 20px 0 0;
    }
    .editIcon {
      width:35px;
      height:35px;
      cursor: pointer;
      border-radius: 50%;
      display:flex;
      justify-content: center;
      align-items: center;
      background-color:white;
      position: absolute;
      right: 3%;
      top:5%;
    }
  }
  & > #user_dp {
    width: 22%;
    height: 75%;
    border: 7px solid white;
    border-radius: 50%;
    position: absolute;
    bottom: -30%;
    left: 6%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .overlay {
      position: absolute;
      opacity: 0;
      transition: all 0.3s ease;
      width: 0%;
      height: 0;
      top: 0;
      left: 0;
      background-color: #00000078;
      border-radius: 50%;
      display:flex;
      justify-content:center;
      align-items:center;
      color:white;
      cursor: pointer;
      
    }
    :hover > .overlay {
      width: 100% !important;
      height: 100% !important;
      opacity: 1 !important;
    }
  }
`;
const StyledUserDpInfo = styled.div`
  margin-left: 33%;
  text-align: left;
  position: relative;
  & > .social_media_icons {
    display: flex;
    height: 40px;
    margin-top: 4%;
  }
  & #location {
    background-color: #e7e7e9;
    max-width: max-content;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & > h1 {
    margin-bottom: 0;
  }
  & > h4 {
    margin-top: 1%;
  }
`;
const StyledSocialIcon = styled.div`
  border: 1px solid gainsboro;
  width: 12%;
  height: 100%;
  margin-right: 3%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  & > img {
    width: 70%;
  }
`;
const StyledEditProfileBtn = styled.button`
  border: 1px solid gainsboro;
  background-color: white;
  width: 30%;
  cursor: pointer;
  height: 23%;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  right: 5%;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
