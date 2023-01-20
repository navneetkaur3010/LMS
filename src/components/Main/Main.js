import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  function handleadmin() {
    navigate("/");
  }

  function handleemp() {
    navigate("/EmployeeLoginPage");
  }


  return (
    <div className="container" style={{marginTop:140}}>
\

      <Grid className="field" >
        <Grid sx={{ fontSize: 25, padding: 10 }}>
          <Typography variant="h4">Leave Management System</Typography>{" "}
        </Grid>

        <Button variant="outlined" className="Add" onClick={handleemp}>
         Employeelogin
        </Button>
        <Button variant="outlined" className="Update" onClick={handleadmin}>
          Admin Login
        </Button>

      </Grid>
    </div>
  );
}

export default Main;
