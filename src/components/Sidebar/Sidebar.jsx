import { useDispatch } from "react-redux";
import { themeActions } from "../../store/theme";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import { Button } from "@mui/material";
import "../../styles/Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();

  const ToggleTheme = () => {
    dispatch(themeActions.toggleTheme());
    console.log("hello");
  };
  //pass in diff attribute props
  return (
    <div className="my__sidebar">
      <SidebarItem src="" title="Tazlo Zoli" />
      <SidebarItem
        Icon={LocalHospitalIcon}
        title="COVID-19 Information center"
      />
      <SidebarItem Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarItem Icon={PeopleIcon} title="Friends" />
      <SidebarItem Icon={ChatIcon} title="Messenger" />
      <SidebarItem Icon={StorefrontIcon} title="Marketplace" />
      <SidebarItem Icon={VideoLibraryIcon} title="Videos" />{" "}
      <SidebarItem Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
      <Button
        startIcon={<DarkModeIcon />}
        className="dark__mode"
        onClick={ToggleTheme}
        size="30px"
        variant="contained"
      >
        Dark Mode
      </Button>
    </div>
  );
}

export default Sidebar;
