import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "100px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
    padding: "0 4rem",
    boxSizing: "border-box",
  },
  container: {
    flex: 1,
    width: "100%",
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  footer: {
    height: "75px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #ccc",
    padding: "0 4rem",
    boxSizing: "border-box",
  },
  textField: {
    margin: theme.spacing(1),
    width: "25%",
  },
}));

const AddActor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Add Actor</h1>
      <div className={classes.header}></div>
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          id="actingAge"
          label="Acting Age"
        />
        <TextField className={classes.textField} id="height" label="Height" />
        <FormControl className={classes.textField}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            inputProps={{
              name: "gender",
            }}
            variant="outlined"
            label="Gender"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.textField}
          id="hairColor"
          label="Hair Color"
        />
        <TextField
          className={classes.textField}
          id="eyeColor"
          label="Eye Color"
        />
        <TextField
          className={classes.textField}
          id="languages"
          label="Languages"
        />
        <TextField className={classes.textField} id="email" label="Email" />
        <TextField
          className={classes.textField}
          id="phone"
          label="Phone Number"
        />
        <TextField
          className={classes.textField}
          id="performingArts"
          label="Performing Arts"
        />
        <TextField
          className={classes.textField}
          id="atheletics"
          label="Atheletics"
        />
        <TextField
          className={classes.textField}
          id="danceAndMusic"
          label="Dance and Music"
        />
        <TextField className={classes.textField} id="address" label="Address" />
        <TextField
          className={classes.textField}
          id="filmExperience"
          label="Film Experience"
        />
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default AddActor;
