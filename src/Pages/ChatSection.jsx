import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { BuddyList } from "../Utils/localStorage";
import { ChatList } from "../Components/ChatList";
import SocketContext from "../Context/SocketContext";
import { MyChatRoom } from "../Components/MyChatRoom";
import { UserChatSelectedProfile } from "../Components/UserChatSelectedProfile";
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
  DefaultImage,
} from "../Styles";

const myprofilurl =
  "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512";
export const ChatSection = () => {
  const [myemail, setmyemail] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedUsername, setSelectedUsername] = useState("");
  const [selectedprofilePhoto, setSelectedprofilePhoto] = useState("");
  const [slectedusersMessages, setslectedusersMessages] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["myinfo"]);
  const users = ["aleemmasai", "rahulmasai", "adityamasai"];
  const socket = useContext(SocketContext);
  useEffect(() => {
    !cookies.Name &&
      setCookie("Name", users[Math.floor(Math.random() * 2)], {
        path: "/",
      });
    socket.on("getallusers", (data) => {
      setallUsers([...allUsers, ...data]);
      // console.log(data, "All Users");
    });
  });

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data, "message");
      outputMessage(data);
    });

    socket.on("output", (data) => {
      setslectedusersMessages([...slectedusersMessages, ...data]);
      console.log(data, "output");
    });
  }, [selectedUsername]);
  const handlSelectFriend = (Name, profile_photo, email) => {
    setSelectedEmail(email);
    setSelectedUsername(Name);
    setSelectedprofilePhoto(profile_photo);

    const payload = {
      fromUser: cookies.Name,
      toUser: email,
    };
    console.log(payload, "payload");
    socket.emit("userDetails", payload);
  };

  const outputMessage = (message) => {
    let newMessages = slectedusersMessages;
    let finalMessages = newMessages.concat(message);
    setslectedusersMessages(finalMessages);
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
            {allUsers?.map(
              (item) =>
                item.email !== cookies.Name && (
                  <ChatList
                    key={item._id}
                    {...item}
                    handlSelectFriend={handlSelectFriend}
                  />
                )
            )}

            {allUsers?.map(
              (item) => item.email !== cookies.Name && console.log(item)
            )}
          </MyfrindslIst>
        </ChatFriendList>
        <ChatRoom>
          {selectedUsername !== "" ? (
            <MyChatRoom
              slectedusersMessages={slectedusersMessages}
              selectedprofilePhoto={selectedprofilePhoto}
              selectedUsername={selectedUsername}
              cookies={cookies}
              selectedEmail={selectedEmail}
            />
          ) : (
            <DefaultImage>
              <img
                src="https://www.clipartmax.com/png/full/146-1460542_hire-yii-developers-programmer-clipart.png"
                alt=""
              />
            </DefaultImage>
          )}
        </ChatRoom>

        <ChatSelectedProfile>
          <UserChatSelectedProfile
            selectedprofilePhoto={selectedprofilePhoto}
            selectedUsername={selectedUsername}
          />
        </ChatSelectedProfile>
      </ChatCont>
    </ChatContainer>
  );
};
