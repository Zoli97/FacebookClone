import { Avatar } from "@mui/material";
import React from "react";
import "../../styles/SidebarItem.css";

//take props, receive props inside,if there is a src if ii pass iin the source prop then render out the avatar.
//if i pass in an icon then only then am i rendering out the icon
function SidebarItem({ src, Icon, title }) {
  return (
    <div className="sidebarItem">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarItem;
