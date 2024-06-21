import React, { useState, useRef, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Avatar, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { FaFacebookMessenger } from "react-icons/fa6";
import { RiNotification2Fill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { useTheme } from "../../ThemeContext";
import { useStateValue } from "../../context/StateProvider";
import ChatList from "../ChatList";
import "../../styles/ChatList.css";
import "../../styles/Header.css";
import { signInWithPopup } from "firebase/auth";
import { authentication, provider } from "../../firebase";
function Header() {
  //pull the info from the store
  const [{ user }, dispatch] = useStateValue();
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

  //get the user from localstorage
  const name = localStorage.getItem("Name");
  const profile_img = localStorage.getItem("Image");

  const { theme } = useTheme();

  const changeColor = () => {
    setShowColor(!showColor);
  };

  const changeColor2 = () => {
    setShowColor2(!showColor2);
  };

  // const OpenChatList = () => {
  //   setShowColor3(!showColor3);
  //   setIsOpen(!isOpen);
  // };

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
  //##A9AAAC

  const handleSelect = (title) => {
    setSelectedIcon(title);
  };
  //state variables to track the selected icons
  const [selectedIcon, setSelectedIcon] = useState("Home");

  // Function to handle icon selection
  const handleSelectIcon = (iconName) => {
    //if the clicked icon is already selected, it deselects it; otherwise, it selects it.
    setSelectedIcon(iconName === selectedIcon ? null : iconName); // Toggle selection
  };

  const listRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  //check whether the click occured outside the list.

  const handleOutsideOfTheList = (e) => {
    //condition became true if the click occured outside of the list.
    if (listRef.current && !listRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  //the event listener is added when the component mounts and removed when its unmounted.
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideOfTheList);
    return () => {
      document.addEventListener("mousedown", handleOutsideOfTheList);
    };
  }, []);

  return (
    <div
      className={`my__header box_shadows_ border_bottom_  __header__ ${theme} `}
    >
      <div className={`header__left  `}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/120px-2021_Facebook_icon.svg.png"
          alt="facebook_logo"
          style={{ cursor: "pointer" }}
        />
        <div className={`header__input __header__input__ ${theme}`}>
          <SearchIcon className={`__header__input__icon ${theme}`} />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        {/* for each of those icons create a div, you can conditionally apply the color styling */}

        <div
          className={`header__option  bg_container_icons_ home ${theme}`}
          onClick={() => handleSelectIcon("Home")}
          style={{
            color: headerIcon5 ? "#1770E6" : "#808080",
            borderBottom: selectedIcon === "Home" ? "2px solid #2e81f4" : "",
          }}
        >
          <div className={`header__option-container `}>
            <HomeIcon
              className={`_bg_icons_ `}
              sx={{
                fontSize: 30,
                color: selectedIcon === "Home" ? "#2e81f4" : "_bg_icons_",
              }}
            />
          </div>
        </div>

        <div
          className={`header__option bg_container_icons_ watch ${theme}`}
          onClick={() => handleSelectIcon("Watch")}
          style={{
            color: headerIcon ? "#1770E6" : "#808080",
            borderBottom: selectedIcon === "Watch" ? "2px solid #2e81f4" : "",
          }}
        >
          <div>
            <OndemandVideoIcon
              className="_bg_icons_ watch"
              titleAccess="Watch"
              sx={{
                fontSize: 25,
                color: selectedIcon === "Watch" ? "#2e81f4" : "_bg_icons_",
              }}
            />
          </div>
        </div>

        <div
          className={`header__option bg_container_icons_ market ${theme}`}
          onClick={() => handleSelectIcon("Marketplace")}
          style={{
            color: headerIcon2 ? "#1770E6" : "#808080",
            borderBottom:
              selectedIcon === "Marketplace" ? "2px solid #2e81f4" : "",
          }}
        >
          <div>
            <StorefrontIcon
              titleAccess="Marketplace"
              sx={{
                fontSize: 25,
                color:
                  selectedIcon === "Marketplace" ? "#2e81f4" : "_bg_icons_",
              }}
            />
          </div>
        </div>

        <div
          className={`header__option bg_container_icons_ group ${theme}`}
          onClick={() => handleSelectIcon("Group")}
          style={{
            color: headerIcon3 ? "#1770E6" : "#808080",
            borderBottom: selectedIcon === "Group" ? "2px solid #2e81f4" : "",
          }}
        >
          <div>
            <PeopleAltOutlinedIcon
              titleAccess="Group"
              sx={{
                fontSize: 25,
                color: selectedIcon === "Group" ? "#2e81f4" : "_bg_icons_",
              }}
            />
          </div>
        </div>

        <div
          className={`header__option bg_container_icons_ games ${theme}`}
          onClick={() => handleSelectIcon("Games")}
          style={{
            color: headerIcon4 ? "#1770E6" : "#808080",
            borderBottom: selectedIcon === "Games" ? "2px solid #2e81f4" : "",
          }}
        >
          <div>
            <VideogameAssetOutlinedIcon
              titleAccess="Games"
              sx={{
                fontSize: 25,
                color: selectedIcon === "Games" ? "#2e81f4" : "_bg_icons_",
              }}
            />
          </div>
        </div>
      </div>

      {/*THe right portions first bg_right_icons_ bg_right_icons__*/}
      <div className="header__right">
        <div className={`circle app ${theme}`}>
          <IconButton className="iconic" onClick={changeColor}>
            <IoApps title="Menu" className={`app ${theme} `} fontSize={20} />
          </IconButton>
        </div>
        <div className={`circle messenger ${theme}`}>
          <IconButton
            className="iconic"
            onClick={handleOpen}
            style={{ color: showColor3 ? "#1770E6" : " #000" }}
          >
            <FaFacebookMessenger
              title="Messenger"
              className={`messenger ${theme}`}
              fontSize={20}
            />
          </IconButton>
        </div>
        <div className={`circle notify ${theme}`}>
          <IconButton
            className="iconic"
            onClick={changeColor2}
            style={{ color: showColor2 ? "#1770E6" : " #000" }}
          >
            <RiNotification2Fill
              title="Notifications"
              className={`notify ${theme}`}
              fontSize={20}
            />
          </IconButton>
        </div>
        <div className="header__info">
          <img
            src={profile_img}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
            title="Cont"
          />
        </div>
        <div
          ref={listRef}
          className={`dropdown-menu-chat ${isOpen ? "active" : "inactive"}`}
        >
          <ChatList />
        </div>
      </div>
    </div>
  );
}

export default Header;
