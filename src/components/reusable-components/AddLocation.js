import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const AddLocation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Add Location</h1>
    </div>
  );
};

export default AddLocation;
