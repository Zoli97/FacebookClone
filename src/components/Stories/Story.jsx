import { Avatar } from "@mui/material";
import React from "react";
import "../../styles/Story.css";

//now the sotyr is going to have the props
function Story({ image, profileSrc, name }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{name}</h4>
    </div>
  );
}

export default Story;
