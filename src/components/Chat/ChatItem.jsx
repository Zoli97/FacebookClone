import { Avatar } from "@mui/material";
import React from "react";
import "../../styles/ChatItem2.css";
function ChatItem({ name, profilePicture }) {
  return (
    <div className="chat_item" onClick={() => console.log("clicked")}>
      <Avatar src={profilePicture} className="avatar" />
      <div className="chat_info">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default ChatItem;
