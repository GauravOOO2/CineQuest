import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/style.css'




export default function CategoryCheckBoxes(props) {
  const { options, label , updateFilterData} = props
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [filterData, setFilterData] = React.useState([])

  // console.log("display filterdata",filterData);
  
// React.useEffect(()=>{
//   updateFilterData(value, label)
// },[value])
  return (
    <div className='CategoryCheckBoxesContainer' >
       {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />  */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          updateFilterData(newValue, label)
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
            xs: 200,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
        }}
        renderInput={(params) =>
          <TextField
            {...params}
            label={label}
            placeholder={label}
            sx={{
              '& .MuiInputBase-root': {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Change border color on click
                },
                color: 'white', // Text color
              },
              
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'white', // Border color on hover
                },
                '& fieldset': {
                  borderColor: 'white', // Border color
                },
                borderRadius: '10px', // Adjust border radius as needed
                fontSize: '18px', // Adjust font size
              },
              '& .MuiInputLabel-root': {
                color: 'white', // Label color
              },
              '& .MuiFormLabel-root.Mui-focused': {
                color: 'white', // Focused label color
              },
              '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
                '& .MuiAutocomplete-input': {
                  color: 'white', // Autocomplete text color
                },
              },
              '& .MuiSvgIcon-root': {
                color: 'white', // Dropdown icon color
              },
              '& .MuiAutocomplete-paper': {
                backgroundColor: 'transparent !important', // Set menu background color to transparent
              },
            }}
          />
          
        }
      />
    </div>
  );
}