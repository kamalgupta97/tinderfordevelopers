import React, { Children } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  BodyContainer,
  LoginButton,
  LoginModal,
  MyIcon,
} from "../Styles/Modal.style";

export const Login = () => {
  const LoginUI = {
    heading: "Let's Go!",
    googlebtn: "Continue With Google",
  };

  return (
    <div>
      <BodyContainer></BodyContainer>
      <LoginModal>
        <MyIcon>
          <CancelIcon />
        </MyIcon>

        <h1>{LoginUI.heading}</h1>
        <LoginButton>{LoginUI.googlebtn}</LoginButton>
      </LoginModal>
    </div>
  );
};
