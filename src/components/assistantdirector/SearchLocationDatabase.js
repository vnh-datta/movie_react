import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { locationImages } from "../../static/images/cards";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { serverURL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  locationsContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflowY: "auto",
  },
  locationCard: {
    width: "30%",
    margin: "1%",
  },
  cardImage: {
    width: "100%",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

const SearchLocationDatabase = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [locations, setLocations] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState({});

  const handleClickOpen = (locationID) => {
    setSelectedLocation(
      locations.find((location) => location.id === locationID)
    );
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedLocation({});
    setOpen(false);
  };

  const handleAgree = () => {
    const storedData = localStorage.getItem("myData");

    axios({
      method: "POST",
      url: `${serverURL}/setSceneLocation`,
      headers: {
        Authorization: "Bearer " + storedData,
      },
      data: {
        sceneLocationID: selectedSceneLocation?.id,
        locationID: selectedLocation?.id,
      },
    })
      .then((result) => {
        console.log(result?.data);
      })
      .catch((err) => console.log(err));

    setOpen(false);
  };

  React.useEffect(() => {
    let isCancelled = false;

    if (isCancelled === false) setLoading(true);
    const storedData = localStorage.getItem("myData");

    axios({
      method: "GET",
      url: `${serverURL}/getSceneLocations`,
      headers: {
        Authorization: "Bearer " + storedData,
      },
    })
      .then((result) => {
        setLocations(result?.data || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const {
    state: { locations: sceneLocations, id },
  } = useLocation();

  const selectedSceneLocation = sceneLocations.find(
    (sceneLocation) => sceneLocation.id === id
  );

  loading && <h1>Loading...</h1>;

  return (
    <div className={classes.root}>
      <h1>Search Location/Database</h1>
      <div className={classes.locationsContainer}>
        {locations.map((location, index) => {
          return (
            <Card className={classes.locationCard}>
              <CardActionArea>
                <img
                  className={classes.cardImage}
                  alt="locationImage"
                  src={locationImages[`loc${index + 1}`]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {location?.name || "Location Name"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {location?.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                  More
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleClickOpen(location.id);
                  }}
                >
                  Select
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Set ${
            selectedLocation?.name || "Location Name"
          } as the location for ${selectedSceneLocation?.title}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`This will set ${
              selectedLocation?.name || "Location Name"
            } as the location for ${selectedSceneLocation?.title}.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SearchLocationDatabase;
