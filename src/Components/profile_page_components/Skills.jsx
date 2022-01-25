import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ChipsArray } from './ChipsArray.material';
import { useSelector } from 'react-redux';
const Skills = ({toggleModel}) => {
  const {skills} = useSelector(store => store.user_profile);
  const skillsEditModel = () => {
    toggleModel();
  };
  return (
    <StyledSkills>
      <header>
        <h2 id="title">Tech Stack / Skills</h2>
        <StyledModeEditOutlineOutlinedIcon  onClick={skillsEditModel}/>
      </header>
      <ChipsArray chips={ skills }/>
    </StyledSkills>
  );
};
const StyledSkills = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  border-radius: 20px;
  margin-top:20px;
  box-sizing: border-box;
   padding:0 20px 20px 20px;
   & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledModeEditOutlineOutlinedIcon = styled(ModeEditOutlineOutlinedIcon)`
  cursor: pointer;
`;
export { Skills };


