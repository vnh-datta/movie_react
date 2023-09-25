
import {Typography,Box,Paper,TextField,Card,CardContent} from "@mui/material";
import "./../../App.css";
import { useState } from "react";
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
    return(
        <>
        <div className="container">
        <Card>
            <CardContent>

        <Box
        bgcolor="lavender"
        color="black"
        p={3}
        textAlign="center"
        borderRadius={5}
        >
        <Paper elevation={3} color="blue"><Typography variant="h5">SELECT DESIGNATIONS</Typography></Paper>
        <select className="Dropdown" value={dropdown} onChange={handledropdown}>
            <option>Select an option</option>
            <option>Direction</option>
            <option>Camera and Lighting</option>
        </select>
            {subdropdown1 && dropdown==="Direction" && (
            <select className="SubDropdown" value={subdropdown} onChange={HandleSubdropdown}>
              <option>Select a sub-option</option>
              <option>Direction Team</option>
              <option>Location</option>
              <option>{addnew}</option>
            </select>)}
            {subdropdown2 && dropdown==="Camera and Lighting" && (
            <select className="SubDropdown" value={subdropdown} onChange={HandleSubdropdown}>
              <option>Select a sub-option</option>
              <option>Photography</option>
              <option>Lighting</option>
              <option>{addnew}</option>
            </select>)}
            {
                subsubdropdown1 &&  dropdown==="Direction" && subdropdown==="Direction Team" &&(
                <select className="SubDropdown1">
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
                <select className="SubDropdown1">
                <option>Select a sub-sub-option</option>
                <option>DOP</option>
                <option>Camera Operator</option>
                <option onClick={Handleaddnew}>Add new</option>
                </select>
                ) 
            }
        </Box>
        </CardContent>
        </Card>
        </div>
        </>
    )
}
export default Designations;