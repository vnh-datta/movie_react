import React, { useEffect,useState } from 'react';
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


const LocationItem = styled(Paper)(({ theme }) => ({
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
}));

const LocationInputComponent = ({ onSubmit }) => {
    const styles = useStyles();

    const [result,setresult]=useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const data = [{
        name: "Coffee Shop",
        noOfScenes: "2"
    }, {
        name: "Cafe",
        noOfScenes: "1"
    }, {
        name: "Garden",
        noOfScenes: "5"
    }, {
        name: "Lake",
        noOfScenes: "3"
    }, {
        name: "Mall",
        noOfScenes: "7"
    }];

    const [locationdata, setLocationData] = useState({
        "loc_dict": {
            " '74 CHEVY (MOVING)": [
                2
            ],
            " ALLEY": [
                56
            ],
            " ALLEY (RAINING)": [
                43
            ],
            " APARTMENT": [
                74
            ],
            " APARTMENT (ROOM 49)": [
                8
            ],
            " APARTMENT BUILDING COURTYARD": [
                4
            ],
            " APARTMENT BUILDING HALLWAY": [
                7
            ],
            " APARTMENT BUILDING STREET": [
                62
            ],
            " APARTMENT COURTYARD": [
                60
            ],
            " BATHROOM": [
                73
            ],
            " BATHROOM (MARSELLUS WALLACE'S HOUSE)": [
                33
            ],
            " BOXING AUDITORIUM (RAINING)": [
                45,
                47
            ],
            " BUTCH AND FABIENNE'S HOTEL ROOM": [
                70
            ],
            " BUTCH'S APARTMENT": [
                59
            ],
            " BUTCH'S APARTMENT COURTYARD": [
                58
            ],
            " CAB (MOVING / RAINING)": [
                49
            ],
            " CAR (MOVING)": [
                9
            ],
            " CHEVY (TRUNK)": [
                3
            ],
            " CHEVY NOVA": [
                88
            ],
            " CITY STREET": [
                54,
                71
            ],
            " COFFEE SHOP": [
                92,
                94
            ],
            " COFFEE SHOP BATHROOM": [
                93
            ],
            " ELEVATOR": [
                6
            ],
            " FRONT OF MARSELLUS WALLACE'S HOUSE": [
                41
            ],
            " GARAGE": [
                87
            ],
            " HOLLYWOOD APARTMENT BUILDING": [
                75
            ],
            " HONDA": [
                61,
                63
            ],
            " HONDA (MOVING)": [
                53
            ],
            " HOTEL SUITE": [
                81
            ],
            " JACKRABBIT SLIM'S": [
                28,
                29
            ],
            " JACKRABBIT SLIM'S (DINING AREA)": [
                31
            ],
            " JACKRABBIT SLIM'S (LADIES ROOM)": [
                30
            ],
            " JIMMIE'S BACKYARD": [
                89
            ],
            " JIMMIE'S BATHROOM": [
                77
            ],
            " JIMMIE'S BEDROOM": [
                80,
                86
            ],
            " JIMMIE'S GARAGE": [
                84,
                90
            ],
            " JIMMIE'S HOUSE": [
                83
            ],
            " JIMMIE'S KITCHEN": [
                78
            ],
            " JIMMIE'S STREET": [
                82
            ],
            " KITCHEN": [
                85
            ],
            " LANCE'S BEDROOM": [
                13
            ],
            " LANCE'S HOUSE": [
                36,
                37,
                38
            ],
            " LANCE'S HOUSE (KITCHEN)": [
                12
            ],
            " LOCKER ROOM": [
                42
            ],
            " MARCELLUS' HOUSE / DRESSING ROOM": [
                16,
                18,
                20,
                22,
                24,
                26
            ],
            " MARCELLUS' HOUSE / LIVING ROOM": [
                15,
                17,
                19,
                21,
                23,
                25,
                27
            ],
            " MARSELLUS WALLACE'S DINING ROOM": [
                79
            ],
            " MARSELLUS WALLACE'S HOME": [
                32
            ],
            " MARSELLUS WALLACE'S HOUSE": [
                14
            ],
            " MASON": [
                64,
                69
            ],
            " MONSTER JOE'S TRUCK AND TOW": [
                91
            ],
            " MOTEL (ROOM SIX)": [
                52
            ],
            " MOTEL (STOPPED / RAINING)": [
                51
            ],
            " MOTEL ROOM": [
                72
            ],
            " NOVA (MOVING)": [
                76
            ],
            " PAWNSHOP": [
                66
            ],
            " PAWNSHOP BACK ROOM": [
                65,
                67
            ],
            " PHONE BOOTH (RAINING)": [
                50
            ],
            " RECEPTION AREA (APARTMENT BUILDING)": [
                5
            ],
            " RESIDENTIAL STREET CORNER": [
                55
            ],
            " RUSSELL'S OLD ROOM": [
                68
            ],
            " SALLY LeROY'S": [
                10,
                11
            ],
            " SPARE ROOM": [
                39
            ],
            " STREET": [
                57
            ],
            " TAXI (PARKED / RAINING)": [
                46
            ],
            " TAXI (PARKED/RAINING)": [
                44
            ],
            " VINCENT'S MALIBU (MOVING)": [
                40
            ],
            " WILLIS LOCKER ROOM (AUDITORIUM)": [
                48
            ],
            "VINCENT'S HOT ROD (MOVING)": [
                34,
                35
            ]
        },
        "locations": [
            " COFFEE SHOP",
            " '74 CHEVY (MOVING)",
            " CHEVY (TRUNK)",
            " APARTMENT BUILDING COURTYARD",
            " RECEPTION AREA (APARTMENT BUILDING)",
            " ELEVATOR",
            " APARTMENT BUILDING HALLWAY",
            " APARTMENT (ROOM 49)",
            " CAR (MOVING)",
            " SALLY LeROY'S",
            " LANCE'S HOUSE (KITCHEN)",
            " LANCE'S BEDROOM",
            " MARSELLUS WALLACE'S HOUSE",
            " MARCELLUS' HOUSE / LIVING ROOM",
            " MARCELLUS' HOUSE / DRESSING ROOM",
            " JACKRABBIT SLIM'S",
            " JACKRABBIT SLIM'S (LADIES ROOM)",
            " JACKRABBIT SLIM'S (DINING AREA)",
            " MARSELLUS WALLACE'S HOME",
            " BATHROOM (MARSELLUS WALLACE'S HOUSE)",
            "VINCENT'S HOT ROD (MOVING)",
            " LANCE'S HOUSE",
            " SPARE ROOM",
            " VINCENT'S MALIBU (MOVING)",
            " FRONT OF MARSELLUS WALLACE'S HOUSE",
            " LOCKER ROOM",
            " ALLEY (RAINING)",
            " TAXI (PARKED/RAINING)",
            " BOXING AUDITORIUM (RAINING)",
            " TAXI (PARKED / RAINING)",
            " WILLIS LOCKER ROOM (AUDITORIUM)",
            " CAB (MOVING / RAINING)",
            " PHONE BOOTH (RAINING)",
            " MOTEL (STOPPED / RAINING)",
            " MOTEL (ROOM SIX)",
            " HONDA (MOVING)",
            " CITY STREET",
            " RESIDENTIAL STREET CORNER",
            " ALLEY",
            " STREET",
            " BUTCH'S APARTMENT COURTYARD",
            " BUTCH'S APARTMENT",
            " APARTMENT COURTYARD",
            " HONDA",
            " APARTMENT BUILDING STREET",
            " MASON",
            " PAWNSHOP BACK ROOM",
            " PAWNSHOP",
            " RUSSELL'S OLD ROOM",
            " BUTCH AND FABIENNE'S HOTEL ROOM",
            " MOTEL ROOM",
            " BATHROOM",
            " APARTMENT",
            " HOLLYWOOD APARTMENT BUILDING",
            " NOVA (MOVING)",
            " JIMMIE'S BATHROOM",
            " JIMMIE'S KITCHEN",
            " MARSELLUS WALLACE'S DINING ROOM",
            " JIMMIE'S BEDROOM",
            " HOTEL SUITE",
            " JIMMIE'S STREET",
            " JIMMIE'S HOUSE",
            " JIMMIE'S GARAGE",
            " KITCHEN",
            " GARAGE",
            " CHEVY NOVA",
            " JIMMIE'S BACKYARD",
            " MONSTER JOE'S TRUCK AND TOW",
            " COFFEE SHOP BATHROOM"
        ],
        "message": "success",
        "shoot_time": [
            "2023-06-08",
            "2023-06-27"
        ],
        "status_code": 200
    })

    useEffect(() => {
        // Code to fetch a new quote from the API
        // Update the quote state with the fetched quote
        for (const location of locationdata.locations) {
            const scenes = locationdata.loc_dict[location];
            result.push({
                name: location,
                noOfScenes: scenes.length.toString(),
                scenes:scenes
            });
        }
        setresult(result);
        console.log("Use Effect is called and in location done")
        setIsLoaded(true);
        console.log(result)
      }, []); 
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit('scheduleOutput');
    };


    return (
        <div>
            <div className={styles.appBarSpacer}>
                <Container maxWidth="xl" className={styles.container}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Location Inputs
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            {result.map((item, index) => (
                                <LocationItem>
                                    <Typography variant="body1" className={styles.heading}>
                                        Location Details
                                    </Typography>
                                    <Stack>
                                        <Item>
                                            <Grid container
                                                direction="row">
                                                <Grid item sm={2}>
                                                    <Typography
                                                        variant="body2">
                                                        Location:
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
                                                        Location Name:
                                                    </Typography>
                                                </Grid>
                                                <Grid item sm={4}>
                                                    <TextField
                                                        id="name"
                                                        label="Name"
                                                        variant="outlined"
                                                        fullWidth />
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
                                                <Grid item sm={2}>
                                                    <FormControl variant="outlined">
                                                    <Select
                                                                    native
                                                                    inputProps={{
                                                                        name: 'sceneNo',
                                                                        id: item.name + 'sceneNo',
                                                                      }}
                                                                    >
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
                                            <Grid container
                                                direction="row">
                                                <Grid item sm={2} />
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
                                                <Grid item sm={1} />
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
                                                            native>
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
                                </LocationItem>
                            ))}
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

export default LocationInputComponent;