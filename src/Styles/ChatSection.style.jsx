import styled from "styled-components";
import { device } from "./MediaQueries.style";

export const ChatContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgb(0, 200, 5);
`;

export const ChatCont = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  display: grid;
  @media only screen and ${device.laptop} {
    grid-template-columns: 24% 50% 24%;
    grid-template-rows: 100%;
    grid-gap: 1%;
    grid-template-areas: "list room profile";
  }
  @media only screen and ${device.laptopL} {
    grid-template-columns: 24% 50% 24%;
    grid-template-rows: 100%;
    grid-gap: 1%;
    grid-template-areas: "list room profile";
  }
  @media only screen and ${device.desktop} {
    grid-template-columns: 24% 50% 24%;
    grid-template-rows: 100%;
    grid-gap: 1%;
    grid-template-areas: "list room profile";
  }
  @media only screen and ${device.desktopL} {
    grid-template-columns: 24% 50% 24%;
    grid-template-rows: 100%;
    grid-gap: 1%;
    grid-template-areas: "list room profile";
  }
  @media only screen and ${device.ipad} {
    grid-template-columns: 24% 50% 24%;
    grid-template-rows: 100%;
    grid-gap: 1%;
    grid-template-areas: "room room room";
  }
`;

export const ChatFriendList = styled.div`
cursor
  grid-area: list;
  background: #ececec;
  // border-top-left-radius: 20px;
  // border-bottom-left-radius: 20px;
`;

export const ChatRoom = styled.div`
  width: 100%;
  grid-area: room;
  background: #fff;
  @media only screen and ${device.ipad} {
  }
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
  @media only screen and ${device.ipad} {
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
    color: rgb(0, 200, 5);
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
    background: rgb(0, 200, 5);
  }
`;

export const SingleFriend = styled.div`
  color: rgb(0, 200, 5);
  &:hover {
    // background: #cecece;
    color: teal !important;
  }
  cursor: pointer;
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
  @media only screen and ${device.ipad} {
    width: 90%;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 100%;
    grid-template-areas: "img prof ico";
  }
  @media only screen and ${device.tablet} {
    width: 90%;
    grid-template-columns: 10% 75% 10%;
    grid-template-rows: 100%;
    grid-template-areas: "img prof ico";
  }
  @media only screen and ${device.mobileL} {
    width: 90%;
    grid-template-columns: 20% 60% 10%;
    grid-template-rows: 100%;
    grid-template-areas: "img prof ico";
  }

  @media only screen and ${device.mobileS} {
    width: 90%;
    grid-template-columns: 20% 50% 20%;
    grid-template-rows: 100%;
    grid-template-areas: "img prof ico";
  }
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
  @media only screen and ${device.mobileS} {
    width: 95%;
    ::-webkit-scrollbar {
      width: 5px;
    }
  }
`;
export const Friendsmessage = styled.div`
  grid-area: friendmessage;
  align-items: end;
  text-align: left;
  display: grid;
  justify-content: right;
  grid-template-rows: 100%;
  grid-template-columns: 90% 10%;
  grid-template-areas: "singlemes singleimg";
  @media only screen and ${device.mobileS} {
    grid-template-columns: 85% 15%;
    grid-template-areas: "singlemes singleimg";
  }
`;
export const Mymessage = styled.div`
  width: 100%;
  grid-area: mymessage;
  align-items: end;
  text-align: left;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 100%;
  grid-template-areas: "singleimg singlemes";
  @media only screen and ${device.mobileS} {
    grid-template-columns: 15% 85%;
    grid-template-areas: "singleimg singlemes";
  }
`;

export const SingleMessageItem = styled.div`
  margin-top: 10px;
  width: 90%;
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 20%;
  grid-template-areas: "mymessage friendmessage";
  @media only screen and ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }
`;

export const StickyMessage = styled.div`
  background: #cecece;
  padding: 1px 20px;
  border-radius: 10px 10px 0 10px;
  color: black;
  grid-area: singlemes;
`;

export const StickyMessageMe = styled.div`
  background: rgb(0, 200, 5);
  padding: 1px 20px;
  border-radius: 10px 10px 10px 0px;
  color: #fff;
  grid-area: singlemes;
`;

export const SingleMessageItemImgMe = styled.div`
  grid-area: singleimg;
  display: flex;
  justify-content: start;
`;
export const SingleMessageItemImgFriend = styled.div`
  grid-area: singleimg;
  display: flex;
  justify-content: end;
`;

export const TypeMessageContainer = styled.div`
  width: 95%;
  margin: auto;
  height: 60px;
  border-radius: 30px;
  background: #ececec;
  @media only screen and ${device.mobileS} {
    height: 60px;
  }
`;
export const TypeMessageCont = styled.div`
  display: grid;
  width: 90%;
  height: 100%;
  align-items: center;
  grid-template-columns: 7% 80% 11% 3%;
  gap: 1%;
  grid-template-areas: "lef mid right rightt";
  @media only screen and ${device.mobileS} {
    grid-template-columns: 15% 35% 30% 20%;
    grid-template-areas: "lef mid right rightt";
  }
  @media only screen and ${device.mobileM} {
    background: red;
    grid-template-columns: 10% 50% 25% 15%;
    grid-template-areas: "lef mid right rightt";
  }
  @media only screen and ${device.mobileL} {
    background: rgb(0, 200, 5);
    grid-template-columns: 10% 50% 25% 15%;
    grid-template-areas: "lef mid right rightt";
  }
`;

export const MicIconType = styled.div`
  grid-area: lef;
  margin-left: 10px;
`;
export const TypeArea = styled.div`
  grid-area: mid;

  & > input {
    border: none;
    width: 100%;
    background: #ececec;
    font-size: 20px;
  }
  & > input:focus {
    outline: none;
  }
  @media only screen and ${device.mobileS} {
    & > input {
      font-size: 16px;
    }
  }
`;
export const OtherIcons = styled.div`
  grid-area: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SendCircle = styled.div`
  cursor: pointer;
  &:hover {
    background: teal;
  }
  grid-area: rightt;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: rgb(0, 200, 5);
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
