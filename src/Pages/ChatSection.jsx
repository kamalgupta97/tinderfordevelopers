import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
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

export const ChatSection = () => {
  const [myemail, setmyemail] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedUsername, setSelectedUsername] = useState("");
  const [selectedprofilePhoto, setSelectedprofilePhoto] = useState("");
  const [slectedusersMessages, setslectedusersMessages] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["myinfo"]);
  const users = ["kamalgupta97", "aleemmasai", "rahulmasai", "adityamasai"];
  const profiles = [
    "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512",
    "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7QC3L7-2a36989f2eb9-512",
    "https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7QAPCP-ccef9b832cf2-512",
    "https://ca.slack-edge.com/T02AMEPGW3Y-U02DQJ38AGG-a88f87687299-512",
  ];
  const usernames = [
    "Kamal Gupta",
    "Aleem Alam",
    "Rahul Rajput",
    "Aditya Kumar",
  ];
  const socket = useContext(SocketContext);
  useEffect(() => {
    if (!cookies.email || !cookies.name || !cookies.myprofilurl) {
      const rand = Math.floor(Math.random() * 4);
      console.log(rand);
      setCookie("email", users[rand], {
        path: "/",
      });
      console.log(rand);
      setCookie("myprofilurl", profiles[rand], { path: "/" });
      console.log(rand);
      setCookie("name", usernames[rand], { path: "/" });
    }
    setmyemail(cookies.email);

    socket.on("message", (data) => {
      setslectedusersMessages([...slectedusersMessages, data]);
    });
  });
  useEffect(() => {
    socket.emit("requestAllusers", cookies.email);
  }, [myemail]);
  useEffect(() => {
    socket.on("getallusers", (data) => {
      setallUsers([...data]);
    });
  }, []);

  useEffect(() => {
    socket.on("output", (data) => {
      console.log(data, "output");
      setslectedusersMessages(data);
    });
  }, [selectedUsername]);
  const handlSelectFriend = (Name, profile_photo, email) => {
    setSelectedEmail(email);
    setSelectedUsername(Name);
    setSelectedprofilePhoto(profile_photo);

    const payload = {
      fromUser: cookies.email,
      toUser: email,
    };
    socket.emit("userDetails", payload);
  };

  return (
    <ChatContainer>
      <ChatCont>
        <ChatFriendList>
          <Myprofile>
            <Avatar alt="Remy Sharp" src={cookies.myprofilurl} />
            <ProfileName>
              <h4>{cookies.name}</h4>
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
            {allUsers?.map((item) => (
              <ChatList
                key={item._id}
                {...item}
                handlSelectFriend={handlSelectFriend}
              />
            ))}
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
          <div>
            <UserChatSelectedProfile
              selectedprofilePhoto={selectedprofilePhoto}
              selectedUsername={selectedUsername}
            />
          </div>
        </ChatSelectedProfile>
      </ChatCont>
    </ChatContainer>
  );
};
