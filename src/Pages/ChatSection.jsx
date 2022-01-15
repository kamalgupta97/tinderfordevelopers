import React from "react";
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
  SingleFriend,
  SingleProfileName,
} from "../Styles";
import SearchIcon from "@mui/icons-material/Search";

import { BuddyList } from "../Utils/localStorage";
import Avatar from "@mui/material/Avatar";
import { ChatList } from "../Components/ChatList";

export const ChatSection = () => {
  console.log(BuddyList);
  return (
    <ChatContainer>
      <ChatCont>
        <ChatFriendList>
          <Myprofile>
            <Avatar
              alt="Remy Sharp"
              src="https://ca.slack-edge.com/T02AMEPGW3Y-U02CL7Q99LP-6486727897a6-512"
            />
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
              <ChatList key={item.id} {...item} />
            ))}
          </MyfrindslIst>
        </ChatFriendList>
        <ChatRoom>2</ChatRoom>
        <ChatSelectedProfile>3</ChatSelectedProfile>
      </ChatCont>
    </ChatContainer>
  );
};
