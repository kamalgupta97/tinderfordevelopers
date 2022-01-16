import Styled from "styled-components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ChipsArray } from './ChipsArray.material';
import { useSelector } from 'react-redux';
const Skills = ({closeModel}) => {
  const skillsFromStore = useSelector(store => store.user_skills);
  const skillsEditModel = () => {
    closeModel();
  };
  return (
    <StyledSkills>
      <header>
        <h2 id="title">Tech Stack / Skills</h2>
        <ModeEditOutlineOutlinedIcon onClick={skillsEditModel}/>
      </header>
      <ChipsArray chips={ skillsFromStore }/>
    </StyledSkills>
  );
};
const StyledSkills = Styled.div`
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
export { Skills };


