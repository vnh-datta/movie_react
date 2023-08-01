import React, { useEffect,useState,useContext } from 'react';
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
import ResponseContext from './ResponseContext';


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
    const [formData, setFormData] = useState([]);
    const [fromDate, setFromDate] = useState(null);

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

    

    const responseContexts = useContext(ResponseContext);
    const { setResponseData, responseContext } = useContext(ResponseContext);
    useEffect(() => {
        // Code to fetch a new quote from the API
        // Update the quote state with the fetched quote
        const responseData  = responseContexts;
    const locationData = responseContexts.responseData?.locationData;
    console.log("reyy it is working down from one to another in location");
    console.log(locationData);
    console.log(responseData);
        for (const location of locationData.locations) {
            const scenes = locationData.loc_dict[location];
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
      }, [responseContexts]); 



    const handleDataChange = (index, item, event, date) => {
        let name, value;
        if(!!date) {
            name = date;
            value = event?.toLocaleString()
        } else {
            name = event.target.name;
            value = event.target.value;
        }
        let updatedData = formData;
        if(formData.some((show) => show.id === index)) {
            updatedData = updatedData.map((record) => record.id === index ? ({...record, [name]: value}): record);
        } else {
            updatedData.push({id: index, [name]: value})
        }
        setFormData(updatedData);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                                                        inputProps={{
                                                            name: "locationName",
                                                            id: item.name + "locationName",
                                                          }}
                                                        label="Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        onChange={ e => handleDataChange(index, item, e)} />
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
                                                                      onChange={ e => handleDataChange(index, item, e)}
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
                                                                <DatePicker 
                                                                inputProps={{
                                                                    name: 'fromDate',
                                                                    id: item.name + 'fromDate',
                                                                  }}
                                                                  onChange={(e) => handleDataChange(index, item, e, "fromDate")} />
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
                                                                <DatePicker
                                                                    inputProps={{
                                                                        name: 'toDate',
                                                                        id: item.name + 'toDate',
                                                                    }}
                                                                    onChange={(e) => handleDataChange(index, item, e, "toDate")} />
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
                                                            native
                                      label={`${item.name}-Criticality`}
                                      inputProps={{
                                        name: "criticality",
                                        id:
                                          item.name +
                                          "outlined-age-native-simple",
                                      }}
                                      onChange={e => handleDataChange(index, item, e)}>
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