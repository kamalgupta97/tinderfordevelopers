import React, { useState } from "react";
import {
  FormContainer,
  FormContainerPage,
  Nameinput,
} from "../Styles/CreateAccountForm.style";

export const CreateAccountForm = () => {
  const [enableButton, setEnable] = useState(true);
  return (
    <FormContainerPage>
      <FormContainer>
        <div>
          <p>What is your First Name?</p>
          <input
            type="text"
            placeholder="Name"
            onInput={() => setEnable(false)}
          />
          <button disabled={enableButton}>Continue</button>
        </div>
      </FormContainer>
    </FormContainerPage>
  );
};
