import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import GifBoxIcon from "@mui/icons-material/GifBox";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "../styles/ChatBox.css";
import axios from "../axios";
import { closeChatBox } from "../store/chat";

function ChatBox({ messages }) {
  //by clicking on the clsoe button i will be dispatch an action, its just close the chatbox.
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showColor2, setShowColor2] = useState(false);
  const [showColor3, setShowColor3] = useState(false);
  const [showColor4, setShowColor4] = useState(false);
  const [showColor5, setShowColor5] = useState(false);
  const [input, setInput] = useState("");
  //I256HVx8LvsJMmYE pssd
  const profilePicture =
    "https://faces-img.xcdn.link/thumb-lorem-face-4352_thumb.jpg";

  const SubmitHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  // i need to keep tracking what the user typing

  const sendTheMessages = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      messages: input,
      name: "Alex",
      timestamp: new Date().toLocaleTimeString(),
      received: false,
    });

    setInput("");
  };

  const changeColor = () => {
    setShowColor(!showColor);
  };
  const changeColor2 = () => {
    setShowColor2(!showColor2);
  };
  const changeColor3 = () => {
    setShowColor3(!showColor3);
  };
  const changeColor4 = () => {
    setShowColor4(!showColor4);
  };
  const changeColor5 = () => {
    setShowColor5(!showColor5);
  };
  return (
    <div>
      <div className={`chat-box ${isOpen ? "active" : "inactive"}`}>
        <div className="chat__header">
          <Avatar src="https://faces-img.xcdn.link/thumb-lorem-face-4352_thumb.jpg" />

          <div className="chat__info">
            <h4 className="name">Olga Steluta</h4>
            <p>Activ(a) {new Date().toLocaleTimeString()}</p>
          </div>

          <div className="chat__icons">
            <IconButton className="iconic2">
              <CallIcon />
            </IconButton>
            <IconButton className="iconic2">
              <VideocamIcon />
            </IconButton>
            <IconButton className="iconic2">
              <MinimizeIcon />
            </IconButton>
            <IconButton
              className="iconic2"
              onClick={() => dispatch(closeChatBox())}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="chat__body">
          {messages.map((message, index) => (
            <div className="chat__details" key={index}>
              <Avatar src={profilePicture} className="avatar" />
              <p
                className={`chat__message ${
                  message.received && "chat__reciever"
                }`}
              >
                {message.messages}
              </p>
            </div>
          ))}
        </div>

        <div className="chat__footer">
          <IconButton
            className="iconic2"
            onClick={changeColor}
            style={{ color: showColor ? "#0096c7" : " #bcc0c4" }}
          >
            <AddCircleIcon />
          </IconButton>

          <IconButton
            className="iconic2"
            onClick={changeColor2}
            style={{ color: showColor2 ? "#0096c7" : " #bcc0c4" }}
          >
            <PermMediaIcon />
          </IconButton>

          <IconButton
            className="iconic2"
            onClick={changeColor3}
            style={{ color: showColor3 ? "#0096c7" : " #bcc0c4" }}
          >
            <GifBoxIcon />
          </IconButton>

          <form action="">
            <div className="formInput">
              <input
                type="text"
                placeholder="Aa"
                value={input}
                onChange={SubmitHandler}
                className="input-field"
              />

              <IconButton
                className="iconic2"
                onClick={changeColor4}
                style={{ color: showColor4 ? "#0096c7" : " #bcc0c4" }}
              >
                <EmojiEmotionsIcon className="icon" />
              </IconButton>
            </div>
            <button onClick={sendTheMessages} className="btn">
              Send a message
            </button>
          </form>

          <IconButton
            className="iconic2"
            onClick={changeColor5}
            style={{ color: showColor5 ? "#0096c7" : " #bcc0c4" }}
          >
            <ThumbUpIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
