import React, { useState } from "react";
import { Grid, Typography, Button, Input } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./Employeelogin.css";
import { validateId, validatePassword } from "../Utility/Validation";
import { useNavigate } from "react-router-dom";

function EmployeeLoginPage() {
  const [qci_id, setQci_id] = useState("");
  const [errorid, setErrorid] = useState(null);
  const [password, setPassword] = useState("");
  const [errorpw, setErrorpw] = useState(null);
  const navigate = useNavigate();

  function handleChangeid(e) {
    if (!validateId(e.target.value)) {
      setErrorid("Please enter a valid id");
    } else {
      setErrorid(null);
    }
    setQci_id(e.target.value);
  }

  function handleChangepassword(e) {
    if (!validatePassword(e.target.value)) {
      setErrorpw("Please enter a valid password");
    } else {
      setErrorpw(null);
    }
    setPassword(e.target.value);
  }

  function handleSubmit() {
    fetch("http://127.0.0.1:5000/lms/loginEmp", {
      method: "POST",
      body: JSON.stringify({
        qci_id: Number(qci_id),
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("Token",data.token)
          localStorage.setItem("qci_id",qci_id)
          localStorage.setItem("isAdmin",false)
          navigate("/EmployeeeApplyleave");
        } else {
          alert(data.message);
          navigate("/Unauthorized")
        }
      });
      setQci_id("");
    setPassword("");
  }

  return (
    <div className="container">
      <Typography variant="h1" className="title shadow">
        Leave Management System
      </Typography>

      <Grid className="field">
        <h1>
          <PersonIcon style={{ fontSize: "120px" }} />
        </h1>
        <br />

        <Typography>Login As Employee</Typography>

        <Input
          id="qci_id"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter qci_id"
          name="qci_id"
          autoComplete="off"
          value={qci_id}
          onChange={handleChangeid}
        />
        <br />
        <br />
        {errorid && <p style={{ color: "red" }}>{errorid}</p>}

        <Input
          className="inputfield"
          required
          type="password"
          placeholder="Please type password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleChangepassword}
        />
        <br />
        <br />
        {errorpw && <p style={{ color: "red" }}>{errorpw}</p>}

        <Button variant="outlined" className="logbtn" onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </div>
  );
}

export default EmployeeLoginPage;
