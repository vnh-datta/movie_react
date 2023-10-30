import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Person from "@material-ui/icons/Person";
import axios from "axios";
import { serverURL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "150px",
    width: "100%",
    display: "flex",
    borderBottom: "1px solid #ccc",
    padding: "0 4rem",
    alignItems: "flex-end",
    boxSizing: "border-box",
    alignItems: "center",
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
    justifyContent: "flex-end",
    borderTop: "1px solid #ccc",
    padding: "0 4rem",
    boxSizing: "border-box",
  },
  textField: {
    margin: theme.spacing(1),
    width: "40%",
  },
  heading: {
    margin: theme.spacing(1),
    width: "100%",
    textAlign: "center",
  },
  nameField: {
    margin: theme.spacing(1),
    flex: 1,
  },
  addPhoto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "15%",
  },
  personIcon: {
    fontSize: "3rem",
    marginRight: theme.spacing(1),
  },
  addPhotoInput: {
    width: "100px",
  },
}));

const AddLocation = () => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({});

  const handleDataChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const addLocation = () => {
    axios({
      method: "POST",
      url: `${serverURL}/addLocation`,
      data: formData,
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Add Location</h1>
      <div className={classes.header}>
        <div className={classes.addPhoto}>
          <Person className={classes.personIcon} />
          <TextField
            className={classes.addPhotoInput}
            id="photo"
            label="Photo"
            type="file"
          />
        </div>
        <TextField
          inputProps={{
            id: "name",
          }}
          onChange={handleDataChange}
          className={classes.nameField}
          id="name"
          label="Name of Location"
        />
      </div>
      <div className={classes.container}>
        <TextField
          inputProps={{
            id: "locationType",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="locationType"
          label="Location Type"
        />
        <TextField
          inputProps={{
            id: "category",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="category"
          label="Category"
        />
        <TextField
          inputProps={{
            id: "specification",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="specification"
          label="Specification"
        />
        <TextField
          inputProps={{
            id: "budgetPerDay",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="budgetPerDay"
          label="Budget per Day"
        />
        <TextField
          inputProps={{
            id: "country",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="country"
          label="Country"
        />
        <TextField
          inputProps={{
            id: "address",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="address"
          label="Address"
        />
        <TextField
          inputProps={{
            id: "ownerDetails",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="ownerDetails"
          label="Owner Details"
        />
        <TextField
          inputProps={{
            id: "previousFilms",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="previousFilms"
          label="Previous Films"
        />
        <TextField
          inputProps={{
            id: "permissions",
          }}
          onChange={handleDataChange}
          className={classes.textField}
          id="permissions"
          label="Permissions"
        />
      </div>

      <div className={classes.footer}>
        <div>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={addLocation}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddLocation;
