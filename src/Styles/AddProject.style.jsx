import styled from "styled-components";

export const UploadImageContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 45% 45%;
  justify-content: center;

  grid-gap: 10%;
  margin: 15%;
  width: 70%;
  height: 70%;
  //   background: red;
`;

export const UploadImageBox = styled.div`
  border: 2px solid #cecece;
  border-radius: 10px;
  width: 100%;
`;

export const UploadImage = styled.div`
  margin: 50% auto;
  & > img {
    border-radius: 10px;
  }
`;

export const Tags = styled.div`
  margin: 10% auto;
  width: 70%;
  height: 20%;
`;

export const Description = styled.div`
  margin: 10% auto;
  width: 70%;
`;

export const TagsArea = styled.div`
  & > input {
    border: none;
  }
`;
