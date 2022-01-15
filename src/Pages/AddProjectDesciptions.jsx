import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { BodyContainer, LoginModal, MyIcon } from "../Styles/Modal.style";
import TagsInput from "../Components/TagsInput";
import { Paper, TextareaAutosize } from "@material-ui/core";
import { Description, Tags } from "../Styles/AddProject.style";

export const AddProjectDesciptions = () => {
  function handleSelecetedTags(items) {
    console.log(items);
  }
  return (
    <div>
      <BodyContainer></BodyContainer>
      <LoginModal>
        <MyIcon>
          <CancelIcon />
        </MyIcon>
        <Description>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Project Description..."
            minRows={15}
            maxRows={20}
            style={{ width: "100%" }}
          />
        </Description>

        <Tags>
          <TagsInput
            selectedTags={handleSelecetedTags}
            fullWidth
            variant="standard"
            id="tags"
            name="tags"
            placeholder="Add skills"
            label="Skills"
          />
        </Tags>
      </LoginModal>
    </div>
  );
};
