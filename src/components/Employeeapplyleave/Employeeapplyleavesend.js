import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";


function EmployeeApplyleavesend() {
  const [data, setData] = useState({});
  let navigate = useNavigate();


  function handleEdit(LeaveData,application_id) {
    localStorage.setItem("application_id", application_id);
    navigate("/EditLeave", {state:LeaveData});
  }

  useEffect(() => {
    let token = localStorage.getItem("Token");
    let qci_id = localStorage.getItem("qci_id");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/applyLeave/" + qci_id, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
       
      });
  }, []);



 return (
      <div>
        <Grid sx={{ marginLeft:0, marginTop:18 ,color:"black"}}>
     
     <Typography variant="h4">Application list</Typography>
  


       <Grid style={{color:"black"}} >{ Object.keys(data).length>0 ?<>{data.data.map(ele => {
                       return  (<Grid container spacing={0} style={{ fontSize: "18px", width: "30rem", textAlign:"initial",color:"black",background:"#A0AA2D",display: "run-in", margin: "10px", fontFamily: "Poppins" }}  >
                       <Grid item xs={15} className="card-title" spacing={5} ><h3  style={{textAlign:"center"}}> Application-Details</h3>

                           <Typography variant="p" style={{color:"black"}}> Date of Apply: {ele.date_of_apply} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Date from: {ele.date_from} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Date to: {ele.date_to} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Days: {ele.days} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Leave reason: {ele.leave_reason} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Leave Status: {ele.leave_status} </Typography><br/>
                           <Typography variant="p" style={{color:"black"}}> Leave type: {ele.leave_type} </Typography><br/>
                       
                     

                           
                           <Button  style={{fontSize:15}} class="btn btn-danger" onClick={() => handleEdit(ele)}> Edit</Button>
                           </Grid>
                           
                       


                   </Grid>)

               })


               }</>:<></>}

           </Grid>

     
       </Grid>

       
        
      </div>
    );
  }



export default EmployeeApplyleavesend;
