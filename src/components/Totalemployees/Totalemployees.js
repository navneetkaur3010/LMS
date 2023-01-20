import React from "react";
import { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

export default function Totalemployees() {
  let [data, setData] = useState({});
  let token = localStorage.getItem("Token");
  let qci_id=localStorage.getItem("qci_id")


  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/totalEmployees")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="container" style={{marginTop:140}}>
  
      <Typography variant="h3">Total Employees:{data.count}
    
      </Typography>

      
    </div>
  );
}
