import styled from "styled-components";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { UserWithReview } from './UserWithReview';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Recommendations = () => {
  return (
    <StyledRecommendations>
      <h2 id="title">Recommendations</h2>
      <div className="subRec">
        <RecommendationsTabs />
      </div>
    </StyledRecommendations>
  );
};
export { Recommendations };
const StyledRecommendations = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  height: 570px;
  border-radius: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  & > #title {
    text-align: left;
  }
`;

const RecommendationsTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState("0");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <StyledTabs value={selectedTab} onChange={handleChange}>
          <Tab value="0" label="Received" />
          <Tab value="1" label="Given" />
        </StyledTabs>
      </Box>
      <TabPanel selected={selectedTab}></TabPanel>
    </>
  );
};
const TabPanel = ({ selected }) => {
  console.log(selected);
  return <>{selected === "0" ? <Received /> : <Given />}</>;
};
const Received = () => {
  return (
    <StyedReceived>
      {/* //////////1 -> */}
      <StyledUserWithReview name = 'Kamal Gupta' profession = 'SDE-3 at tinder for devlopers' dp_url = 'https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512' review='“This guy is fucking awesome, i love his work”'/>
      {/* ///////////2 -> */}
      <StyledUserWithReview name = 'Aditya verma' profession = 'CTO at tinder for developers' dp_url = 'https://ca.slack-edge.com/T02AMEPGW3Y-U02DQJ38AGG-a88f87687299-512' review='“kassh me bhi rahul jitna talented hota”'/>
      {/* //////////3 -> */}
      <StyledUserWithReview name='Aleem alam' profession='Backend developer at tinder for developers' dp_url='https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7QC3L7-a52bf3b41a27-512' review='“I was unemployed and helpless, then rahul works with me on a project, now i have offer letter from NASA”' /> 
      <StyledShowMoreButton>Show more<KeyboardArrowDownIcon/></StyledShowMoreButton>
    </StyedReceived>
  );
};
const Given = () => {
  return <h1>Given</h1>;
};
const StyedReceived = styled.div`
  padding: 3% 0 3% 0;
`;
const StyledShowMoreButton = styled.button`
  width:100%;
  border:none;
  cursor:pointer;
  font-weight:bold;
  &:hover{
    color: rgb(0, 200, 5);
  }
  background-color:white;
  font-size:16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledUserWithReview = styled(UserWithReview)`
  border-bottom: 1px solid gainsboro;
  margin-bottom:3%;
  & > .topSide {
    display: flex;
    align-items: center;
    .dp {
      width: 12%;
      border-radius: 50%;
      img {
        border: 3px solid rgb(0, 200, 5);
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info {
      /* border:1px solid lime; */
      margin-left:5%;
      text-align: left;
      h3,h5 {
        padding:0;
        margin:0;
      }
    }
  }
`;
const StyledTabs = styled(Tabs)`
  & .css-1aquho2-MuiTabs-indicator {
    background-color: rgb(0, 200, 5);
  }
  & .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: rgb(0, 200, 5);
  }
`;
