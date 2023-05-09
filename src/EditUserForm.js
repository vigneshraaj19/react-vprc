import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import "./App.css";
import {  useParams } from "react-router-dom";
import axios from "axios";

const EditUserForm = () => {
  const id=useParams()._id;
  const [users, setUsers] = useState([]);

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("")
  const[role,setrole]=useState("")
  console.log(id)
    
   const getdata=()=>{
    axios.get(`http://localhost:7000/crud/updatedata/${id}`)
    .then((item)=>{
      console.log(item)
      // console.log(JSON.stringify(item.data.data))
    })
}

useEffect(()=>{
    getdata()
},[])


    const userdata=()=>{
      setname(users.name)
      setemail(users.email)
      setphone(users.phone)
      setrole(users.role)
    }
    userdata();


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
            >
              Cancel
            </Button>
            <Button   size="small" variant="contained">
             Save
            </Button>
          </DialogActions>
      </div>
    </div>
  );
};

export default EditUserForm;
