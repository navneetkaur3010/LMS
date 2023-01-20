import React, { useState } from "react";
import { Grid, Typography, Button, Input } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./Login.css";
import { validateEmail, validatePassword } from "../Utility/Validation";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [errorpw, setErrorpw] = useState(null);
  const navigate = useNavigate();

  function handleChangeemail(e) {
    if (!validateEmail(e.target.value)) {
      setError("Please enter a valid email address");
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  }

  function handleChangepassword(e) {
    if (!validatePassword(e.target.value)) {
      setErrorpw("Please enter a valid password");
    } else {
      setErrorpw(null);
    }

    setPassword(e.target.value);
  }

  function handleemp() {
    navigate("/EmployeeLoginPage");
  }

  function handleSubmit() {
    fetch("http://127.0.0.1:5000/lms/loginAdmin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("Token", data.token);
          localStorage.setItem("isAdmin", true);
          navigate("/Home");
        } else {
          alert(data.message);
          navigate("/Unauthorized");
        }
      });
    setEmail("");
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

        <Typography>Login as Admin</Typography>

        <Input
          id="email"
          className="inputfield"
          required
          type="email"
          placeholder="Please enter email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChangeemail}
        />
        <br />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}

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

        <Button
          variant="outlined"
          className="logbtn"
          onClick={handleSubmit}
          style={{ margin: 5 }}
        >
          Login Admin
        </Button>

        <Button
          variant="outlined"
          className="Add"
          onClick={handleemp}
          style={{ marginTop: 15 }}
        >
          Login as Employee
        </Button>
      </Grid>
    </div>
  );
}

export default LoginPage;
