import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { GridOptionsWrapper } from "ag-grid-community";

export default function Empdet() {
  let [data, setData] = useState([]);
  const navigate = useNavigate();
  const [rowData, setRowData] = useState();
  const [columnDefs, setcolumnDefs] = useState([
    { headerName: "QC-Id	", field: "qci_id" },
    { headerName: "Name", field: "name",width:100},
    { headerName: "Email", field: "email" },
    { headerName: "Board", field: "board" },
    { headerName: "Designation", field: "designation" },
    { headerName: "Type Of Employee", field: "type_of_employee" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Balance Casual Leave", field: "bal_cl" },
    { headerName: "Balance Sick Leave", field: "bal_sl" },
    { headerName: "Balance Privilege Leave", field: "bal_ptl" },
    { headerName: "Balance Extra Ordinary Leave", field: "bal_eol" },
    { headerName: "Balance Paternity Leave",field: "bal_pl"},
    { headerName: "Edit", 
    cellRenderer: function(params) {
      return <EditIcon/> 
 }
   },
    { headerName: "Delete", 
    cellRenderer: function(params) {
      return <DeleteIcon/> 
 } },
  ]);

  const defaultColDef = {
    columnDefs: columnDefs,
    Sortable: true,
    Filter: true,
    editable: true,
    floatingFilter: true,
    flex: 1
  };


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
        console.log(data)
        setData(data);
      });
  }

  function handleDelete(qci_id) {
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

  function handleEdit(EmpDetails) {
    navigate("/Edit", { state: EmpDetails });
  }



  return (
    <div
      id="myGrid"
      className="ag-theme-alpine"
      style={{ height: "700px", width: "1500px" }}
    >
      <Typography variant="h2"> Employee Details</Typography>

      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={data.data}
        // onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
}
