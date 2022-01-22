import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import {
  SearchCont,
  SearchBox,
  SerachBoxInput,
  ChatSelectedProfileImage,
  ChatSelectedProfileName,
  ChatSelectedProfileDesignation,
} from "../Styles";
export const UserChatSelectedProfile = ({
  selectedUsername,
  selectedprofilePhoto,
}) => {
  return (
    <div>
      <SearchCont>
        <SearchBox>
          <SearchIcon />
          <SerachBoxInput placeholder="Search People"></SerachBoxInput>
        </SearchBox>
      </SearchCont>

      <ChatSelectedProfileImage>
        <div>
          <Avatar
            alt="Remy Sharp"
            src={selectedprofilePhoto}
            sx={{ width: 100, height: 100 }}
          />
          <h4>{selectedUsername}</h4>
          <p>{selectedUsername}</p>
        </div>
      </ChatSelectedProfileImage>
    </div>
  );
};
