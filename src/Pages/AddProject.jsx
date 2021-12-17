import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { UploadImageContainer, UploadLinks } from "../Styles/AddProject.style";
import { BodyContainer, LoginModal, MyIcon } from "../Styles/Modal.style";

import { UploadImageCont } from "../Components/UploadImageCont";

export const AddProject = () => {
  return (
    <div>
      <BodyContainer></BodyContainer>
      <LoginModal>
        <MyIcon>
          <CancelIcon />
        </MyIcon>
        <UploadImageContainer>
          <UploadImageCont></UploadImageCont>
          <UploadImageCont></UploadImageCont>
          <UploadImageCont></UploadImageCont>
          <UploadImageCont></UploadImageCont>
        </UploadImageContainer>
        <UploadLinks></UploadLinks>
      </LoginModal>
    </div>
  );
};
