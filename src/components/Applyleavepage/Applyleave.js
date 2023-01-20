import React, { useState } from "react";
import {
  Grid,
  Input,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function ApplyLeave() {
  const [date_of_apply, setDate_of_apply] = useState("");
  const [date, setDate] = useState("");
  const [qci_id, setQci_id] = useState("");
  const [leave_type, setLeave_type] = useState();
  const leaveInfo=["Select Leave type","Casual leave","Sick leave","Paternity leave","Maternity leave","Extra ordinary Leave"]
  const [date_from, setDate_from] = useState("");
  const [date_to, setDate_to] = useState("");
  const [days, setDays] = useState("");
  const [leave_reason, setLeave_reason] = useState("");
  const navigate = useNavigate();

  function handleApply(qci_id) {
    fetch("http://127.0.0.1:5000/lms/applyLeave", {
      method: "POST",
      body: JSON.stringify({
        date_of_apply:
          date_of_apply.$D + "/" + date_of_apply.$M + "/" + date_of_apply.$y,
        qci_id: Number(qci_id),
        leave_type: leave_type,
        date_from:  date_from.$D + "/" + date_from.$M + "/" + date_from.$y,
        date_to:  date_to.$D + "/" + date_to.$M + "/" + date_to.$y,
        days: days,
        leave_reason: leave_reason,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          navigate("/Applyleavesend",{ state: qci_id });
        } else {
          alert(data.success);
        }
      });
  }

  function handleCancel() {
    setDate_of_apply("");
    setQci_id("");
    setLeave_type("");
    setDate_from("");
    setDate_to("");
    setDays("");
    setLeave_reason("");
  }

  function handledateofapply(e) {
    setDate_of_apply(e.target.value);
  }

  function handleqcid(e) {
    setQci_id(e.target.value);
  }

  function handleleavetype(e) {
    setLeave_type(e.target.value);
  }

  function handledatefrom(e) {
    setDate_from(e.target.value);
  }

  function handldateto(e) {
    setDate_to(e.target.value);
  }

  function handlenumberofdays(e) {
    setDays(e.target.value);
  }

  function handlereason(e) {
    setLeave_reason(e.target.value);
  }

  return (
    <div className="container" style={{ margin: "150px", marginTop:140 , width:700}}>
   


      


      <Grid className="field"  style={{ width: 800,marginTop:-90}}>
      <Typography variant="h3">Apply Leave </Typography> <br/><br/><br/>

      
        

        <Typography>Date of applying leave</Typography>    
        <LocalizationProvider dateAdapter={AdapterDayjs} className="inputfield">
          <DatePicker
            value={date_of_apply}
            onChange={(newValue) => {
              setDate_of_apply(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{width:"800px"}}/>}
          />
        </LocalizationProvider>

      

        <Input
          id="qci_id"
          className="inputfield"
          style={{width:"800px"}}
          required
          type="number"
          name="qci_id"
          autoComplete="off"
          placeholder="Please enter id"
          value={qci_id}
          onChange={handleqcid}
        />
        <br />
        <br />
        <Box>
          <TextField
          value={leave_type}
          onChange={handleleavetype}
          style={{width:"800px"}}
          select
          SelectProps={{native:true}}
          >
            {leaveInfo.map((leave_type)=>{
              return(
              <option value={leave_type} key={leave_type}>{leave_type}</option>
           ) })}
          </TextField>
        </Box>
        <br />
        <br />
        From 
        <LocalizationProvider dateAdapter={AdapterDayjs} className="inputfield">
          <DatePicker
            value={date_from}
            onChange={(newValue) => {
              setDate_from(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{width:"800px"}}/>}
          />
        </LocalizationProvider>
       

        To 
        <LocalizationProvider dateAdapter={AdapterDayjs} className="inputfield">
          <DatePicker
            value={date_to}
            onChange={(newValue) => {
              setDate_to(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{width:"800px"}} />}
          />
        </LocalizationProvider>
        <br />
        <br />
        <Input
          id="days"
          className="inputfield"
          style={{width:"800px"}}
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
          style={{width:"800px"}}
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
        <Button variant="outlined" className="logbtn" onClick={handleApply} style={{width:800}}>
          Apply
        </Button>{" "}
        <br />
        <br />
        <Button variant="outlined" className="logbtn" onClick={handleCancel} style={{width:800}}>
          Cancel
        </Button>
      </Grid>
    </div>
  );
}

export default ApplyLeave;
