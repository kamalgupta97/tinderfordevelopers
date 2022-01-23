import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { useDispatch , useSelector} from "react-redux";
import {updateSummary} from '../../Redux/action'
const SummaryEditModel = ({ toggleModel }) => {
  const summaryFromStore = useSelector(store => store.user_summary)
  const [summary, setSummary] = useState(summaryFromStore)
  const dispatch = useDispatch();
  return (
    <StyledDialog open={true} onClose={() => toggleModel()}>
      <StyledDialogTitle>
        <h3> Edit about</h3> <StyledClearIcon onClick={() => toggleModel()} />
      </StyledDialogTitle>
      <StyledDialogContent>
        <p>
          You can write about your years of experience, industry, or skills.
          People also talk about their achievements or previous job experiences.
        </p>
        <textarea rows="10" onChange = {(e) => setSummary(e.target.value)}>
          {summaryFromStore}
        </textarea>
      </StyledDialogContent>
      <footer>
        <button onClick={() => {
          dispatch(updateSummary(summary))
          toggleModel();
        }}>Save</button>
      </footer>
    </StyledDialog>
  );
};

export { SummaryEditModel };
const StyledDialog = styled(Dialog)``;
const StyledDialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`;
const StyledDialogContent = styled.div`
  padding: 0 5% 0 5%;
  border: 1px solid gainsboro;
  border-left: none;
  border-right: none;
  & > textarea {
    width: 100% !important;
    padding: 10px;
    font-size: 15px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  & + footer {
    display: flex;
    justify-content: flex-end;
    padding: 2% 5% 2% 5%;
    button {
      padding: 10px 20px 10px 20px;
      background-color: rgb(0, 200, 5);
      color: white;
      cursor: pointer;
      font-size: 15px;
      border: none;
      border-radius: 30px;
    }
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;
