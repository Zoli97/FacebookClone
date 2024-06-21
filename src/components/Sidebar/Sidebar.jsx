import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import { Avatar, Button } from "@mui/material";
import friend from "../../icons/friend.png";
import shop from "../../icons/shops.png";
import clock from "../../icons/clock.png";
import group from "../../icons/group.png";
import save from "../../icons/save.png";
import video from "../../icons/video.png";
import event from "../../icons/event.png";
import chart from "../../icons/chart.png";
import pic from "../../icons/pic.png";
import heart from "../../icons/heart.png";
import plant from "../../icons/plant.png";
import card from "../../icons/card.png";
import messenger from "../../icons/messenger.png";
import game from "../../icons/game.png";
import videogame from "../../icons/vgame.png";
import flag from "../../icons/flag.png";
import up from "../../icons/up.png";
import down from "../../icons/down.png";
import { useStateValue } from "../../context/StateProvider";
import styled from "styled-components";
import "../../styles/Sidebar.css";

function Sidebar() {
  //pull the inforomation from localstorage

  const name = localStorage.getItem("Name");
  const profile_img = localStorage.getItem("Image");

  //const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();
  //toggle the value of the boolean state var expand (expanding section, topggle the state of UI elem.)

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const renderMoreIcons = () => {
    if (expand) {
      return (
        <>
          <SidebarItem
            imgSrc={pic}
            title="Activitati recente privind reclamele"
          />
          <SidebarItem imgSrc={plant} title="Centrul despre climatologie" />
          <SidebarItem imgSrc={card} title="Comenzi si plati" />
          <SidebarItem imgSrc={game} title="Joaca jocuri" />
          <SidebarItem imgSrc={messenger} title="Messenger" />
          <SidebarItem imgSrc={flag} title="Pagini" />
          <SidebarItem imgSrc={videogame} title="Video de gaming" />
        </>
      );
    }
  };
  // const ToggleTheme = () => {
  //   dispatch(themeActions.toggleTheme());
  //   console.log("hello");
  // };
  //pass in diff attribute props
  return (
    <div className={`my__sidebar sidebarrr ${theme}`}>
      <div className="profile">
        <img
          src={profile_img}
          alt="name"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />
        <h4>{name}</h4>
      </div>
      <SidebarItem imgSrc={friend} title="Prieteni" />
      <SidebarItem imgSrc={clock} title="Amintiri" />
      <SidebarItem imgSrc={save} title="Salvare" />
      <SidebarItem imgSrc={group} title="Grupuri" />{" "}
      <SidebarItem imgSrc={video} title="Video" />
      <SidebarItem imgSrc={shop} title="Marketplace" />
      <SidebarItem imgSrc={event} title="Fluxuri" />
      <SidebarItem imgSrc={chart} title="Administrare reclame" />
      <SidebarItem imgSrc={heart} title="Strangeri de fonduri" />
      <Expand onClick={toggleExpand}>
        <SidebarItem
          imgSrc={expand ? down : up}
          title={expand ? " Vezi mai putin" : "Vezi mai mult"}
        />
      </Expand>
      {renderMoreIcons()}
      <Button
        startIcon={<DarkModeIcon />}
        className="dark__mode"
        onClick={toggleTheme}
        size="30px"
        variant="contained"
      >
        Dark Mode
      </Button>
    </div>
  );
}

const Expand = styled.div`
  cursor: pointer;
  transition: height 3s ease-in-out;
  height: ${({ expand }) => (expand ? "fit-content" : "")};
`;

export default Sidebar;
