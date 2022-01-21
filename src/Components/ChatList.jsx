import React from "react";
import {
  SingleFriend,
  SingleProfileName,
  SingleProfileTime,
  SingleProfilePhoto,
} from "../Styles";
import Avatar from "@mui/material/Avatar";

export const ChatList = ({
  _id,
  profile_pic,
  Name,
  email,
  handlSelectFriend,
}) => {
  console.log(_id, profile_pic, email, Name);
  return (
    <SingleFriend onClick={() => handlSelectFriend(Name, profile_pic, email)}>
      <SingleProfilePhoto>
        <Avatar alt="Remy Sharp" src={profile_pic} />
      </SingleProfilePhoto>
      <SingleProfileName>
        <h4>{Name}</h4>
        {/* <p>{messages[messages.length - 1].message}</p> */}
      </SingleProfileName>
      <SingleProfileTime>
        {/* {messages[messages.length - 1].time} */}
      </SingleProfileTime>
    </SingleFriend>
  );
};
