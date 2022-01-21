import React, { useContext, useEffect, useState } from "react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ChatHeader,
  ChatHeaderImage,
  ChatHeaderName,
  ChatHeaderIcons,
  MessageBox,
  Friendsmessage,
  Mymessage,
  StickyMessage,
  SingleMessageItem,
  SingleMessageItemImg,
  StickyMessageMe,
  TypeMessageContainer,
  TypeMessageCont,
  MicIconType,
  TypeArea,
  OtherIcons,
  SendCircle,
} from "../Styles";
import SocketContext from "../Context/SocketContext";

const myprofilurl =
  "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512";
export const MyChatRoom = ({
  slectedusersMessages,
  selectedprofilePhoto,
  selectedUsername,
  cookies,
  selectedEmail,
}) => {
  console.log(selectedUsername);
  const socket = useContext(SocketContext);
  const [newmessage, setnewmessage] = useState("");
  const handleSend = () => {
    const payload = {
      fromUser: cookies.Name,
      toUser: selectedEmail,
      msg: newmessage,
    };
    setnewmessage("");

    socket.emit("chatMessage", payload);
  };
  return (
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
          <SingleMessageItem key={i}>
            {item.from == cookies.Name ? (
              <Mymessage>
                {slectedusersMessages[i].from !==
                  slectedusersMessages[i + 1]?.from && (
                  <SingleMessageItemImg>
                    <Avatar
                      alt="Remy Sharp"
                      src={myprofilurl}
                      sx={{ width: 25, height: 25 }}
                    />
                  </SingleMessageItemImg>
                )}

                <StickyMessageMe>
                  <p>{item.message}</p>
                </StickyMessageMe>
              </Mymessage>
            ) : (
              <Friendsmessage>
                {" "}
                <StickyMessage>
                  <p>{item.message}</p>
                </StickyMessage>
                {slectedusersMessages[i].from !==
                  slectedusersMessages[i + 1]?.from && (
                  <SingleMessageItemImg>
                    <Avatar
                      alt="Remy Sharp"
                      src={selectedprofilePhoto}
                      sx={{ width: 25, height: 25 }}
                    />
                  </SingleMessageItemImg>
                )}
              </Friendsmessage>
            )}
          </SingleMessageItem>
        ))}
      </MessageBox>
      <TypeMessageContainer>
        <TypeMessageCont>
          <MicIconType>
            <MicOutlinedIcon />
          </MicIconType>
          <TypeArea>
            <input
              type="text"
              placeholder="Write Something..."
              value={newmessage}
              onChange={(e) => {
                setnewmessage(e.target.value);
              }}
            />
          </TypeArea>
          <OtherIcons>
            <AttachFileOutlinedIcon />
            <CameraAltOutlinedIcon />
            <SentimentVerySatisfiedIcon />
          </OtherIcons>
          <SendCircle onClick={handleSend}>
            <SendIcon />
          </SendCircle>
        </TypeMessageCont>
      </TypeMessageContainer>
    </>
  );
};
