import React, { useState } from "react";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import "../../styles/MessageSender.css";
function MessageSender() {
  //anytime i have some kind of click it actually give me something called an event and dont want to refresh when i submit.
  //every time i type something and hit enter actaully submit the form and that trigges this function
  //on Change fire off an event every time i start to type, what i just typed => setInput(event.target.value), onChange when i say to start typing in it fires the event
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //some clever db stuff
    ///reset the values inside of this
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="meesageSender">
      <div className="meesageSender__top">
        <Avatar />
        <form action="">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            className="messageSender_input"
            placeholder={`What's on your mind?`}
          />
          {/* <input
            type="text"
            placeholder="image URL (Option)"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          /> */}
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="meesageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
