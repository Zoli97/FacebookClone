import React, { useRef } from "react";
import { contactList } from "../mockupData";
import ChatItem from "./ChatItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import "../styles/ChatList.css";

function ChatList() {
  return (
    <div>
      <HeaderTop>
        <h2>Conversatii</h2>
        <div>
          <IconButton>
            <MoreHorizIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton>
            <OpenInFullIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <IconButton>
            <RateReviewOutlinedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </div>
      </HeaderTop>

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

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default ChatList;
