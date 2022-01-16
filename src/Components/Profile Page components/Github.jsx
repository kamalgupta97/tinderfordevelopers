import styled from "styled-components";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {useSelector} from 'react-redux'
const Github = ({toggleModel}) => {
  const githubUsername = useSelector(store => store.user_github);
  return (
    <StyledGithub>
      <header>
        <h2 id="title">Github Graph</h2>
        <ModeEditOutlineOutlinedIcon onClick={() => toggleModel()}/>
      </header>
      <GitHubCalendar username={githubUsername} children={<ReactTooltip html />} color={"rgb(0, 200, 5)"} />
    </StyledGithub>
  );
};
export { Github };
const StyledGithub = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  height: 240px;
  border-radius: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  & > img {
    width: 100%;
    border-radius: 20px;
  }
  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
