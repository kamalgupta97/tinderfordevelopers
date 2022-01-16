import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useSelector } from "react-redux";
const Summary = ({ toggleModel }) => {
  const summary = useSelector((store) => store.user_summary);
  const summaryEditModel = () => {
    toggleModel();
  };
  return (
    <StyledSummary>
      <header>
        <h2>Summary </h2>
        <StyledModeEditOutlineOutlinedIcon onClick={summaryEditModel} />
      </header>
      <pre>{summary}</pre>
      <footer>
        <p>...See More</p>
      </footer>
    </StyledSummary>
  );
};
export { Summary };
const StyledSummary = styled.div`
  border: 1px solid gainsboro;
  width: 100%;
  border-radius: 20px;
  text-align: left;
  padding: 0 20px 20px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > footer {
    display: flex;
    justify-content: flex-end;
    p {
      cursor: pointer;
    }
  }
  & > pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    font-size:13px;
  }
`;
const StyledModeEditOutlineOutlinedIcon = styled(ModeEditOutlineOutlinedIcon)`
  cursor: pointer;
`;
