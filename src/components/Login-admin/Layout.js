import React from "react";
import {
  AppBar,
  Menu,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
  Tabs,
  Tab,
  Box,
  Button,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import EditIcon from "@mui/icons-material/Edit";
import OutputIcon from "@mui/icons-material/Output";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupsIcon from "@mui/icons-material/Groups";

function Layout() {
  return (
    <div>
        <Menu
        items={[
            {
                path: "/",
                name: "LoginPage",
                icon: <LoginIcon />,
              },
              {
                path: "/Home",
                name: "Home",
                icon: <HomeIcon />,
              },
              {
                path: "/Addemployee",
                name: "Addemployee",
                icon: <PersonAddAltIcon />,
              },
              {
                path: "/Employeedetails",
                name: "Employeedetails",
                icon: <SettingsAccessibilityIcon />,
              },
              {
                path: "/Edit",
                name: "Edit",
                icon: <EditIcon />,
              },
              {
                path: "/Applyleave",
                name: "Applyleave",
                icon: <OutputIcon />,
              },
              {
                path: "/Applicationlist",
                name: "Applicationlist",
                icon: <ListAltIcon />,
              }
        ]}>
    
        </Menu>

        



        </div>
    
  );
}

export default Layout;
