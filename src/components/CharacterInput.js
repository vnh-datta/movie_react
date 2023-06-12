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
    const data = [{
        name: "Young Man",
        noOfScenes: "2"
    }, {
        name: "Young Women",
        noOfScenes: "1"
    }, {
        name: "Waitress",
        noOfScenes: "5"
    }, {
        name: "Doctor",
        noOfScenes: "3"
    }, {
        name: "Police",
        noOfScenes: "7"
    }];
    const timeSlots = [{
        name: "Time Slot 1:"
    },
    {
        name: "Time Slot 2:"
    }];
    const handleSubmit = (event) => {
        event.preventDefault();
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
                            {data.map((item, index) => (
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