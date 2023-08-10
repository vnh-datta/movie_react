import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ResponseContext from "./ResponseContext";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  //file upload css start
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
  },
  uploadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(15),
  },
  fileLabel: {
    display: "flex",
    alignItems: "center",
  },
  fileName: {
    marginLeft: theme.spacing(1),
  },
  //accordion start
  accordionContainer: {
    display: "block",
    width: "100%",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    display: "block",
    alignItems: "center",
  },
  column: {
    // flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  //accordion end
  //priority dropdown start
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  //priority dropdown end
  //File upload css end
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  textArea: {
    margin: "1rem 0",
    width: "100%",
  },
}));

function createSceneData(sceneNo, shootTown, est) {
  return { sceneNo, shootTown, est };
}

const SceneInputComponent = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [scenesDataList, setScenesDataList] = useState([]);
  const [state, setState] = useState({
    sceneNo: "",
    shootTown: "",
    shootTime: "",
  });
  const classes = useStyles();
  const [showAccordion, setShowAccordion] = useState(false);
  // const responseContext = useContext(ResponseContext);
  const { setResponseData, responseData } = useContext(ResponseContext);
  const [expanded, setExpanded] = useState(true);
  const [formData, setFormData] = useState([]);

  // useEffect(() => {
  //   console.log('reached', responseData)
  //     }, [responseData])
  // const data = [{
  //   name: "panel1"
  // }, {
  //   name: "panel2"
  // }, {
  //   name: "panel3"
  // }, {
  //   name: "panel4"
  // }, {
  //   name: "panel5"
  // }];
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const obj = {
      name: `panel${i}`,
    };
    data.push(obj);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare the data to be sent in the request body
    const sceneData = formData.map((item, index) => ({
      sceneNo: index + 1,
      shootTown: item.shootTown,
      shootTime: item.shootTime,
    }));
    console.log(sceneData);
    //const sceneData = {responseData:requestBody};
    console.log("sceneData");
    const sceneConvertedData = sceneData.reduce((result, item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(value);
      });
      return result;
    }, {});
    console.log(sceneConvertedData);
    //console.log(...responseContext.sceneData)
    // Set the sceneData in responseData with a specific key
    //responseContext.setResponseData({ ...responseContext.sceneData, sceneData });
    //responseContext.setResponseData({ ...responseContext.responseData, sceneData: requestBody });
    //responseContext.setResponseData({ sceneData: requestBody });
    setResponseData({ sceneConvertedData });

    //responseContext.setResponseData(sceneData);

    // Make the POST request to the API endpoint
    fetch("http://127.0.0.1:3000/duration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sceneConvertedData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Perform any additional actions based on the response
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        // Perform any error handling
      });

    //calling Characters directly Start
    const charData = {
      char_dict: {
        BATHROOM: [29, 30, 31, 33, 52, 59, 73, 74, 77, 93, 94],
        BRETT: [8, 72],
        BUDDY: [7, 29, 31, 76],
        BUTCH: [
          8, 11, 41, 42, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60,
          61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        ],
        "BUTCH'S POV": [],
        "CAPT. KOONS": [],
        "ED SULLIVAN": [31],
        "ENGLISH DAVE": [10, 11, 48],
        ESMARELDA: [44, 45, 46, 49, 51],
        FABIENNE: [50, 52, 63, 70, 72],
        "FADE UP": [8, 41, 52, 64, 72, 89],
        "FOURTH MAN": [73, 74],
        GAWKER: [63],
        "HONEY BUNNY": [92, 94],
        JIMMIE: [72, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        JODY: [12, 13, 36, 38, 39],
        JULES: [
          2, 3, 4, 5, 6, 7, 8, 10, 72, 73, 74, 76, 77, 78, 80, 81, 83, 84, 85,
          87, 88, 89, 90, 91, 92, 94,
        ],
        "JULES ANDVINCENT": [89],
        KLONDIKE: [42],
        LANCE: [11, 12, 13, 32, 35, 36, 37, 38, 39, 56, 59, 63, 85],
        "LANCE ANDVINCENT": [38],
        "LIVING ROOM": [15, 17, 19, 21, 22, 23, 25, 27, 33, 38, 39, 41],
        "LOOKYLOO WOMAN": [63],
        MANAGER: [92, 94],
        MARSELLUS: [
          4, 5, 6, 7, 8, 10, 11, 14, 29, 31, 32, 37, 41, 48, 63, 64, 65, 66, 68,
          76, 79, 80, 86, 92,
        ],
        MARVIN: [8, 73, 74, 76, 77, 90],
        MAYNARD: [64, 65, 68],
        MIA: [
          4, 7, 11, 14, 16, 17, 18, 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32,
          33, 35, 37, 38, 39, 40, 41, 48,
        ],
        "MOTEL ROOM": [52, 71, 72],
        MOTHER: [7, 8, 41, 48, 52, 76, 80, 84, 87, 89, 92, 94],
        PATRON: [29, 31, 92, 94],
        PEDESTRIAN: [63],
        PREACHER: [16, 36],
        PUMPKIN: [92, 94],
        RAQUEL: [90, 91],
        ROGER: [8],
        SPORTSCASTER: [42, 43, 44],
        "THE GIMP": [65],
        "THE WOLF": [28, 72, 80, 81, 83, 84, 85, 86, 88, 89, 90, 91],
        "THROUGH THE WINDSHIELD": [63],
        TRUDI: [12, 13],
        VINCENT: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22,
          23, 25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 48,
          59, 72, 73, 74, 76, 77, 78, 81, 83, 85, 87, 88, 89, 90, 91, 92, 93,
          94,
        ],
        WAITRESS: [28, 29, 31, 92, 94],
        WHITE: [2, 8, 10, 11, 13, 14, 29, 31, 32, 42, 44, 52, 77, 85, 86],
        WINSTON: [81, 83, 86, 91],
        "WOMAN'S VOICE": [],
        YOLANDA: [94],
        "YOUNG MAN": [8, 13, 78],
        "YOUNG WOMAN": [12, 44],
        ZED: [8, 59, 63, 64, 65, 68, 69, 72, 78, 94],
      },
      characters: [
        "YOUNG MAN",
        "YOUNG WOMAN",
        "WAITRESS",
        "PUMPKIN",
        "HONEY BUNNY",
        "JULES",
        "VINCENT",
        "BRETT",
        "MARVIN",
        "ROGER",
        "MARSELLUS",
        "BUTCH",
        "ENGLISH DAVE",
        "JODY",
        "TRUDI",
        "LANCE",
        "MIA",
        "WHITE",
        "BUDDY",
        "ED SULLIVAN",
        "LIVING ROOM",
        "BATHROOM",
        "PREACHER",
        "LANCE ANDVINCENT",
        "FADE UP",
        "WOMAN'S VOICE",
        "BUTCH'S POV",
        "MOTHER",
        "CAPT. KOONS",
        "KLONDIKE",
        "SPORTSCASTER",
        "ESMARELDA",
        "FABIENNE",
        "MOTEL ROOM",
        "THROUGH THE WINDSHIELD",
        "PEDESTRIAN",
        "GAWKER",
        "LOOKYLOO WOMAN",
        "MAYNARD",
        "ZED",
        "THE GIMP",
        "FOURTH MAN",
        "JIMMIE",
        "THE WOLF",
        "JULES ANDVINCENT",
        "WINSTON",
        "RAQUEL",
        "PATRON",
        "MANAGER",
        "YOLANDA",
      ],
      length: 50,
      message: "success",
      shoot_time: [["2023-06-01"], ["2023-06-27"]],
      status_code: 200,
    };
    setResponseData({ charData });
    onSubmit("characterInput");
    //calling Characters directly End
    //onSubmit('shootDuration');
  };
  const handleTownChange = (event) => {
    setState({
      ...state,
      shootTown: event.target.value,
    });
    setScenesDataList([...scenesDataList, state]);
  };
  const handleDataChange = (index) => (event) => {
    const { name, value } = event.target;
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setFormData(updatedData);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setShowAccordion(false);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const handleChangeSelect = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    const myTimeout = setTimeout(myGreeting, 5000);

    function myGreeting() {
      setSelectedFile(e.target.files[0]);
    }


    // Make the POST request to the API endpoint
    fetch("http://localhost:6000/upload", {
      method: "POST",
      body: file,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Perform any additional actions based on the response
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        // Perform any error handling
      });
    console.log(e.target.files);
    console.log("selected File");
    console.log(selectedFile);
  };

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        {/* <Content /> */}
        <Grid spacing={1}>
          <form onSubmit={handleSubmit}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                {/* <Chart /> */}
                <div className={classes.uploadContainer}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.heading}
                  >
                    Upload your Script here
                  </Typography>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileInput}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<CloudUploadIcon />}
                      className={classes.button}
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                  {selectedFile && (
                    <>
                      <span className={classes.fileName}>
                        {selectedFile.name}
                      </span>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={handleRemoveFile}
                      >
                        Remove
                      </Button>
                    </>
                  )}
                  {selectedFile && (
                    <>
                      <div className={classes.accordionContainer}>
                        {data.map((item, index) => (
                          <Accordion
                            key={item.name}
                            expanded={expanded === item.name}
                            onChange={handleChange(item.name)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={`${item.name}-content`}
                              id={`${item.name}-header`}
                              overlap="rectangular"
                            >
                              <div className={classes.column}>
                                <Typography className={classes.heading}>
                                  Scene{index + 1}
                                </Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.details}>
                              <Grid container direction="row">
                                <Grid item sm={3}>
                                  <Typography>
                                    Shoot Town
                                    <br />
                                    <TextField
                                      label="Town"
                                      variant="outlined"
                                      inputProps={{
                                        name: "shootTown",
                                        id: item.name + "Town",
                                      }}
                                      fullWidth
                                      className={classes.selectEmpty}
                                      onChange={handleDataChange(index)}
                                    />
                                  </Typography>
                                </Grid>
                                <Grid item sx={1}>
                                  <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    fullWidth
                                  />
                                </Grid>
                                <Grid item sm={2}>
                                  <Typography>
                                    EST Shoot Time:
                                    <br />
                                    <FormControl
                                      variant="outlined"
                                      fullWidth
                                      className={classes.selectEmpty}
                                    >
                                      <InputLabel htmlFor="outlined-age-native-simple">
                                        Shoot Time
                                      </InputLabel>
                                      <Select
                                        native
                                        label={`${item.name}-ShootTime`}
                                        autoWidth
                                        inputProps={{
                                          name: "shootTime",
                                          id:
                                            item.name +
                                            "outlined-age-native-simple",
                                        }}
                                        onChange={handleDataChange(index)}
                                      >
                                        <option aria-label="None" value="" />
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                      </Select>
                                    </FormControl>
                                  </Typography>
                                </Grid>
                                <Grid item sx={1}>
                                  <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    fullWidth
                                  />
                                </Grid>
                                <Grid item sm={3}>
                                  <Typography>
                                    Scene Script:
                                    <br />
                                    <TextareaAutosize
                                      className={classes.textArea}
                                      maxRows={4}
                                      minRows={4}
                                      aria-label="Screen script"
                                      placeholder="Script"
                                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    />
                                  </Typography>
                                </Grid>
                              </Grid>
                              {/* </div> */}
                            </AccordionDetails>
                            {/* <Divider />
                            <AccordionActions>
                              <Button size="small">Cancel</Button>
                              <Button size="small" color="primary">
                                Save
                              </Button>
                            </AccordionActions> */}
                          </Accordion>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Paper>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                //disabled={(scenesDataList.length != data.length)}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default SceneInputComponent;
