
import React, {useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Select,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {Box,Typography,Radio,FormControlLabel} from "@mui/material"
import TextField from "@material-ui/core/TextField";

const flexColumn = {
  display: "flex",
  flexDirection: "column",
};
const flexRow={
  display: "flex",
  flexDirection: "row", 
}
const borderBox = {
  boxSizing: "border-box",
};

const useStyles = makeStyles((theme) => ({
  root: {
    ...borderBox,
  },
  containerdes: {
    ...borderBox,
    width: "100%",
    height: "100%",
    padding: ".5rem",
    overflow: "hidden",
    justifyContent: "space-around",
  },
  containerBodydes: {
    ...borderBox,
    display: "flex",
    height: "100%",
    width: "100%",
    padding: ".5rem",
    overflow: "hidden",
    justifyContent: "space-around",
  },
  card: {
    ...borderBox,
    width: "100%",
    margin: ".5rem 0",
  },
  DeignForm: {
    ...flexColumn,
    ...borderBox,
    width: "90%",
    height: "100%",
    padding: "1rem",
    overflow: "auto",
    backgroundColor: "#e0f9ff",
  },
  row:{
    ...flexColumn,
  },
  Dropdown:{
    width: "100%",
    //border-radius: 5px,
    padding: "10px",
    cursor: "pointer",
    fontSize: "large",
  },
  SubDropdown:{
    width: "95%",
    //border-radius: 5px,
    padding: "10px",
    cursor: "pointer",
    marginLeft: "30px",
    fontSize: "large",
  },
  SubDropdown1:{
    width: "90%",
    //border-radius: 5px;
    padding: "10px",
    cursor: "pointer",
    marginLeft: "30px",
    fontSize: "large",
  }
  //DirectorCard:{
  // height:"150px",
   //textAlign:"center",
  //},
}));
function Designations()
{
    const [addnew,setaddnew]=useState("");
    const [dropdown,setdropdown]=useState('');
    const [subdropdown,setsubdropdown]=useState('');
    const [subdropdown1,setsubdropdown1]=useState(false);
    const [subdropdown2,setsubdropdown2]=useState(false);
    const [subsubdropdown1,setsubsubdropdown1]=useState(false);
    const [subsubdropdown2,setsubsubdropdown2]=useState(false);
    const Handleaddnew=()=>
    {
        <TextField id="addnew" label="Addnew" value={addnew} onChange={(e)=>{setaddnew(e.target.value)}}></TextField>
    }
    const handledropdown=(e)=>{
    const val=e.target.value;
    setdropdown(val)
    if (val === "Direction"){
        setsubdropdown2(false);
    setsubdropdown1(true);
    
    }
    else if (val === "Camera and Lighting") {
        setsubdropdown1(false);
    setsubdropdown2(true);
    
    }  
    else {
    setsubdropdown1(false);
    setsubdropdown2(false);
    }  
    }
    const HandleSubdropdown=(e)=>{
        const val1=e.target.value;
        setsubdropdown(val1);
        if (val1 === "Direction Team" && dropdown === "Direction")
        {
            setsubsubdropdown2(false)
            setsubsubdropdown1(true)
        }
        else if(val1 === "Photography" && dropdown === "Camera and Lighting")
        {
            console.log("subsubphotography")
            setsubsubdropdown1(false)
            setsubsubdropdown2(true)
        }
        /*else{
            setsubsubdropdown1(false)
            setsubsubdropdown2(false)
        }*/
    }
    const classes = useStyles();
    return(
        <>
        <div className={classes.containerdes}>
        <div className={classes.containerBodydes}>
        <Card className={classes.DeignForm}>
        <CardContent>
        <div className={classes.row}>
        <div>
        <Paper style={{textAlign:"center"}}><h2>SELECT DESIGNATIONS</h2></Paper>
        </div>
        <div>
        <select className={classes.Dropdown} value={dropdown} onChange={handledropdown}>
            <option>Select an option</option>
            <option>Direction</option>
            <option>Camera and Lighting</option>
        </select>
            {subdropdown1 && dropdown==="Direction" && (
            <select className={classes.SubDropdown} value={subdropdown} onChange={HandleSubdropdown}>
              <option>Select a sub-option</option>
              <option>Direction Team</option>
              <option>Location</option>
              <option>{addnew}</option>
            </select>)}
            {subdropdown2 && dropdown==="Camera and Lighting" && (
            <select className={classes.SubDropdown} value={subdropdown} onChange={HandleSubdropdown}>
              <option>Select a sub-option</option>
              <option>Photography</option>
              <option>Lighting</option>
              <option>{addnew}</option>
            </select>)}
            {
                subsubdropdown1 &&  dropdown==="Direction" && subdropdown==="Direction Team" &&(
                <select className={classes.SubDropdown1}>
                <option>Select a sub-sub-option</option>
                <option>Director</option>
                <option>First AD</option>
                <option>Second AD</option>
                <option>{addnew}</option> 
                </select>
                )
            }
            {
               subsubdropdown2 && dropdown==="Camera and Lighting" && subdropdown==="Photography" &&(
                <select className={classes.SubDropdown1}>
                <option>Select a sub-sub-option</option>
                <option>DOP</option>
                <option>Camera Operator</option>
                <option onClick={Handleaddnew}>Add new</option>
                </select>
                ) 
            }
            </div>
            </div>
        </CardContent>
        </Card>
        </div>
        </div>
        </>
    )
}
export default Designations;