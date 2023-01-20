import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Typography,Button } from "@mui/material";
import {useNavigate} from "react-router-dom"


function Applyleavesend() {
const[data2,setData2]=useState("")
let token=localStorage.getItem("Token");
let qci_id=localStorage.getItem("qci_id")
let navigate=useNavigate()

function Edit(application_id){
  localStorage.setItem("application_id",application_id)
  navigate("/EditLeave")
}

  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/applyLeave/" + qci_id, { 
      headers:{
        Authorization:token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      });
  },[]);
  // if(data2==""){
  //   <Typography>Loading...</Typography>
  // }else{

  return (
    <div>

      <div style={{marginTop:140}}>Application-Details</div>
      <Typography>{data2.data.map((ele) => {
                      return (<>
                      <>{ele.date_of_apply}</>
                      <>{ele.date_of_apply}</>
                      <>{ele.date_of_apply}</>
                      <>{ele.date_of_apply}</>
                      <>{ele.date_of_apply}</>
                      <>{ele.date_of_apply}</>
                      <><Button onClick={Edit}>Edit</Button></>
                      </>
                     
                      )
                              })}</Typography>
     

      

    
    </div>
  );}
 // }


export default Applyleavesend;
