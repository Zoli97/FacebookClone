import React from "react";
import { Avatar } from "@mui/material";
import { useTheme } from "../../ThemeContext";
import "../../styles/SidebarItem.css";

//take props, receive props inside,if there is a src if ii pass iin the source prop then render out the avatar.
//if i pass in an icon then only then am i rendering out the icon
function SidebarItem({ src, imgSrc, title }) {
  const { theme } = useTheme();
  return (
    <div className={`sidebarItem items ${theme}`}>
      {src && <Avatar src={src} />}
      {<img src={imgSrc} alt="img" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarItem;
