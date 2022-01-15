import styled from "styled-components";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
const Github = () => {
  return (
    <StyledGithub>
      <h2 id="title">My Github Graph</h2>
      <GitHubCalendar username="rahul3105" children={<ReactTooltip html />} color={"rgb(0, 200, 5)"}/>
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
  & > #title {
    text-align: left;
  }
`;
