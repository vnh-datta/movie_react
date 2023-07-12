import React, { useState , useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ResponseContext from './ResponseContext';

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
    }
}));

const ShootDurationComponent = ({ onSubmit }) => {
    const styles = useStyles();
    const [email, setEmail] = useState('');
    const responseContexts = useContext(ResponseContext);
    const { setResponseData, responseContext } = useContext(ResponseContext);
    //const sceneData  = responseContext.sceneData;
    const responseData  = responseContexts;
    const sceneConvertedData = responseContexts.responseData?.sceneConvertedData;
    console.log("reyy it is working down from one to another shoot duration");
    console.log(sceneConvertedData);
    console.log(responseData);

    const handleSubmit = (event) => {
        event.preventDefault();
        const shootData = {
            startDate: startDate?.toISOString(),
            endDate: endDate?.toISOString(),
          };
          console.log("Duration Prateek Changes")
          console.log(shootData);
          //setResponseData({ shootData });
          const charData={
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
                2, 3, 4, 5, 6, 7, 8, 10, 72, 73, 74, 76, 77, 78, 80, 81, 83, 84, 85, 87,
                88, 89, 90, 91, 92, 94,
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
                2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23,
                25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 48, 59, 72,
                73, 74, 76, 77, 78, 81, 83, 85, 87, 88, 89, 90, 91, 92, 93, 94,
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
          }
          setResponseData({ charData });
        onSubmit('characterInput');
    };
    

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Perform any other actions with the form data
//   };
  //};

    return (
        <div>
            <div className={styles.appBarSpacer}>
                <Container maxWidth="xl" className={styles.container}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Shoot Duration Interval
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container
                            spacing={2}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={2}>
                                <Typography variant='caption'>
                                    From
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                            value={startDate}
                                            onChange={handleStartDateChange} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={2}>
                                <Typography variant='caption'>
                                    To
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker 
                                            value={endDate}
                                            onChange={handleEndDateChange}/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default ShootDurationComponent;