import styled from "styled-components";
import { ProfileDp } from "../Components/Profile Page components/ProfileDp";
import { Summary } from "../Components/Profile Page components/Summary";
import { Github } from "../Components/Profile Page components/Github";
import { ProjectCarousel } from "../Components/Profile Page components/ProjectCarousel";
import { Skills } from "../Components/Profile Page components/Skills";
import { ProfileNavbar } from "../Components/Profile Page components/ProfileNavbar";
import { UserAvailable } from "../Components/Profile Page components/UserAvailable";
import { Recommendations } from "../Components/Profile Page components/Recommendations";
import { SummaryEditModel } from "../Components/Profile Page components/SummaryEditModel";
import { useState } from "react";
const Profile = () => {
  const [isSumModelOpen, setSumModelOpen] = useState(false);
  const closeModel = () =>  setSumModelOpen(!isSumModelOpen);
  return (
    <>
      {isSumModelOpen && <SummaryEditModel closeModel={closeModel} />}
      <StyledProfile>
        <ProfileNavbar />
        <div id="profileBody">
          <div id="leftPart">
            <ProfileDp /> 
            <Summary closeModel={closeModel} />
            <Skills />
            <Github />
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
