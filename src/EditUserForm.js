import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import "./App.css";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUserForm()  {
  const id=useParams()._id
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("")
  const[role,setrole]=useState("")


      useEffect(()=>{
        axios.get(`http://localhost:7000/crud/updatedata/${id}`)
          .then((data) =>{
             setUsers(data.data.data)});
      },[])

  useEffect(()=>{
    setname(users.name)
    setemail(users.email)
    setphone(users.phone)
    setrole(users.role)

  },[users])

const submitform=()=>{

  const updatedata={
    name:name,
    email:email,
    phone:phone,
    role:role,
    _id:id
  };  

  fetch(`http://localhost:7000/crud/update`, {
    method: "PUT",body: JSON.stringify(updatedata),
    headers: {"Content-Type": "application/json",},
  }).then((item) =>  {navigate('/')
  console.log(item)})
 
}

  return (
    <div>
      <div>
          <DialogContent>
            <DialogContentText>
              <label> Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={name || " "}
                onChange={(e)=>setname(e.target.value)}
              
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={email || " "}      
                onChange={(e)=>setemail(e.target.value)}       
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phone_no"
                placeholder="Enter Phone Number"
                value={phone || " "}
                onChange={(e)=>setphone(e.target.value)}
              
              />
              <label>Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter Role"
                value={role || " "}
                onChange={(e)=>setrole(e.target.value)}               
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              variant="contained"           
              className="button muted-button"
              onClick={()=>navigate('/')}
            >
              Cancel
            </Button>
            <Button onClick={()=>submitform()}  size="small" variant="contained">
             Save
            </Button>
          </DialogActions>
      </div>
    </div>
  );
};

export default EditUserForm;
