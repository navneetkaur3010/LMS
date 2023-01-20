import React, { useState } from "react";
import {
  Grid,
  Input,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate, useLocation } from "react-router-dom";

function EditLeave() {
  
  let data = useLocation();
  const [date_of_apply, setDate_of_apply] = useState(data.state.date_of_apply);
  const [leave_type, setLeave_type] = useState(data.state.leave_type);
  const [date_from, setDate_from] = useState(data.state.date_from);
  const [date_to, setDate_to] = useState(data.state.date_to);
  const [days, setDays] = useState(data.state.days);
  const [leave_reason, setLeave_reason] = useState(data.state.leave_reason);
  const navigate = useNavigate();
  console.log(data)
  let application_id = localStorage.getItem("application_id");
  let qci_id = localStorage.getItem("qci_id");

  function ApplyEdit() {
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/applyLeave", {
      headers: {
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify({
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
          alert("Record updated successfully");
          navigate("/EmployeeApplyleavesend");
        } else {
          alert(data.error);
        }
      });
  }

  // function ApplyEdit(){
  //   fetch("http://127.0.0.1:5000/lms/applyLeave")
  //   navigate("/EmployeeApplyleavesend")
  // }

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

  return (
    <div className="container" style={{ margin: "150px", marginTop: 140 }}>
      <Grid className="field" style={{ width: "700px" , margin:100,marginTop:-50}}>
        <Typography variant="h4">Edit Applied Leave</Typography> <br />
        Date of applying leave
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          
            value={date_of_apply}
            onChange={(newValue) => {
              setDate_of_apply(newValue);
            }}
            renderInput={(params) => <TextField  style={{ width: "700px" }} {...params} />}
          />
        </LocalizationProvider>
        <br />
        <br />
        <br />
        <FormControl style={{ width: "700px" }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <select
            labelid="demo-simple-select-label"
            id="demo-simple-select"
            style={{ height: "50px", width: "700px" }}
            label="leave_type"
          >
            <option value={leave_type} onChange={handleleavetype}>
              Leave Type
            </option>
            <option value={leave_type}>Casual Leave</option>
            <option value={leave_type}>Sick Leave</option>
            <option value={leave_type}>Paternity Leave</option>
            <option value={leave_type}>Maternity Leave</option>
            <option value={leave_type}>Extra Ordinary leave</option>
          </select>
        </FormControl>
        <br />
        <br />
        From <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={date_from}
            onChange={(newValue) => {
              setDate_from(newValue);
            }}
            renderInput={(params) => <TextField style={{ width: "700px" }} {...params} />}
          />
        </LocalizationProvider>
        <br /> <br />
        To <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={date_to}
            onChange={(newValue) => {
              setDate_to(newValue);
            }}
            renderInput={(params) => <TextField style={{ width: "700px" }} {...params} />}
          />
        </LocalizationProvider>
        <br />
        <br />
        <Input
          id="days"
          className="inputfield"
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
          onClick={ApplyEdit}
          style={{ width: 700 }}
        >
          Update
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

export default EditLeave;
