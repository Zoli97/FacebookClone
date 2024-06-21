import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useTheme } from "../../ThemeContext";
import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../../styles/MessageSender.css";

function MessageSender() {
  //pull the user
  //const [{ user }, dispatch] = useStateValue();
  //get the user from localstorage
  const name = localStorage.getItem("Name");
  const profile_img = localStorage.getItem("Image");
  const { theme } = useTheme();
  //anytime i have some kind of click it actually give me something called an event and dont want to refresh when i submit.
  //every time i type something and hit enter actaully submit the form and that trigges this function
  //on Change fire off an event every time i start to type, what i just typed => setInput(event.target.value), onChange when i say to start typing in it fires the event
  //get the text efficiently.
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "fb_posts"), {
      message: input,
      username: name,
      profilePic: profile_img,
      image: imageUrl,
      timestamp: serverTimestamp(),
    });
    //some clever db stuff
    ///reset the values inside of this
    //so when i type in inputas soon i submit i want to push to the db.
    setInput("");
    setImageUrl("");
  };

  return (
    <div className={`meesageSender __sender__ ${theme}`}>
      <div className="meesageSender__top">
        <Avatar src={profile_img} />
        <form action="">
          <input
            ref={inputRef}
            type="text"
            name="post"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`messageSender_input  __input__ __hover__ ${theme}`}
            placeholder={`What's on your mind, ${name}?`}
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className={`messageSender_input  __input__ __hover__ ${theme}`}
            placeholder="image URL (Optional)"
          />

          <button hidden type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="meesageSender__bottom">
        <div className={`messageSender__option __hover__ ${theme}`}>
          <VideocamIcon style={{ color: "red" }} />
          <h3 className={`__text__ ${theme}`}>Live Video</h3>
        </div>
        <div className={`messageSender__option  __hover__ ${theme}`}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3 className={`__text__ ${theme}`}>Photo/Video</h3>
        </div>

        <div className={`messageSender__option __hover__ ${theme} `}>
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <h3 className={`__text__ ${theme}`}>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
