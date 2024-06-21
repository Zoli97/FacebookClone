import React from "react";
import { ContactChat } from "../../chatData";
import ChatItem from "./ChatItem";
import "../../styles/ChatList2.css";
import { useTheme } from "../../ThemeContext";
function ChatList() {
  const { theme } = useTheme();
  return (
    <div className={`chatlist __chatlist__ ${theme}`}>
      <ul>
        {ContactChat.map((user) => {
          return (
            <ChatItem
              key={user.id}
              name={user.name}
              profilePicture={user.profilePic}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ChatList;
