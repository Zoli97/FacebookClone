import React from "react";
import { ContactChat } from "../../chatData";
import ChatItem from "./ChatItem";
import "../../styles/ChatList2.css";
function ChatList() {
  return (
    <div className="chatlist">
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
