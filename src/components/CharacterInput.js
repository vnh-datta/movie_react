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
}));

const CharacterInputComponent = ({ onSubmit }) => {
    const styles = useStyles();
    const [email, setEmail] = useState('');
    const data = [{
        name: "panel1"
    }, {
        name: "panel2"
    }, {
        name: "panel3"
    }, {
        name: "panel4"
    }, {
        name: "panel5"
    }];
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit('scheduleOutput');
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
                            {data.map((item, index) => (
                                <CharacterItem>
                                    <Typography variant="body1" className={styles.heading}>
                                        Character Details
                                    </Typography>
                                    <Stack>
                                        <Item>
                                            <Typography variant="body2">
                                                Character:
                                            </Typography>
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
                                            <Typography variant="body2">
                                                Number of scenes:
                                            </Typography>
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
                                </CharacterItem>
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

export default CharacterInputComponent;