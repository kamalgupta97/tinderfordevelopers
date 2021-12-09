import React from "react";
import { BodyContainer, LoginModal } from "../Styles/Modal.style";

export const Modal = () => {
  return (
    <div>
      <BodyContainer></BodyContainer>
      <LoginModal>
        <h1>Login</h1>
      </LoginModal>
    </div>
  );
};
