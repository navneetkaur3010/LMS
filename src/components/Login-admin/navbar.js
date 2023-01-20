import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";


import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import OutputIcon from "@mui/icons-material/Output";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Navbar({children}) {
  
    const MenuItem = [
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
        name: "Add employee",
        icon: <PersonAddAltIcon />,
      },
      {
        path: "/Employeedetails",
        name: "Employee details",
        icon: <SettingsAccessibilityIcon />,
      },
     
      {
        path: "/Applyleave",
        name: "Apply leave",
        icon: <OutputIcon />,
      },
      {
        path: "/Applicationlist",
        name: "Application list",
        icon: <ListAltIcon />,
      },
      {
        path: "/Totalemployees",
        name: "Total employees",
        icon: <PeopleOutlineIcon />,
      },
      {
        path: "/Holiday",
        name: "Holidays",
        icon: <FilterHdrIcon />,
      },
      {
        path: "/Emponleave",
        name: "Employee on leave",
        icon: <CardTravelIcon />,
      }
    ];
  
    const navigate = useNavigate();
    function LogOut(){
      localStorage.removeItem("Token")
      localStorage.removeItem("email")
      localStorage.removeItem("password")
      localStorage.removeItem("qci_id")
      navigate('/')
      
    }
  return (
    <div className="navbar">
      <AppBar sx={{ backgroundColor: "#A0AA2D" }}>
        <Toolbar>
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography></Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
                <GroupsIcon style={{ fontSize: "60px" }} />
              </Typography>
            </Grid>

            <Grid item xs={5}>
                <Typography variant="h4" marginRight={"150px"}>
                    Leave Management System
                </Typography>
          
            </Grid>

            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: 50, background: "#A0AA2D" }}
                  variant="contained"
                  onClick={LogOut}
                >
                  LogOut
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid sx={{ marginLeft:155,width: 300, padding:2,marginTop:-7, background: "#A0AA2D", position:"fixed"}}>
      <Box className="sidebar"  >
        <Box className="top_section">
        <MenuIcon  />
        <Typography variant="h5" style={{marginLeft:"30px" }}className="logo">
            Menu
          </Typography>

          <Box
          
            className="bars"
          >
          
          </Box>
        </Box>

        {MenuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <Box className="icon">{item.icon}</Box>
            <Box
            
              className="link_text"
            >
              {item.name}
            </Box>
          </NavLink>
        ))}
      </Box>

      <main>{children}</main>
    </Grid>
    <Outlet/>



    </div>
  );
}

export default Navbar;
