import { Avatar } from "@mui/material";
import React from "react";
import { useTheme } from "../../ThemeContext";
import "../../styles/ChatItem2.css";
function ChatItem({ name, profilePicture }) {
  const { theme } = useTheme();
  return (
    <div
      className={`chat_item chat__item chat__item${theme}`}
      onClick={() => console.log("clicked")}
    >
      <Avatar src={profilePicture} className="avatar" />
      <div className="chat_info">
        <h4 className={`text ${theme}`}>{name}</h4>
      </div>
    </div>
  );
}

export default ChatItem;
