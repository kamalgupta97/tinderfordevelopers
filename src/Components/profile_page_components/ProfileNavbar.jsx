import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from "./Switch.material";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
const ProfileNavbar = () => {
    const {dp} = useSelector((store) => store.user_profile )
    const [isNotifyMenuOpen, setNotifyMenuOpen] = useState(null);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(null);
    const handleNotifyMenuClose = () => setNotifyMenuOpen(false)
    const handleNotifyMenuOpen = (e) => setNotifyMenuOpen(e.currentTarget)
    const handleProfileMenuClose = () => setProfileMenuOpen(false)
    const handleProfileMenuOpen = (e) => setProfileMenuOpen(e.currentTarget)
    return (
        <>
            <StyledHeader>
                <nav>
                    <div>
                        <img src="favicon.ico" alt="" />
                    </div>
                    <StyledUserPanel>
                        <div className="navbarIcon">
                            <PersonSearchOutlinedIcon />
                            <div>Find partner</div>
                        </div>
                        <div className="navbarIcon">
                            <Badge badgeContent={1} color="primary">
                                <ChatOutlinedIcon />
                            </Badge>
                            <div>Messaging</div>
                        </div>
                        <div className="navbarIcon" onClick={handleNotifyMenuOpen}>
                            <Badge badgeContent={4} color="primary">
                                {isNotifyMenuOpen ? <NotificationsIcon /> : <NotificationsOutlinedIcon />}
                            </Badge>
                            <div>Notifications</div>
                        </div>
                        <StyledProfileIcon onClick={handleProfileMenuOpen}>
                            <div id="userImg">
                                <img src={dp} alt="" />
                            </div>
                            <KeyboardArrowDownIcon className="downIcon" />
                        </StyledProfileIcon>
                    </StyledUserPanel>
                </nav>
                {/* <StyledSwitch /> */}
            </StyledHeader>
            {/* /// menu for notifications */}
            <Menu
                anchorEl={isNotifyMenuOpen}
                open={Boolean(isNotifyMenuOpen)}
                onClose={handleNotifyMenuClose}
            >
                <MenuItem onClick={handleNotifyMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleNotifyMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleNotifyMenuClose}>Logout</MenuItem>
            </Menu>
            {/* Menu for profile  */}
            <Menu
                anchorEl={isProfileMenuOpen}
                open={Boolean(isProfileMenuOpen)}
                onClose={handleProfileMenuClose}
            >
                <MenuItem onClick={handleProfileMenuClose}><PersonOutlinedIcon/> Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}><DarkModeOutlinedIcon /> Night Mode</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}><ManageAccountsOutlinedIcon/> Account Settings</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}><LogoutIcon/>Logout</MenuItem>
            </Menu>
        </>
    );
};
// const StyledSwitch = styled(Switch)`
//     position: absolute;
//     right:-60px;
// `
// const StyledExploreBtn = styled.button`
//   background-color: rgb(0, 200, 5);
//   color: rgb(255, 255, 255);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   width: 150px;
//   padding: 10px 8px;
//   font-size: 15px;
//   border: none;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   cursor: pointer;
// `;
const StyledHeader = styled.header`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  position: sticky;
  background-color: white;
  z-index: 10;
  & > nav {
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledUserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40%;
  max-width: max-content;
  & > .navbarIcon {
    cursor:pointer;
    font-size:14px;
  }
`;
const StyledProfileIcon = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > #userImg {
    width: 60%;
    height: 100%;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  & > .downIcon {
    font-size: 30px;
  }
`;
export { ProfileNavbar };
