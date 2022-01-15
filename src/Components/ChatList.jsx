import React from "react";
import {
  SingleFriend,
  SingleProfileName,
  SingleProfileTime,
  SingleProfilePhoto,
} from "../Styles";
import Avatar from "@mui/material/Avatar";

export const ChatList = ({
  id,

  profile_pic,
  userName,
  Name,
  messages,
}) => {
  console.log(id, profile_pic, userName, Name, messages);
  return (
    <SingleFriend>
      <SingleProfilePhoto>
        <Avatar alt="Remy Sharp" src={profile_pic} />
      </SingleProfilePhoto>
      <SingleProfileName>
        <h4>{Name}</h4>
        <p>{messages[messages.length - 1].message}</p>
      </SingleProfileName>
      <SingleProfileTime>
        {messages[messages.length - 1].time}
      </SingleProfileTime>
    </SingleFriend>
  );
};
