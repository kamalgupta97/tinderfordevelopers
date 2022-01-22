import styled from "styled-components";

export const ChatContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: green;
`;

export const ChatCont = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  // border-radius: 20px;
  // top: 10%;
  // left: 10%;
  display: grid;
  grid-template-columns: 24% 50% 24%;
  grid-template-rows: 100%;
  grid-gap: 1%;
  grid-template-areas: "list room profile";
`;

export const ChatFriendList = styled.div`
  grid-area: list;
  background: #ececec;
  // border-top-left-radius: 20px;
  // border-bottom-left-radius: 20px;
`;

export const ChatRoom = styled.div`
  grid-area: room;
  background: #fff;
`;
export const ChatSelectedProfile = styled.div`
  padding: 10% 0%;
  grid-area: profile;
  background: #ececec;
  // border-top-right-radius: 20px;
  // border-bottom-right-radius: 20px;
  & > div {
    width: 95%;
    margin: auto;
  }
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
  margin: 5% auto;
  height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
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

export const DefaultImage = styled.div`
  height: 80%;
  width: 80%;
  margin: 10% auto;
  & > img {
    width: 80%;
  }
`;

export const ChatHeader = styled.div`
  margin: auto;
  height: 70px;
  width: 95%;
  box-shadow: 0px 2px 0px 0px #ececec;
  display: grid;
  align-items: center;
  // border-radius: 10px;
  grid-template-columns: 8% 80% 12%;
  grid-template-rows: 100%;
  grid-template-areas: "img prof ico";
`;
export const ChatHeaderImage = styled.div`
  grid-area: img;
`;
export const ChatHeaderName = styled.div`
  text-align: left;
  grid-area: prof;
`;
export const ChatHeaderIcons = styled.div`
  grid-area: ico;
  display: flex;
  justify-content: space-between;
`;

export const MessageBox = styled.div`
  margin: 20px auto;
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 95%;
  box-shadow: 0px 2px 0px 0px #ececec;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const Friendsmessage = styled.div`
  grid-area: friendmessage;
  align-items: end;
  text-align: left;
  display: grid;
  justify-content: right;
  grid-template-columns: 88% 10%;
  gap: 2%;
  grid-template-rows: 100%;
  grid-template-areas: "singlemes singleimg";
`;
export const Mymessage = styled.div`
  width: 100%;

  grid-area: mymessage;
  align-items: end;
  text-align: left;
  display: grid;
  gap: 5%;
  grid-template-columns: 10% 88%;
  grid-template-rows: 100%;
  grid-template-areas: "singleimg singlemes";
`;

export const SingleMessageItem = styled.div`
  margin-top: 10px;
  width: 90%;
  display: grid;
  grid-template-columns: 40% 40%;
  gap: 20%;
  grid-template-areas: "mymessage friendmessage";
`;

export const StickyMessage = styled.div`
  background: green;
  padding: 1px 20px;
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 10px;
  color: #fff;
  grid-area: singlemes;
`;

export const StickyMessageMe = styled.div`
  background: green;
  padding: 1px 20px;
  max-width: 200px;
  border-radius: 10px 10px 10px 0px;
  color: #fff;
  grid-area: singlemes;
`;

export const SingleMessageItemImg = styled.div`
  grid-area: singleimg;
`;

export const TypeMessageContainer = styled.div`
  width: 95%;
  margin: auto;
  height: 60px;
  border-radius: 30px;
  background: #ececec;
`;
export const TypeMessageCont = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 7% 70% 11% 3%;
  align-items: center;
  gap: 1%;
  grid-template-areas: "lef mid right rightt";
`;

export const MicIconType = styled.div`
  grid-area: lef;
  margin-left: 10px;
`;
export const TypeArea = styled.div`
  grid-area: mid;
  height: 100%;
  & > input {
    border: none;
    width: 100%;
    height: 80%;
    background: #ececec;
    font-size: 20px;
  }
  & > input:focus {
    outline: none;
  }
`;
export const OtherIcons = styled.div`
  grid-area: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SendCircle = styled.div`
  grid-area: rightt;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: green;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatSelectedProfileImage = styled.div`
  margin-top: 20px;
  width: 100%;
  & > div {
    width: 30%;
    margin: auto;
  }
  & > div > h4 {
    font-size: 30;
    line-height: 0;
  }
  & > div > p {
    font-size: 30;
    line-height: 0;
  }
`;
export const ChatSelectedProfileName = styled.div``;
export const ChatSelectedProfileDesignation = styled.div``;
