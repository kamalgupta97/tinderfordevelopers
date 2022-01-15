import styled from "styled-components";

export const ChatContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #00ff7f;
`;

export const ChatCont = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 20px;
  top: 10%;
  left: 10%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 100%;
  grid-gap: 1%;

  grid-template-areas: "list room profile";
`;

export const ChatFriendList = styled.div`
  grid-area: list;
  background: #ececec;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ChatRoom = styled.div`
  grid-area: room;
  background: #fff;
`;
export const ChatSelectedProfile = styled.div`
  grid-area: profile;
  background: #ececec;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Myprofile = styled.div`
  width: 80%;
  height: 80px;
  margin: auto;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfileName = styled.div`
  text-align: left;
  & > h4 {
    line-height: 0;
    color: teal;
    font-size: 15px;
  }
  & > p {
    line-height: 0;
    font-size: 10px;
  }
`;

export const SearchCont = styled.div`
  width: 100%;
`;

export const SearchBox = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: 10px;
  border-radius: 20px;
`;
export const SerachBoxInput = styled.input`
  width: 80%;
  height: 35px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const MyfrindslIst = styled.div`
  width: 80%;
  margin: auto;
`;

export const SingleFriend = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  height: 70px;
  grid-template-columns: 20% 55% 25%;
  grid-template-rows: 100%;
  grid-template-areas: "photo message time";
  grid-gap: 1%;
`;
export const SingleProfilePhoto = styled.div`
  grid-area: photo;
`;
export const SingleProfileName = styled.div`
  grid-area: message;
  text-align: left;
  & > h4 {
    color: teal;
    line-height: 0;
  }
  & > p {
    line-height: 0;
  }
`;
export const SingleProfileTime = styled.div`
  grid-area: time;
  color: #ccc;
`;
