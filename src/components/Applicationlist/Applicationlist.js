import React, { useState, useEffect } from "react";
import "./Applicationlist.css";
import { useNavigate } from "react-router-dom";
import { Card, Grid, Typography } from "@mui/material";

function Applicationlist() {
  let [data, setData] = useState({});
  const navigate = useNavigate();
  let token = localStorage.getItem("Token");
  let application_id = localStorage.getItem("application_id");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/application", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // function handleApprove(application_id) {
  //   console.log(application_id);
  //   let token = localStorage.getItem("Token");
  //   console.log(token, typeof token);
  //   fetch("http://127.0.0.1:5000/lms/approveLeave", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       qci_id: qci_id.qci_id,
  //       application_id:application_id
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (data.success) {
  //         alert(data.message);
  //       } else {
  //         alert(data.error);
  //       }
  //     });
  // }

  // function handleDecline(application_id) {
  //   console.log(application_id);
  //   let token = localStorage.getItem("Token");
  //   console.log(token, typeof token);
  //   fetch("http://127.0.0.1:5000/lms/declineLeave", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       qci_id: qci_id.qci_id,
  //       application_id:application_id
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (data.success) {
  //         alert(data.message);
  //       } else {
  //         alert(data.error);
  //       }
  //     });
  // }

  return (
    <div className="container" style={{ marginTop: 140 }}>
      <Grid>
        <Typography
          variant="h4"
          style={{ marginTop: -100 }}
          className="card-title"
        >
          <b>Application list</b>
        </Typography>

        <Grid
          container
          spacing={2}
          xs={12}
          style={{
            marginLeft: -150,
            marginTop: -20,

            color: "black",
            display: "flex",
            margin: "30px",
          }}
        >
          {Object.keys(data).length > 0 ? (
            <>
              {data.data.map((ele) => {
                return (
                  <Grid
                    item
                    xs={6}
                    className="card-title"
                    style={{
                      fontSize: "18px",
                      margin: "30px",
                      backgroundColor:"lightgrey",
                      
                      width: "80rem",
                      flexDirection: "column",
                      display:"flex",
                      textAlign: "initial",
                      color: "black",
                      fontFamily: "Poppins",
                    }}
                  >
                    <Card item  sx={{ flex: '1 0 auto' }} style={{  backgroundColor:"lightgray"}}
       >
                      <h3 style={{ textAlign: "center" }}>
                        {" "}
                        Application-Details
                      </h3>

                      <p style={{ color: "black" }}>Name: {ele.info[0].name}</p>
                      <p style={{ color: "black" }}>Qci id: {ele.qci_id}</p>
                      <p style={{ color: "black" }}>
                        Date from: {ele.date_from}
                      </p>
                      <p style={{ color: "black" }}>
                        Board: {ele.info[0].board}
                      </p>
                      <p style={{ color: "black" }}>
                        Designation :{ele.info[0].designation}
                      </p>
                      <p style={{ color: "black" }}>
                        E-mail: {ele.info[0].email}
                      </p>
                      <p style={{ color: "black" }}>
                        Date of apply:{ele.date_of_apply}
                      </p>
                      <p style={{ color: "black" }}>Date to: {ele.date_to}</p>
                      <p style={{ color: "black" }}>Days: {ele.days}</p>

                      <p style={{ color: "black" }}>
                        Leave reason: {ele.leave_reason}
                      </p>
                      <p style={{ color: "black" }}>
                        Leave Status: {ele.leave_status}
                      </p>
                      <p style={{ color: "black" }}>
                        Leave type: {ele.leave_type}
                      </p>

                      <button class="btn btn-danger" style={{ width: 220 ,fontSize: "15px" }}>
                        {" "}
                        Approve
                      </button>
                      <button class="btn btn-danger" style={{ width: 220 ,fontSize: "15px" }}>
                        {" "}
                        Decline
                      </button>
                    </Card>
                  </Grid>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Applicationlist;
