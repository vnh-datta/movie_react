import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import LocationCard from "../reusable-components/LocationCard";
import axios from "axios";
import { serverURL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    width: "100%",
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  containerFooter: {
    height: "75px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #ccc",
    padding: "0 4rem",
    boxSizing: "border-box",
  },
  assignedAD: {
    width: "20rem",
  },
}));

const LocationCardList = ({ fetchAPI, fetchType }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [assignedAD, setAssignedAD] = useState("");

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) setLoading(true);
    axios({
      method: fetchType,
      url: `${serverURL}/${fetchAPI}`,
    })
      .then((result) => {
        setLocations([...result.data]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [fetchAPI, fetchType]);

  const cardSelectionToggled = (id) => {
    setLocations(
      locations.map((location) => {
        if (location.id === id) {
          return {
            ...location,
            selected: !location.selected,
          };
        }
        return location;
      })
    );
  };

  const handleAssignAD = (event) => {
    setAssignedAD(event.target.value);
  };

  const handleAssign = async () => {
    try {
      const response = await saveLocations();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveLocations = async () => {
    return axios.post(`${serverURL}/saveLocations`, {
      locations: locations.filter((location) => location.selected),
      assignedAD: assignedAD,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            title={location.title}
            description={location.description}
            requirements={location.requirements}
            subHeader={location.subHeader}
            status={location.status}
            selected={location.selected ?? false}
            shootTime={location.shootTime}
            showStatusButton={location.showStatusButton}
            showSelectButton={location.showSelectButton}
            showMoreButton={location.showMoreButton}
            selectButtonAction={cardSelectionToggled}
          />
        ))}
      </div>
      <div className={classes.containerFooter}>
        <FormControl className={classes.assignedAD}>
          <InputLabel id="assign-to-AD">Assign to AD</InputLabel>
          <Select
            inputProps={{
              name: "assignedAD",
            }}
            labelId="assign-to-AD"
            variant="outlined"
            label="Assign to AD"
            onChange={handleAssignAD}
          >
            <MenuItem value={"ad1"}>AD1</MenuItem>
            <MenuItem value={"ad2"}>AD2</MenuItem>
            <MenuItem value={"ad3"}>AD3</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.footerButton}
          variant="contained"
          color="primary"
          onClick={handleAssign}
        >
          Assign
        </Button>
      </div>
    </div>
  );
};

export default LocationCardList;
