import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const CharacterItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
}));

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(4),
    },
    heading: {
        fontWeight: theme.typography.fontWeightBold
    },
    accordianDetails: {
        flex: 'block',
    }
}));

const CharacterInputComponent = ({ onSubmit }) => {
    const styles = useStyles();
    const [email, setEmail] = useState('');
    const [expanded, setExpanded] = React.useState(true);
    // const data = [{
    //     name: "Young Man",
    //     noOfScenes: "2"
    // }, {
    //     name: "Young Women",
    //     noOfScenes: "1"
    // }, {
    //     name: "Waitress",
    //     noOfScenes: "5"
    // }, {
    //     name: "Doctor",
    //     noOfScenes: "3"
    // }, {
    //     name: "Police",
    //     noOfScenes: "7"
    // }];

    //new code start
   const data1 = {
        "char_dict": {
            "BATHROOM": [29, 30, 31, 33, 52, 59, 73, 74, 77, 93, 94],
            "BRETT": [8, 72],
            "BUDDY": [7, 29, 31, 76],
            "BUTCH": [8, 11, 41, 42, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
            "BUTCH'S POV": [],
            "CAPT. KOONS": [],
            "ED SULLIVAN": [31],
            "ENGLISH DAVE": [10, 11, 48],
            "ESMARELDA": [44, 45, 46, 49, 51],
            "FABIENNE": [50, 52, 63, 70, 72],
            "FADE UP": [8, 41, 52, 64, 72, 89],
            "FOURTH MAN": [73, 74],
            "GAWKER": [63],
            "HONEY BUNNY": [92, 94],
            "JIMMIE": [72, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
            "JODY": [12, 13, 36, 38, 39],
            "JULES": [2, 3, 4, 5, 6, 7, 8, 10, 72, 73, 74, 76, 77, 78, 80, 81, 83, 84, 85, 87, 88, 89, 90, 91, 92, 94],
            "JULES ANDVINCENT": [89],
            "KLONDIKE": [42],
            "LANCE": [11, 12, 13, 32, 35, 36, 37, 38, 39, 56, 59, 63, 85],
            "LANCE ANDVINCENT": [38],
            "LIVING ROOM": [15, 17, 19, 21, 22, 23, 25, 27, 33, 38, 39, 41],
            "LOOKYLOO WOMAN": [63],
            "MANAGER": [92, 94],
            "MARSELLUS": [4, 5, 6, 7, 8, 10, 11, 14, 29, 31, 32, 37, 41, 48, 63, 64, 65, 66, 68, 76, 79, 80, 86, 92],
            "MARVIN": [8, 73, 74, 76, 77, 90],
            "MAYNARD": [64, 65, 68],
            "MIA": [4, 7, 11, 14, 16, 17, 18, 19, 20, 21, 22, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38, 39, 40, 41, 48],
            "MOTEL ROOM": [52, 71, 72],
            "MOTHER": [7, 8, 41, 48, 52, 76, 80, 84, 87, 89, 92, 94],
            "PATRON": [29, 31, 92, 94],
            "PEDESTRIAN": [63],
            "PREACHER": [16, 36],
            "PUMPKIN": [92, 94],
            "RAQUEL": [90, 91],
            "ROGER": [8],
            "SPORTSCASTER": [42, 43, 44],
            "THE GIMP": [65],
            "THE WOLF": [28, 72, 80, 81, 83, 84, 85, 86, 88, 89, 90, 91],
            "THROUGH THE WINDSHIELD": [63],
            "TRUDI": [12, 13],
            "VINCENT": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 48, 59, 72, 73, 74, 76, 77, 78, 81, 83, 85, 87, 88, 89, 90, 91, 92, 93, 94],
            "WAITRESS": [28, 29, 31, 92, 94],
            "WHITE": [2, 8, 10, 11, 13, 14, 29, 31, 32, 42, 44, 52, 77, 85, 86],
            "WINSTON": [81, 83, 86, 91],
            "WOMAN'S VOICE": [],
            "YOLANDA": [94],
            "YOUNG MAN": [8, 13, 78],
            "YOUNG WOMAN": [12, 44],
            "ZED": [8, 59, 63, 64, 65, 68, 69, 72, 78, 94]
        },
        "characters": [
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
            "YOLANDA"
        ],
        "length": 50,
        "message": "success",
        "shoot_time": [
            [
                "2023-06-01"
            ],
            [
                "2023-06-27"
            ]
        ],
        "status_code": 200
    };
    
    // Convert data to the desired format
    const result = [];
    for (const character of data1.characters) {
        const scenes = data1.char_dict[character];
        result.push({
            name: character,
            noOfScenes: scenes.length.toString(),
            scenes:scenes
        });
    }
    // console.log("prateekkk")
    // console.log(result);
    const [formData, setFormData] = useState([]);
    const [resultData, setResult] = useState([]);
    const handleDataChange = (index,item) => (event) => {
        const { name, value } = event.target;
       


//   // Check if formData at the given index exists
//   if (updatedData[index]) {
//     updatedData[index] = { ...updatedData[index], [name]: value };
//   } else {
//     updatedData[index] = { [name]: value };
//   }

//   setFormData(updatedData);
const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setFormData(updatedData);
  // Append formData to the corresponding item in result
  const updatedResult = [...result];
  updatedResult[index] = { ...updatedResult[index], formData: updatedData[index] };
  setResult(updatedResult);

  
      };
    //new code end
    const timeSlots = [{
        name: "Time Slot 1:"
    },
    {
        name: "Time Slot 2:"
    }];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(resultData);
        console.log(formData);
        onSubmit('locationInput');
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <div className={styles.appBarSpacer}>
                <Container maxWidth="xl" className={styles.container}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Character Inputs
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <Box sx={{ mt: 2 }}>
                            {result.map((item, index) => (
                                <Accordion key={index} expanded={expanded === item.name} onChange={handleChange(item.name)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`${item.name}-content`}
                                        id={`${item.name}-header`}>
                                        <div>
                                            <Typography>{item.name}</Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <CharacterItem>
                                            <Typography variant="body1" className={styles.heading}>
                                                Character Details
                                            </Typography>
                                            <Stack>
                                                <Item>
                                                    <Grid container
                                                        direction="row">
                                                        <Grid item sm={2}>
                                                            <Typography variant="body2">
                                                                Character:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm={4}>
                                                            <Typography
                                                                variant="body1">
                                                                <b>{item.name}</b>
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Item>
                                                <Item>
                                                    <Grid container
                                                        direction="row">
                                                        <Grid item sm={2}>
                                                            <Typography variant="body2">
                                                                Character Name:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm={0} />
                                                        <Grid item sm={4}>
                                                            <TextField
                                                                inputProps={{
                                                                    name: 'characterName',
                                                                    id: item.name + 'characterName',
                                                                  }}
                                                                label="Name"
                                                                variant="outlined"
                                                                fullWidth 
                                                                onChange={handleDataChange(index,item)}/>
                                                        </Grid>
                                                    </Grid>
                                                </Item>
                                                <Item>
                                                    <Grid container
                                                        direction="row">
                                                        <Grid item sm={2}>
                                                            <Typography variant="body2">
                                                                Number of scenes:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm={4}>
                                                            <Typography
                                                                variant="body1">
                                                                <b>{item.noOfScenes}</b>
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Item>
                                                <Item>
                                                    <Grid container
                                                        direction="row">
                                                        <Grid item sm={2}>
                                                            <Typography variant="body2">
                                                                Scene list:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm={0} />
                                                        <Grid item sm={2}>
                                                            <FormControl variant="outlined">
                                                                <Select
                                                                    native>
                                                                    <option aria-label="None" value="" />
                                                                    {item.scenes.map((value) => (
      <option key={value} value={value}>{value}</option>
    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Item>
                                                <Item>
                                                    <Typography variant="body2">
                                                        Available Dates:
                                                    </Typography>
                                                    <Box sx={{ mt: 1 }}>
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}>
                                                            <div>
                                                                <Typography variant="body2">Time Slots</Typography>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails className={styles.accordianDetails}>
                                                            {timeSlots.map((item, index) => (
                                                                <Box  key={index} sx={{ p: 2 }}>
                                                                    <Grid container
                                                                        direction="row"
                                                                        overflow="unset">
                                                                        <Grid item sm={2}>
                                                                            <Typography variant='caption'>
                                                                                Time Slot {index + 1}:
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item sm={2}>
                                                                            <Typography variant='caption'>
                                                                                From
                                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                    <DemoContainer components={['DatePicker']}>
                                                                                        <DatePicker />
                                                                                    </DemoContainer>
                                                                                </LocalizationProvider>
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item sm={1}/>
                                                                        <Grid item sm={2}>
                                                                            <Typography variant='caption'>
                                                                                To
                                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                    <DemoContainer components={['DatePicker']}>
                                                                                        <DatePicker />
                                                                                    </DemoContainer>
                                                                                </LocalizationProvider>
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            ))}
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    </Box>
                                                </Item>
                                                <Item>
                                                    <Grid container
                                                        direction="row">
                                                        <Grid item sm={2}>
                                                            <Typography variant="body2">
                                                                Criticality:
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item sm={0} />
                                                        <Grid item sm={2}>
                                                            <FormControl variant="outlined">
                                                                <Select
                                                                    native
                                                                    label={`${item.name}-Criticality`}
                                                                    inputProps={{
                                                                        name: 'criticality',
                                                                        id: item.name + 'outlined-age-native-simple',
                                                                      }}
                                                                      onChange={handleDataChange(index,item)}>
                                                                    <option aria-label="None" value="" />
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                    <option value={4}>4</option>
                                                                    <option value={5}>5</option>
                                                                    <option value={6}>6</option>
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Item>
                                            </Stack>
                                        </CharacterItem>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            </Box>
                            <Item>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary">
                                    Submit
                                </Button>
                            </Item>
                        </Stack>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default CharacterInputComponent;