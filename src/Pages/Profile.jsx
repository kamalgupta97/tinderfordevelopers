import styled from "styled-components";
import { ProfileDp } from "../Components/profile_page_components/ProfileDp";
import { Summary } from "../Components/profile_page_components/Summary";
import { Github } from "../Components/profile_page_components/Github";
import { ProjectCarousel } from "../Components/profile_page_components/ProjectCarousel";
import { Skills } from "../Components/profile_page_components/Skills";
import { ProfileNavbar } from "../Components/profile_page_components/ProfileNavbar";
import { UserAvailable } from "../Components/profile_page_components/UserAvailable";
import { Recommendations } from "../Components/profile_page_components/Recommendations";
import { useState } from "react";
// models
import {ProfileEditModel} from '../Components/profile_page_components/ProfileEditModel'
import { SummaryEditModel } from "../Components/profile_page_components/SummaryEditModel";
import { SkillEditModel } from '../Components/profile_page_components/SkillEditModel';
import {GithubEditModel} from "../Components/profile_page_components/GithubEditModel"
import { DPEditModel } from '../Components/profile_page_components/DPEditModel';
import {CoverPhotoEditModel} from '../Components/profile_page_components/CoverPhotoEditModel'
const Profile = () => {
  const [isSumModelOpen, setSumModelOpen] = useState(false);
  const [isSkillModelOpen, setSkillModelOpen] = useState(false);
  const [isGithubModelOpen, setGithubModelOpen] = useState(false);
  const [isProfileModelOpen, setProfileModelOpen] = useState(false);
  const [isDPModelOpen, setDPModelOpen] = useState(false);
  const [isCoverPhotoModelOpen, setCoverPhotoModelOpen] = useState(false);
  return (
    <>
      {isSumModelOpen && <SummaryEditModel toggleModel={() => setSumModelOpen(!isSumModelOpen)} />}
      {isSkillModelOpen && <SkillEditModel toggleModel={() => setSkillModelOpen(!isSkillModelOpen)}/>}
      {isGithubModelOpen && <GithubEditModel toggleModel={() => setGithubModelOpen(!isGithubModelOpen)}/>}
      {isProfileModelOpen && <ProfileEditModel toggleModel={() => setProfileModelOpen(!isProfileModelOpen)}/>}
      {isDPModelOpen && <DPEditModel toggleModel={() => setDPModelOpen(!isDPModelOpen)}/>}
      {isCoverPhotoModelOpen && <CoverPhotoEditModel toggleModel={() => setCoverPhotoModelOpen(!isCoverPhotoModelOpen)}/>}
      <StyledProfile>
        <ProfileNavbar />
        <div id="profileBody">
          <div id="leftPart">
            <ProfileDp toggleProfileModel={() => setProfileModelOpen(!isProfileModelOpen)} toggleDPModel={() => setDPModelOpen(!isDPModelOpen)} toggleCoverModel={() => setCoverPhotoModelOpen(!isCoverPhotoModelOpen)}/> 
            <Summary toggleModel={() => setSumModelOpen(!isSumModelOpen)} />
            <Skills toggleModel={() => setSkillModelOpen(!isSkillModelOpen)}/>
            <Github toggleModel={() => setGithubModelOpen(!isGithubModelOpen)}/>
            <ProjectCarousel />
          </div>
          <div id="rightPart">
            <UserAvailable />
            <Recommendations />
          </div>
        </div>
      </StyledProfile>
    </>
  );
};
export default Profile;
const StyledProfile = styled.div`
  & > #profileBody {
    display: flex;
    #leftPart {
      width: 56%;
      margin: 0px 3% 0px 3%;
    }
    #rightPart {
      width: 35%;
    }
  }
`;
