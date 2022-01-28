import styled from "styled-components";
import { useState } from "react";
import { Model } from "./Model.material";
import { useDispatch, useSelector } from "react-redux";
import { updateSummary } from "../../../Redux/action";
const SummaryEditModel = ({ toggleModel }) => {
  const { summary: summaryFromStore } = useSelector(
    (store) => store.user_profile
  );
  const [summary, setSummary] = useState(summaryFromStore);
  const dispatch = useDispatch();
  return (
    <Model toggleModel={toggleModel} modelName={"Summary"} onSave={() => dispatch(updateSummary(summary))}>
      <p>
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </p>
      <StyledTextarea rows="10" onChange={(e) => setSummary(e.target.value)} value={summary}/>
    </Model>
  );
};

export { SummaryEditModel };

const StyledTextarea = styled.textarea`
  width: 100% !important;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
