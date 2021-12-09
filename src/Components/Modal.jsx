import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  BodyContainer,
  LoginButton,
  LoginModal,
  MyIcon,
} from "../Styles/Modal.style";

export const Modal = () => {
  return (
    <div>
      <BodyContainer></BodyContainer>

      <LoginModal>
        <MyIcon>
          <CancelIcon />
        </MyIcon>

        <h1>Let's Go!</h1>
        <LoginButton></LoginButton>
        <LoginButton></LoginButton>
        <LoginButton></LoginButton>
      </LoginModal>
    </div>
  );
};
