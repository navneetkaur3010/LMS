import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";

function EmployeeEdit() {
  const [data2, setData2] = useState("");
  let data = useLocation();
  let token = localStorage.getItem("Token");
  let qci_id = localStorage.getItem("qci_id");
  let navigate = useNavigate();

  function Edit(application_id) {
    localStorage.setItem("application_id", application_id);
    navigate("/EditLeave");
  }

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/lms/editLeave" + qci_id, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData2(data);
  //     });
  // }, []);

 
 return (
      <div>
     

      </div>
    );
  }



export default EmployeeEdit;
