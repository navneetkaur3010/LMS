import { Outlet } from "react-router-dom";
import Navbaremp from "./Employeelogin/Navbaremp";
import Navbar from "./Login-admin/navbar";
import React from "react";

function SecuredRouting(props) {
  let isAdmin = localStorage.getItem("isAdmin");
  let role = props.role;
  if (isAdmin && role == "Admin") {
    return (
      <Navbar>
        <Outlet />
      </Navbar>
    );
  } else {
    return (
      <Navbaremp>
        <Outlet />
      </Navbaremp>
    );
  }
}
export default SecuredRouting;
