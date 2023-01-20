import React, { useState } from "react";
import {
  Grid,
  Input,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function EmployeeeApplyleave() {
  const [date_of_apply, setDate_of_apply] = React.useState(null);
  const [leave_type, setLeave_type] = useState();
  const leaveInfo = [
    "Select leave type",
    "Casual leave",
    "Sick leave",
    "Paternity leave",
    "Maternity leave",
    "Extra ordinary Leave",
  ];
  const [date_from, setDate_from] = React.useState(null);
  const [date_to, setDate_to] = React.useState(null);
  const [days, setDays] = useState("");
  const [leave_reason, setLeave_reason] = useState("");
  const navigate = useNavigate();

  
  function handleCancel() {
    setDate_of_apply(null);
    setLeave_type("");
    setDate_from(null);
    setDate_to(null);
    setDays("");
    setLeave_reason("");
  }

  function handleleavetype(e) {
    setLeave_type(e.target.value);
  }

  function handlenumberofdays(e) {
    setDays(e.target.value);
  }

  function handlereason(e) {
    setLeave_reason(e.target.value);
  }

  function handleApply() {
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    let qci_id = localStorage.getItem("qci_id");
    fetch("http://127.0.0.1:5000/lms/applyLeave", {
      headers: {
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify({
        qci_id:Number(qci_id),
        date_of_apply:
          date_of_apply.$D + "/" + date_of_apply.$M + "/" + date_of_apply.$y,
        leave_type: leave_type,
        date_from: date_from.$D + "/" + date_from.$M + "/" + date_from.$y,
        date_to: date_to.$D + "/" + date_to.$M + "/" + date_to.$y,
        days: days,
        leave_reason: leave_reason,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          localStorage.setItem("Token", data.token);
          navigate("/EmployeeApplyleavesend");
        } else {
          alert(data.error);
        }
      });
  }


  return (
    <div className="container" style={{ margin: "0px", marginTop: 140 }}>
      <Grid className="field" style={{ width: "700px" }}>
        <Typography variant="h3">Apply Leave </Typography> <br />
        Date of applying leave
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            value={date_of_apply}
            onChange={(newValue) => {
              setDate_of_apply(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "700px" }} />}
          />
        </LocalizationProvider>
        <br />
        <br />
        <br />
        <Box>
          <TextField
            style={{ width: "700px" }}
            value={leave_type}
            onChange={handleleavetype}
            select
            SelectProps={{ native: true }}
          >
            {leaveInfo.map((leave_type) => {
              return (
                <option value={leave_type} key={leave_type}>
                  {leave_type}
                </option>
              );
            })}
          </TextField>
        </Box>
        <br />
        <br />
        From <br />
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            value={date_from}
            style={{ width: "700px" }}
            onChange={(newValue) => {
              setDate_from(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "700px" }}/>}
          />
        </LocalizationProvider>
        <br /> <br />
        To <br />
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            value={date_to}
            style={{ width: "700px" }}
            onChange={(newValue) => {
              setDate_to(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "700px" }}/>}
          />
        </LocalizationProvider>
        <br />
        <br />
        <Input
          id="days"
          className="inputfield"
          style={{ width: "700px" }}
          required
          type="number"
          placeholder="Please enter total days of leave"
          name="days"
          autoComplete="off"
          value={days}
          onChange={handlenumberofdays}
        />
        <br />
        <br />
        <Input
          id="leave_reason"
          className="inputfield"
          style={{ width: "700px" }}
          required
          type="text"
          placeholder="Please enter reason for leave"
          name="leave_reason"
          autoComplete="off"
          value={leave_reason}
          onChange={handlereason}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          className="logbtn"
          onClick={handleApply}
          style={{ width: 700 }}
        >
          Apply
        </Button>{" "}
        <br />
        <br />
        <Button
          variant="outlined"
          className="logbtn"
          onClick={handleCancel}
          style={{ width: 700 }}
        >
          Cancel
        </Button>
      </Grid>
    </div>
  );
}


export default EmployeeeApplyleave;
