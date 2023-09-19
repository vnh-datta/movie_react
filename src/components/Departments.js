import React,{useState} from "react";
import {Box,Typography,TextField,Button,Radio,FormControlLabel,Select,MenuItem} from "@mui/material";
import "../App.css";
function Department(){
    const dir={
        name:"Abcd efg"
    }
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="black"
            p={3}
            textAlign="center"
            borderRadius={5}
            width="200px"
            height="auto"
            >
            <Typography variant="h5">Panoma Vol2</Typography>
            <Typography variant="body1">Director:{dir.name}</Typography>
            </Box>
        </div>
        </>
    )
}
export default Department;
export function Dep1(){
    const dep_data=[
        "loren Ipsum","gsdgsdgsdgb","tutukmbncx","qebngjkgm"
    ];
    return(
        <>
        <div className="g2">
            <Box 
            bgcolor="lightblue"
            color="black"
            p={3}
            textAlign="center"
            borderRadius={5}
            height="auto"
            >
            <div className="dep1">
                <div className="b1">
                <Typography variant="body1">Assistant Directors</Typography>
                <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            <div className="b1">
            <Typography variant="body1">Music Directors</Typography>
            <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            <div className="b1">
            <Typography variant="body1">Costume Department</Typography>
            <ul >
                    {dep_data.map((people,index)=>(
                    <>
                    <li key={index}>{people}</li>
                    </>
                    ))}
                </ul>
            </div>
            </div>
            </Box>
        </div>
        </>
    )
}
export function Dep2AndDep3(){
    const [dep4_data,setdep4_data]=useState([{s_no:1.,dep:"loren Ipsum",},
    {s_no:2.,dep:"loren Ipsum",},
    {s_no:3.,dep:"loren Ipsum",}
]);
const [depart, setdepart] = useState("");
const HandleDep1Change=()=>{
const data={
    s_no:dep4_data.length + 1,
    dep:depart
}
setdep4_data([...dep4_data,data])
setdepart("")
}
    return(
        <>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            width="500px"
            height="auto"
            >
            <div className="dep2">
            <Typography variant="h5">Departments</Typography>
                <table >
                <thead>
                    <tr>
                        <th className="table-cell">S.NO</th>
                        <th className="table-cell">Department</th>
                    </tr>
                </thead>
                    <tbody>
                        {dep4_data.map((val,index)=>(
                            <>
                            <tr key={index}>
                            <td className="table-cell">{val.s_no}</td>
                            <td className="table-cell">{val.dep}</td>
                            <td className="table-cell">{<Button className="b" variant="outlined">Edit</Button>}</td>
                            <td className="table-cell">{<Button className="but" variant="outlined">Details</Button>}</td>
                            </tr>
                            </>
                        ))}
                </tbody>
                </table>
                </div>
            </Box>
        </div>
        <div className="g1">
            <Box 
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            >
            <div className="dep3">
            <Typography color="black">Add New Department</Typography>
            <TextField label="Name Department" value={depart} onChange={(e)=>{setdepart(e.target.value)}}></TextField>
            <form className="form">
            <FormControlLabel label="Main" value="Main" control={<Radio/>}/>
            <FormControlLabel label="sub" value="sub" control={<Radio/>}/>
            </form>
            <TextField label="Total members"></TextField>
            <Button variant="contained" color="primary" onClick={HandleDep1Change}>Add</Button>
            </div>
            </Box>
        </div>
        </>
    )
}
export function Dep4AndDep5() {
    const [dep4Data, setDep4Data] = useState([
      { s_no: 1, dep: "loren Ipsum", sub_dep: "loren ipsum" },
      { s_no: 2, dep: "loren Ipsum", sub_dep: "loren ipsum" },
      { s_no: 3, dep: "loren Ipsum", sub_dep: "loren ipsum" },
    ]);
  
    const [dep, setdep] = useState("");
    const [subdep,setsubdep]=useState("");
    const HandleDepchange = () => {
      const newData = {
        s_no: dep4Data.length + 1,
        dep: dep,
        sub_dep: subdep,
      };
      setDep4Data([...dep4Data, newData]);
      setdep("");
    };
  
    return (
      <>
        <div className="g1">
          <Box
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
          >
            <div className="dep4">
              <Typography variant="h5">Sub-Departments</Typography>
              <table>
                <thead>
                  <tr>
                    <th className="table-cell">S.NO</th>
                    <th className="table-cell">Department</th>
                    <th className="table-cell">Sub-Department</th>
                  </tr>
                </thead>
                <tbody>
                  {dep4Data.map((val, index) => (
                    <>
                      <tr key={index}>
                        <td className="table-cell">{val.s_no}</td>
                        <td className="table-cell">{val.dep}</td>
                        <td className="table-cell">{val.sub_dep}</td>
                        <td className="table-cell">
                          <Button className="but" variant="outlined">Edit</Button>
                        </td>
                        <td className="table-cell">
                          <Button className="but" variant="outlined">Details</Button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>
        </div>
  
        <div className="g1">
          <Box
            bgcolor="lightblue"
            color="primary.contrastText"
            p={3}
            textAlign="center"
            borderRadius={5}
            width="190px"
          >
            <div className="dep3">
              <Typography color="black">Add Sub-Department</Typography>
              <Select label="Select Department" value={subdep} onChange={(e)=>{setsubdep(e.target.value)}}>
                <MenuItem disabled value="">
                  <em>Select Department</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
              <TextField
                label="Name Department"
                value={dep}
                onChange={(e) => setdep(e.target.value)}
              ></TextField>
              <TextField label="Total members"></TextField>
              <Button
                variant="contained"
                color="primary"
                onClick={HandleDepchange}
              >
                Add
              </Button>
            </div>
          </Box>
        </div>
      </>
    );
  }