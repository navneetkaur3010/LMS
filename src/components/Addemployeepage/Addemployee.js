import React, { useState } from "react";
import {
  Grid,
  Input,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Typography,
  Radio,
  TextField,
  Box
} from "@mui/material";
import {
  validateEmail,
  validatePassword,
  validateId,
  validateName,
  validateBoard,
  validateDesignation,
  validateBal_cl,
  validateBal_sl,
  validateBal_ml,
  validateBal_pl,
  validateBal_eol,
} from "../Utility/Validation";
import { useNavigate } from "react-router-dom";

function Addemployee() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [errorpw, setErrorpw] = useState(null);
  const [qci_id, setQci_id] = useState("");
  const [errorid, setErrorid] = useState(null);
  const [name, setName] = useState("");
  const [errorname, setErrorname] = useState(null);
  const [board, setBoard] = useState("");
  const [errorboard, setErrorboard] = useState(null);
  const [designation, setDesignation] = useState("");
  const [errordesignation, setErrordesignation] = useState(null);
  const [typeofemployee, setTypeofemployee] = useState();
  const typeofempinfo=["Type of employee","Regular","Professional","Contract"]
  const [errortypeofemp, setErrortypeofemp] = useState(null);
  const [gender, setGender] = useState("male");
  const [errorgender, setErrorgender] = useState(null);
  const [bal_cl, setBal_cl] = useState("");
  const [errorbal_cl, setErrorbal_cl] = useState(null);
  const [bal_sl, setBal_sl] = useState("");
  const [errorbal_sl, setErrorbal_sl] = useState(null);
  const [bal_pl, setBal_pl] = useState("");
  const [errorbal_pl, setErrorbal_pl] = useState(null);
  const [bal_eol, setBal_eol] = useState("");
  const [errorbal_eol, setErrorbal_eol] = useState(null);
  const [bal_ml, setBal_ml] = useState("");
  const [errorbal_ml, setErrorbal_ml] = useState(null);
  const navigate = useNavigate();

  function handleChangeemail(e) {
    if (!validateEmail(e.target.value)) {
      setError("Please enter a valid email address");
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  }

  function handleChangeid(e) {
    if (!validateId(e.target.value)) {
      setErrorid("Please enter a valid id");
    } else {
      setErrorid(null);
    }
    setQci_id(e.target.value);
  }

  function handleChangename(e) {
    if (!validateName(e.target.value)) {
      setErrorname("Please enter a valid name");
    } else {
      setErrorname(null);
    }
    setName(e.target.value);
  }

  function handleChangeboard(e) {
    if (!validateBoard(e.target.value)) {
      setErrorboard("Please enter a valid board");
    } else {
      setErrorboard(null);
    }
    setBoard(e.target.value);
  }

  function handleChangedesignation(e) {
    if (!validateDesignation(e.target.value)) {
      setErrordesignation("Please enter a valid designation");
    } else {
      setErrordesignation(null);
    }
    setDesignation(e.target.value);
  }

  function handleChangetypeofemployee(e) {
    setTypeofemployee(e.target.value);
  }

  function handleChangegender(e) {
    
    setGender(e.target.value);
  }

  function handleChangebal_cl(e) {
    if (!validateBal_cl(e.target.value)) {
      setErrorbal_cl("Please enter a valid id");
    } else {
      setErrorbal_cl(null);
    }
    setBal_cl(e.target.value);
  }

  function handleChangebal_pl(e) {
    if (!validateBal_pl(e.target.value)) {
      setErrorbal_pl("Please enter a valid id");
    } else {
      setErrorbal_pl(null);
    }
    setBal_pl(e.target.value);
  }

  function handleChangebal_eol(e) {
    if (!validateBal_eol(e.target.value)) {
      setErrorbal_eol("Please enter a valid id");
    } else {
      setErrorbal_eol(null);
    }
    setBal_eol(e.target.value);
  }

  function handleChangebal_sl(e) {
    if (!validateBal_sl(e.target.value)) {
      setErrorbal_sl("Please enter a valid id");
    } else {
      setErrorbal_sl(null);
    }
    setBal_sl(e.target.value);
  }

  function handleChangebal_ml(e) {
    if (!validateBal_ml(e.target.value)) {
      setErrorbal_ml("Please enter a valid id");
    } else {
      setErrorbal_ml(null);
    }
    setBal_ml(e.target.value);
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
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/addEmployee", {
      headers: {
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify({
        qci_id: Number(qci_id),
        name: name,
        email: email,
        board: board,
        designation: designation,
        type_of_employee: typeofemployee,
        gender: gender,
        bal_cl: bal_cl,
        bal_sl: bal_sl,
        bal_pl: bal_pl,
        bal_eol: bal_eol,
        bal_ml: bal_ml,
        password: password      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("Token", data.token);
          navigate("/Employeedetails");
        } else {
          alert(data.error);
        }
      });
  }

  function handleCancel() {
    setEmail("");
    setName("");
    setBoard("");
    setDesignation("");
    setTypeofemployee("");
    setGender("");
    setBal_cl("");
    setBal_sl("");
    setBal_pl("");
    setBal_eol("");
    setBal_ml("");
    setQci_id("");
    setPassword("");
  }

  return (
    <div className="container" style={{marginTop:140}}>
    
   
      <Grid className="field" sx={{ marginLeft: -30,width:700, marginTop:-10}}>
        <Typography variant="h4">Add Employee details</Typography>
        <br />
        <Input
          id="qci_id"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter id"
          name="qci_id"
          autoComplete="off"
          value={qci_id}
          onChange={handleChangeid}
        />
        <br />
        <br />
        {errorid && <p style={{ color: "red" }}>{errorid}</p>}
        <Input
          id="name"
          className="inputfield"
          required
          type="text"
          placeholder="Please enter name"
          name="Name"
          autoComplete="off"
          value={name}
          onChange={handleChangename}
        />
        <br />
        <br />
        {errorname && <p style={{ color: "red" }}>{errorname}</p>}
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
          id="board"
          className="inputfield"
          required
          type="text"
          placeholder="Please enter board"
          name="board"
          autoComplete="off"
          value={board}
          onChange={handleChangeboard}
        />
        <br />
        <br />
        {errorboard && <p style={{ color: "red" }}>{errorboard}</p>}
        <Input
          id="designation"
          className="inputfield"
          required
          type="text"
          placeholder="Please enter id"
          name="Designation"
          autoComplete="off"
          value={designation}
          onChange={handleChangedesignation}
        />
        <br />
        <br />
        {errordesignation && <p style={{ color: "red" }}>{errordesignation}</p>}


        <Box style={{ width: "500px" }}>
          <TextField
              
              value={typeofemployee}
            style={{ height: "50px", width: "700px" }}
            onChange={handleChangetypeofemployee}
            select
            SelectProps={{native:true}}
          >
            {typeofempinfo.map((typeofemployee)=>{
              return(
                <option value={typeofemployee} key={typeofemployee}>{typeofemployee}</option>
              )
            })}
            
          </TextField>
        </Box>
        {errortypeofemp && <p style={{ color: "red" }}>{errortypeofemp}</p>}{" "}
        <br />

        <Box><FormControl > 
          <FormLabel  
            id="demo-row-radio-buttons-group-label"
            required
          
            
          >
            Choose Gender
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="demo-row-radio-buttons-group"
            row
            value={gender}
            onChange={handleChangegender}
          >
            <FormControlLabel value="female" label="female" control={<Radio />}/>
            <FormControlLabel value="male" control={<Radio />} label="male" />
          </RadioGroup>
          {/* <FormHelperText>Invalid selection</FormHelperText> */}
        </FormControl>
        </Box>
       


        <Input
          id="bal_cl"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter bal_cl"
          name="bal_cl"
          autoComplete="off"
          value={bal_cl}
          onChange={handleChangebal_cl}
        />
        <br />
        <br />
        {errorbal_cl && <p style={{ color: "red" }}>{errorbal_cl}</p>}
        <Input
          id="bal_sl"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter bal_sl"
          name="bal_sl"
          autoComplete="off"
          value={bal_sl}
          onChange={handleChangebal_sl}
        />
        <br />
        <br />
        {errorbal_sl && <p style={{ color: "red" }}>{errorbal_sl}</p>}
        <Input
          id="bal_pl"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter bal_pl"
          name="bal_pl"
          autoComplete="off"
          value={bal_pl}
          onChange={handleChangebal_pl}
        />
        <br />
        <br />
        {errorbal_pl && <p style={{ color: "red" }}>{errorbal_pl}</p>}
        <Input
          id="bal_eol"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter bal_eol"
          name="bal_eol"
          autoComplete="off"
          value={bal_eol}
          onChange={handleChangebal_eol}
        />
        <br />
        <br />
        {errorbal_eol && <p style={{ color: "red" }}>{errorbal_eol}</p>}
        <Input
          id="bal_ml"
          className="inputfield"
          required
          type="number"
          placeholder="Please enter bal_ml"
          name="bal_ml"
          autoComplete="off"
          value={bal_ml}
          onChange={handleChangebal_ml}
        />
        <br />
        <br />
        {errorbal_ml && <p style={{ color: "red" }}>{errorbal_ml}</p>}
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
        <Button variant="outlined" className="logbtn" style={{width:700}} onClick={handleSubmit}>
          Add
        </Button>{" "}
        <br />
        <br />
        <Button variant="outlined" className="logbtn" style={{width:700}} onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
    </div>
  );
}

export default Addemployee;
