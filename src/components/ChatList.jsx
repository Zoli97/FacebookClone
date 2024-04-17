import React from "react";
import { contactList } from "../mockupData";
import ChatItem from "./ChatItem";
import "../styles/ChatList.css";

function ChatList() {
  return (
    <div>
      <ul style={{ margin: "none", padding: "0.8em" }}>
        {contactList.map((user) => {
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
