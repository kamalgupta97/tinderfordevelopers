import styled from "styled-components";
import { device } from "./MediaQueries.style";

export const FormContainerPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 33%;
  background: #ffffff;
  top: calc(50% - (30vh / 2));
  left: calc(50% - (30% / 2));
  border-radius: 10px;
  & p {
    font-size: 20px;
    font-weight: bold;
  }
  & input {
    width: 70%;
    padding: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #f2f2f2;
    text-align: center;
    color: -internal-light-dark(black, white);
    margin: auto;
  }
  & input:focus {
    outline: none;
    border: 1px solid rgb(0, 155, 207);
    caret-color: rgb(0, 155, 207);
  }
  & div {
    padding: 5%;
    display: flex;
    flex-direction: column;
  }
  & button {
    margin: 10% auto;
    width: 70%;
    padding: 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    background: rgb(0, 155, 207);
    color: #fff;
    border: none;
    font-size: 1rem;
  }
  & button:disabled {
    border: 0.15rem solid rgb(230, 230, 230);

    background: rgb(255, 255, 255);
    cursor: pointer;
    pointer-events: none;
    color: rgb(230, 230, 230);
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.ipad} {
    width: 50%;
    top: calc(50% - (30vh / 2));
    left: calc(50% - (50% / 2));
  }
  @media only screen and ${device.tablet} {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
