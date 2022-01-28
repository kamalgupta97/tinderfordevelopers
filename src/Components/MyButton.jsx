import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  border: 3px solid black;
`;

export default function MyButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
