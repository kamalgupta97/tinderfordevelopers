import React, { useState } from "react";
import {
  ChatContainer,
  ChatCont,
  ChatFriendList,
  ChatRoom,
  ChatSelectedProfile,
  Myprofile,
  SearchCont,
  SearchBox,
  SerachBoxInput,
  MyfrindslIst,
  ProfileName,
  ChatHeader,
  DefaultImage,
  ChatHeaderImage,
  ChatHeaderName,
  ChatHeaderIcons,
  MessageBox,
  Friendsmessage,
  Mymessage,
  StickyMessage,
} from "../Styles";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { BuddyList } from "../Utils/localStorage";
import Avatar from "@mui/material/Avatar";
import { ChatList } from "../Components/ChatList";

export const ChatSection = () => {
  const myprofilurl =
    "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512";
  const [selectedUsername, setSelectedUsername] = useState("");
  const [selectedprofilePhoto, setSelectedprofilePhoto] = useState("");
  const [slectedusersMessages, setslectedusersMessages] = useState([]);
  const handlSelectFriend = (Name, profile_photo, message) => {
    setSelectedUsername(Name);
    setSelectedprofilePhoto(profile_photo);
    setslectedusersMessages(message);
    console.log(slectedusersMessages);
  };
  return (
    <ChatContainer>
      <ChatCont>
        <ChatFriendList>
          <Myprofile>
            <Avatar alt="Remy Sharp" src={myprofilurl} />
            <ProfileName>
              <h4>Kamal Gupta</h4>
              <p>Instructional Associate</p>
            </ProfileName>
          </Myprofile>
          <SearchCont>
            <SearchBox>
              <SearchIcon />
              <SerachBoxInput placeholder="Search friend"></SerachBoxInput>
            </SearchBox>
          </SearchCont>
          <MyfrindslIst>
            {BuddyList.map((item) => (
              <ChatList
                key={item.id}
                {...item}
                handlSelectFriend={handlSelectFriend}
              />
            ))}
          </MyfrindslIst>
        </ChatFriendList>
        <ChatRoom>
          {selectedUsername !== "" ? (
            <>
              <ChatHeader>
                <ChatHeaderImage>
                  <Avatar alt="Remy Sharp" src={selectedprofilePhoto} />
                </ChatHeaderImage>
                <ChatHeaderName>
                  <h4>{selectedUsername}</h4>
                </ChatHeaderName>
                <ChatHeaderIcons>
                  <SearchIcon />
                  <FavoriteBorderIcon />
                  <NotificationsActiveOutlinedIcon />
                </ChatHeaderIcons>
              </ChatHeader>
              <MessageBox>
                {slectedusersMessages?.map((item, i) => (
                  <div key={i}>
                    {item.sender == "kamalmasai" ? (
                      <Mymessage>
                        <Avatar alt="Remy Sharp" src={myprofilurl} />
                        <StickyMessage>
                          <p>{item.message}</p>
                        </StickyMessage>
                      </Mymessage>
                    ) : (
                      <Friendsmessage>
                        {" "}
                        <StickyMessage>
                          <p>{item.message}</p>
                        </StickyMessage>
                        <Avatar alt="Remy Sharp" src={selectedprofilePhoto} />
                      </Friendsmessage>
                    )}
                  </div>
                ))}
              </MessageBox>
            </>
          ) : (
            <DefaultImage>
              <img
                src="https://www.clipartmax.com/png/full/146-1460542_hire-yii-developers-programmer-clipart.png"
                alt=""
              />
            </DefaultImage>
          )}
        </ChatRoom>
        <ChatSelectedProfile></ChatSelectedProfile>
      </ChatCont>
    </ChatContainer>
  );
};
