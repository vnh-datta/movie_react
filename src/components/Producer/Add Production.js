
import './../../App.css';
import React from 'react';
import { Typography,Button,TextField,Box,Paper, Select, MenuItem} from '@mui/material';
import  { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const cardStyles = {
  maxWidth:"50%",
  margin: '0 auto',
  marginTop:"5%", 
};
function AddProduction(){
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        if (file.type.match(/^image\//)) {
          const reader = new FileReader();
  
          reader.onload = (e) => {
            setImage(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please select a valid image file.');
        }
      } else {
        alert('Please select an image to upload.');
      }
    };
     const [inputValue1, setInputValue1] = useState('');
     const [inputValue2, setInputValue2] = useState('');
     const [showRadioButtons, setShowRadioButtons] = useState(false);

     const radioOptions = {
        Option1: 'Option 1',
        Option2: 'Option 2',
        Option3: 'Option 3',
        Option4: 'Option 4',
        Option5: 'Option 5',
        Option6: 'Option 6',
        Option7: 'Option 7',
        Option8: 'Option 8',
        Option9: 'Option 9',
        Option10: 'Option 10',
        Option11: 'Option 11',
        Option12: 'Option 12',
      };
     const handleInputChange1 = (e) => {
       setInputValue1(e.target.value);
     };
     const handleInput2Focus = () => {
       setShowRadioButtons(true);
     };
     const handleRadioChange = (e) => {
       setInputValue2(e.target.value);
     };
    return(

      <>
      <Card style={cardStyles}>
        <CardContent>
        <Paper style={{width:"100%", backgroundColor:"lightblue"}}><Typography variant='body1' align='center'>ADD PRODUCTIONS</Typography></Paper>
      <div className='prodcontainer'>
                  <div className='Imageupload'>
                    <div className='Tile'>
                    <div className='tile'>
                        <input type="file" accept="image/*" onChange={handleImageChange}/>
                        {image && (
                        <div>
                        <img
                            src={image}
                            alt="Uploaded"
                            style={{ maxWidth: '100%', height: '100%' }}
                        />
                        </div>)}
                    </div>
                    </div>
                    </div>
                    <div className='prod'>
                      <Box
                      bgcolor="lightBlue"
                      padding={3}
                      color="black"
                      textAlign="center"
                      borderRadius={5}
                      width="fit-content"
                      >
                        <Typography variant='body1' align='center'>Production Name</Typography>
                            <TextField value={inputValue1} onChange={handleInputChange1} label="Production Name"></TextField>
                        <div className='production-type'>
                            <Typography variant='body1' align='center'>Type Of Production</Typography>
                            <Select
                                label="Type of Production"
                                onFocus={handleInput2Focus}
                                value={inputValue2}
                                onChange={handleRadioChange}
                            ><MenuItem value="">
                            <em>Select an Option</em>
                          </MenuItem>
                               {showRadioButtons && (
                                        Object.keys(radioOptions).map((option) => (
                                            <MenuItem key={option} value={option}>
                                            {radioOptions[option]}
                                            </MenuItem>
                                        ))
                                    )}</Select>
                                    <Button variant='contained' color='primary'>SUBMIT</Button>
                        </div>
                    </Box>
                    </div>
                    </div>
                    </CardContent>
                    </Card>
        </>
    )
}


export default AddProduction;