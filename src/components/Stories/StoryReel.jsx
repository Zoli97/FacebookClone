import React from "react";
import Story from "./Story";
import { IconButton, Zoom } from "@mui/material";
import Carousel from "nuka-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { stories } from "../../storiesData";
import "../../styles/StoryReel.css";

function StoryReel() {
  return (
    <div className="container">
      <div className="storyReel">
        {/*Story*/}
        <Carousel
          animation={Zoom}
          slidesToShow={3}
          swiping={true}
          slideSpacing={4}
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton onClick={previousSlide}>
              <ArrowCircleLeftIcon sx={{ fontSize: 40, color: "#0a9abe" }} />
            </IconButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton onClick={nextSlide}>
              <ArrowCircleRightIcon sx={{ fontSize: 40, color: "#0a9abe" }} />
            </IconButton>
          )}
        >
          {stories.map((story, index) => (
            <Story
              key={index}
              name={story.name}
              profileSrc={story.profileSrc}
              image={story.image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default StoryReel;
