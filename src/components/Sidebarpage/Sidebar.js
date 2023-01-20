import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import EditIcon from "@mui/icons-material/Edit";
import OutputIcon from "@mui/icons-material/Output";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ children }) {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);
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
      name: "Addemployee",
      icon: <PersonAddAltIcon />,
    },
    {
      path: "/Employeedetails",
      name: "Employeedetails",
      icon: <SettingsAccessibilityIcon />,
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
  ];

  return (
    <div className="container" style={{ margin: "5px", display: "initial" }}>
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Menu
          </h1>

          <div
            style={{ marginLeft: isOpen ? "150px" : "5px" }}
            className="bars"
          >
            <MenuIcon onClick={toggle} />
          </div>
        </div>

        {MenuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
