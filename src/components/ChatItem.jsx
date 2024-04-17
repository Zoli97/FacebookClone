import React from "react";
import { Avatar } from "@mui/material";
import Moment from "react-moment";
import "../styles/ChatItem.css";
function ChatItem({ name, profilePicture }) {
  return (
    <div className="sidebar-chat">
      <Avatar src={profilePicture} className="avatar" />
      <div className="chat__info">
        <h3>{name}</h3>
        <p>
          Last message: <Moment fromNow>2023-02-02T12:59-0500</Moment>
        </p>
      </div>
    </div>
  );
}

export default ChatItem;
