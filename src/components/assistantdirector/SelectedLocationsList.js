import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import LocationCard from "../reusable-components/LocationCard";
import axios from "axios";
import { serverURL } from "../../constants";
import { Link } from "react-router-dom";

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

const SelectedLocationsList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) setLoading(true);
    axios({
      method: "GET",
      url: `${serverURL}/ad/search/getLocations`,
    })
      .then((result) => {
        setLocations([...result.data]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

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

    if (selectedLocation?.id === id) {
      setSelectedLocation({});
    } else {
      setSelectedLocation(locations.find((location) => location.id === id));
    }
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  loading && <div>Loading...</div>;

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
            showSelectButton={
              isEmpty(selectedLocation)
                ? true
                : selectedLocation.id === location.id
            }
            selectButtonAction={cardSelectionToggled}
          />
        ))}
      </div>
      <div className={classes.containerFooter}>
        <Link
          to={
            !selectedLocation?.id
              ? ""
              : "/assistantdirector/searchLocationDatabase"
          }
          state={{ locations, id: selectedLocation.id }}
        >
          <Button
            className={classes.footerButton}
            variant="contained"
            color="primary"
            disabled={!selectedLocation?.id}
          >
            Search Database
          </Button>
        </Link>
        <Link to={"/assistantdirector/addLocation"}>
          <Button
            className={classes.footerButton}
            variant="contained"
            color="primary"
          >
            Add Location
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SelectedLocationsList;
