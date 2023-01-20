import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  function handlesubmitadd() {
    navigate("/Addemployee");
  }

  function handleapplyleave() {
    navigate("/Applyleave");
  }

  function handleapplicationlist() {
    navigate("/Applicationlist");
  }

  return (
    <div className="container" style={{marginTop:140}}>


      <Grid className="field" >
        <Grid sx={{ fontSize: 25, padding: 10 }}>
          <Typography variant="h4">Welcome!!!</Typography>{" "}
        </Grid>

        <Button variant="outlined" className="Add" onClick={handlesubmitadd}>
          Add New Employee
        </Button>
        <Button variant="outlined" className="Update">
          Update Employee
        </Button>
        <Button
          variant="outlined"
          className="Applyleave"
          onClick={handleapplyleave}
        >
          Apply Leave
        </Button>
        <Button
          variant="outlined"
          className="Applicatiolist"
          onClick={handleapplicationlist}
        >
          Applicationlist
        </Button>
      </Grid>
    </div>
  );
}

export default Home;
