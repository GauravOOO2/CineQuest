import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

// const options = ['Option 1', 'Option 2'];


const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    // backgroundColor: 'transparent', // Adjust background color as needed
    borderRadius: '8px', // Adjust border radius as needed
    // borderStyle: 'solid', // Set border type to solid
    // borderColor: '#000', // Adjust default border color
    // boxShadow: '0px 0px 2px 2px #000',
    fontSize: '18px', // Adjust font size
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black', // Change border color on click
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black', // Set default label color to black
    '&.Mui-focused': {
      color: 'black', // Set label color to black when input is focused
    },
  },
});



export default function CategoryCheckBoxes(props) {
  const { options, label, updateFilterData } = props
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');



  return (
    <div className='CategoryCheckBoxesContainer' >
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          updateFilterData(newInputValue, label)
        }}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
        }}
        renderInput={(params) =>
          <StyledTextField
            {...params}
            label={label}

          />
        }
      />
    </div>
  );
}