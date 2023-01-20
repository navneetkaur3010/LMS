import React, { useState, useEffect } from "react";
import "./employeedetails.css";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";





function Employeedetails() {
  let [data, setData] = useState({});
  let [data1, setData1] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    getEmployeeDetails();
  }, []);


  function getEmployeeDetails() {
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/employeeDetails", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }


  function handleDelete(qci_id) {
    console.log(qci_id);
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/deleteEmployee", {
      method: "POST",
      body: JSON.stringify({
        qci_id: qci_id.qci_id,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert("Are you sure you want to remove this record");
          getEmployeeDetails();
        } else {
          alert(data.message);
        }
      });
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/totalEmployees")
      .then((res) => res.json())
      .then((data) => {
        setData1(data);
        console.log(data)
      });
  }, []);



  function handleEdit(EmpDetails) {
    navigate("/Edit", { state: EmpDetails });
  }


  
  return (
    <div className="container" style={{marginTop:140}} >
  
  
     
      <Grid  sx={{marginTop: -10}} >
    

        <Grid>
        <Typography  variant="h4">Employee Details:  Total number of employees-{data1.count}</Typography>

        
          <TableContainer sx={{ maxWidth: 1300,marginTop: 5, marginLeft:-20}}>
            <Table>
              <TableHead sx={{ border: 2 }}>
                <TableRow>
                  <TableCell>QC-Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Board</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Type of Employee</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Balance Casual Leave</TableCell>
                  <TableCell>Balance Sick Leave</TableCell>
                  <TableCell>Balance privilege Leave</TableCell>
                  <TableCell>Balance extra ordinary Leave</TableCell>
                  <TableCell>Balance maternity/Paternity Leave</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(data).length > 0 ? (
                  <>
                    {data.data.map((ele) => {
                      return (
                        <TableRow>
                          <TableCell>{ele.qci_id}</TableCell>
                          <TableCell>{ele.name}</TableCell>
                          <TableCell>{ele.email}</TableCell>
                          <TableCell>{ele.board}</TableCell>
                          <TableCell>{ele.designation}</TableCell>
                          <TableCell>{ele.type_of_employee}</TableCell>
                          <TableCell>{ele.gender}</TableCell>
                          <TableCell>{ele.bal_cl}</TableCell>
                          <TableCell>{ele.bal_sl}</TableCell>
                          <TableCell>{ele.bal_pl}</TableCell>
                          <TableCell>{ele.bal_eol}</TableCell>
                          <TableCell>{ele.bal_ml}</TableCell>
                          <TableCell>
                            {" "}
                            <button onClick={() => handleEdit(ele)}>
                              Edit <EditIcon />
                            </button>{" "}
                          </TableCell>
                          <TableCell>
                            {" "}
                            <button onClick={() => handleDelete(ele)}>
                              Delete <DeleteIcon />
                            </button>{" "}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Employeedetails;
