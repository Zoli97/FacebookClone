import React from "react";
import Story from "./Story";
import Carousel from "nuka-carousel";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "../../styles/StoryReel.css";
import { Zoom } from "@mui/material";

function StoryReel() {
  return (
    <div className="container">
      <div className="header__container">
        <div className="story__box">
          <MenuBookOutlinedIcon className="storyI" />
          <h4>Stories</h4>
        </div>
        <div className="reels__box">
          <VideoLibraryIcon className="reelsI" />
          <h4>Reels</h4>
        </div>
      </div>
      <div className="storyReel">
        {/*Story*/}
        <Carousel animation={Zoom} slidesToShow={3}>
          <Story
            profileSrc="https://faces-img.xcdn.link/image-lorem-face-6404.jpg"
            image="https://faces-img.xcdn.link/image-lorem-face-6404.jpg"
            name="Paul Anton"
          />

          <Story
            profileSrc="https://faces-img.xcdn.link/image-lorem-face-2073.jpg"
            name="Elona Hole"
            image="https://images.pexels.com/photos/10609938/pexels-photo-10609938.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
          <Story
            profileSrc="https://faces-img.xcdn.link/image-lorem-face-5743.jpg"
            image="https://images.pexels.com/photos/14168949/pexels-photo-14168949.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            name="Brad Nom"
          />

          <Story
            profileSrc="https://faces-img.xcdn.link/image-lorem-face-1939.jpg"
            name="John Craig"
            image="https://images.pexels.com/photos/13986371/pexels-photo-13986371.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default StoryReel;
