import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ChatList from "../ChatList";
import "../../styles/ChatList.css";
import "../../styles/Header.css";
function Header() {
  //to get the darkMode var from my store using useSelector hook

  const [isOpen, setIsOpen] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showColor2, setShowColor2] = useState(false);
  const [showColor3, setShowColor3] = useState(false);

  const [headerIcon, setHeaderIcon] = useState(false);
  const [headerIcon2, setHeaderIcon2] = useState(false);
  const [headerIcon3, setHeaderIcon3] = useState(false);
  const [headerIcon4, setHeaderIcon4] = useState(false);
  const [headerIcon5, setHeaderIcon5] = useState(false);

  const [showTheLine2, setLine2] = useState(false);
  const [showTheLine3, setLine3] = useState(false);
  const [showTheLine4, setLine4] = useState(false);
  const [showTheLine5, setLine5] = useState(false);
  const [showTheLine6, setLine6] = useState(false);

  const changeColor = () => {
    setShowColor(!showColor);
  };

  const changeColor2 = () => {
    setShowColor2(!showColor2);
  };

  const OpenChatList = () => {
    setShowColor3(!showColor3);
    setIsOpen(!isOpen);
  };

  const triggerMe = () => {
    setHeaderIcon(!headerIcon);
    setLine2(!showTheLine2);
  };

  const triggerMe2 = () => {
    setHeaderIcon2(!headerIcon2);
    setLine3(!showTheLine3);
  };

  const triggerMe3 = () => {
    setHeaderIcon3(!headerIcon3);
    setLine4(!showTheLine4);
  };

  const triggerMe4 = () => {
    setHeaderIcon4(!headerIcon4);
    setLine5(!showTheLine5);
  };

  const triggerMe5 = () => {
    setHeaderIcon5(!headerIcon5);
    setLine6(!showTheLine6);
  };

  return (
    <div className="my__header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/120px-2021_Facebook_icon.svg.png"
          alt="facebook_logo"
          style={{ cursor: "pointer" }}
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        {/* for each of those icons create a div. The middle icons*/}

        <div
          className="header__option "
          onClick={triggerMe5}
          style={{ color: headerIcon5 ? "#1770E6" : "#808080" }}
        >
          <div
            style={{ borderBottom: showTheLine6 ? "4px solid #2e81f4" : "" }}
          >
            <HomeIcon fontSize="large" titleAccess="Home" />
          </div>
        </div>

        <div
          className="header__option"
          onClick={triggerMe}
          style={{ color: headerIcon ? "#1770E6" : "#808080" }}
        >
          <div
            style={{ borderBottom: showTheLine2 ? "4px solid #2e81f4" : "" }}
          >
            <OndemandVideoIcon fontSize="large" titleAccess="Watch" />
          </div>
        </div>

        <div
          className="header__option"
          onClick={triggerMe2}
          style={{ color: headerIcon2 ? "#1770E6" : "#808080" }}
        >
          <div
            style={{ borderBottom: showTheLine3 ? "4px solid #2e81f4" : "" }}
          >
            <StorefrontIcon fontSize="large" titleAccess="Marketplace" />
          </div>
        </div>

        <div
          className="header__option"
          onClick={triggerMe3}
          style={{ color: headerIcon3 ? "#1770E6" : "#808080" }}
        >
          <div
            style={{ borderBottom: showTheLine4 ? "4px solid #2e81f4" : "" }}
          >
            <PeopleAltOutlinedIcon fontSize="large" titleAccess="Group" />
          </div>
        </div>

        <div
          className="header__option"
          onClick={triggerMe4}
          style={{ color: headerIcon4 ? "#1770E6" : "#808080" }}
        >
          <div
            style={{ borderBottom: showTheLine5 ? "4px solid #2e81f4" : "" }}
          >
            <VideogameAssetIcon fontSize="large" titleAccess="Games" />
          </div>
        </div>
      </div>

      {/*THe right portions*/}
      <div className="header__right">
        <div className="circle">
          <IconButton
            className="iconic"
            onClick={changeColor}
            style={{ color: showColor ? "#1770E6" : " #000" }}
          >
            <WidgetsIcon titleAccess="Menu" className="first" />
          </IconButton>
        </div>
        <div className="circle">
          <IconButton
            className="iconic"
            onClick={OpenChatList}
            style={{ color: showColor3 ? "#1770E6" : " #000" }}
          >
            <ModeCommentIcon titleAccess="Messenger" />
          </IconButton>
        </div>
        <div className="circle">
          <IconButton
            className="iconic"
            onClick={changeColor2}
            style={{ color: showColor2 ? "#1770E6" : " #000" }}
          >
            <NotificationsActiveIcon titleAccess="Notifications" />
          </IconButton>
        </div>
        <div className="header__info">
          <Avatar
            src=""
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            title="Cont"
          />
        </div>
        <div className={`dropdown-menu-chat ${isOpen ? "active" : "inactive"}`}>
          <ChatList />
        </div>
      </div>
    </div>
  );
}

export default Header;
