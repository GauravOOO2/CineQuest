import React, { useState } from 'react'
import CategoryCheckBoxes from '../components/CategoryCheckBoxes'
import { uniqueCountries, uniqueGenres, uniqueLanguages } from '../utils/CheckBoxData'
import MovieCardComponent from '../components/MovieCardComponent'
import { Preview } from '@mui/icons-material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {MoviesData} from "../utils/CheckBoxData";
import "../styles/style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',

}));


const Body = () => {
  const [filterData, setFilterData] = useState({});
  const { Country, Language, Genre } = filterData;
  const filteredMovies = MoviesData.filter(movie => {
    // Check if the movie matches all filter criteria
    return (
      (!Country || movie.moviecountries.includes(Country)) &&
      (!Language || movie.movielanguages.includes(Language)) &&
      (!Genre || movie.moviegenres.includes(Genre))
    );
  });
  // Function to update filterData state
  const updateFilterData = (newValue, label) => {
    setFilterData(prevState => ({
      ...prevState,
      [label]: newValue
    }));
  }
  console.log("filterData",filterData,filteredMovies);
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
      </div>

      <div className='MovieCardsDiv' >
      {filteredMovies.length === 0 ? (
        <div className='ErrorDiv'><p>Oops! No movies found.</p></div>
      ) : (
        filteredMovies.map((movie, index) => (
          <MovieCardComponent
            key={index}
            imgSrc={movie.moviemainphotos[0]}
            movieTitle={movie.movietitle}
            movieCountry={Country && movie.moviecountries.includes(Country) ? Country : ''}
            movieLanguage={Language && movie.movielanguages.includes(Language) ? Language : ''}
            movieGenre={Genre && movie.moviegenres.includes(Genre) ? Genre : ''}
          />
        ))
      )}
        
      </div>

    </div>
  )
}

export default Body
