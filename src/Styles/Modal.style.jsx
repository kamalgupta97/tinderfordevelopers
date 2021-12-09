import styled from "styled-components";

import { device } from "./MediaQueries.style";

export const BodyContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #cccccc;
  opacity: 0.6;
`;

export const LoginModal = styled.div`
  position: absolute;
  opacity: 1;
  color: black;
  background: white;
  box-shadow: 2px 2px 2px 2px #cecece;
  border-radius: 10px;

  @media only screen and ${device.desktop} {
    width: 35%;
    height: 80vh;
    top: calc(50% - (80vh / 2));
    left: calc(50% - (35% / 2));
  }
  @media only screen and ${device.ipad} {
    width: 60%;
    height: 50%;
    top: calc(50% - (50% / 2));
    left: calc(50% - (60% / 2));
  }
  @media only screen and ${device.tablet} {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0px;
  }
  & h1 {
    margin-top: 20%;
  }
`;

export const LoginButton = styled.button`
  border-radius: 30px;
  border: 1px solid #ccc;
  height: 60px;
  margin: 3% auto;
  background-color: white;
  @media only screen and ${device.desktop} {
    width: 70%;
  }
  @media only screen and ${device.ipad} {
    width: 80%;
  }
  @media only screen and ${device.tablet} {
    width: 90%;
  }
`;

export const MyIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
