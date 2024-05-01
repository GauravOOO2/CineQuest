import React, { useState } from 'react'
import CategoryCheckBoxes from '../components/CategoryCheckBoxes'
import { uniqueCountries, uniqueGenres, uniqueLanguages } from '../utils/CheckBoxData'
import MovieCardComponent from '../components/MovieCardComponent'
import { Preview } from '@mui/icons-material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',

}));


const Body = () => {

  const [filterData, setFilterData] = useState([])

  // console.log("display filterdata",filterData);
  const updateFilterData = (data, label) => {
    let temp = [{
      country: '',
    }, {
      language: ''
    }, {
      genre: ''
    }
    ]
    // console.log(data,label);
    temp.forEach((d) => {
      // console.log(d)
      let K = Object.keys(d)[0]
      // console.log(K);
      if (K.includes(label)) {
        d[K] = data;
        // console.log(data)
      }
    })
    setFilterData(temp)
  }

  return (
    <div className='BodyContainer' >
      <div className=' CategoryCheckBoxDiv '  >

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          //  spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ width: '50' }}
        >
          <Item><CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueCountries} label={"Country"} /></Item>
          <Item><CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueLanguages} label={"Language"} /></Item>
          <Item><CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueGenres} label={"Genre"} /></Item>
        </Stack>

        {/* <CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueCountries} label={"Country"} />
        <CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueLanguages} label={"Language"} />
        <CategoryCheckBoxes updateFilterData={updateFilterData} options={uniqueGenres} label={"Genre"} /> */}
      </div>

      <div className='MovieCardsDiv' >
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
      </div>

    </div>
  )
}

export default Body
