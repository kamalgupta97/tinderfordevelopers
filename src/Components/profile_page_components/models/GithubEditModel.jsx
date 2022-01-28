import styled from "styled-components";
import { useState } from "react";
import { Model } from "./Model.material";
import { useDispatch, useSelector } from "react-redux";
import { updateGithub } from "../../../Redux/action";
const GithubEditModel = ({ toggleModel }) => {
  const { github: githubUserNameFromStore } = useSelector(
    (store) => store.user_profile
  );
  const [newUserName, setNewUserName] = useState(githubUserNameFromStore);
  const dispatch = useDispatch();
  return (
    <Model
      modelName={"Edit Github Username"}
      onSave={() => dispatch(updateGithub(newUserName))}
      toggleModel={toggleModel}
    >
      <StyledInput
        type="search"
        value={newUserName}
        placeholder="Enter skill name"
        onChange={(e) => setNewUserName(e.target.value)}
      />
    </Model>
  );
};

export { GithubEditModel };
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin: 20px 0;
  box-sizing: border-box;
`;
