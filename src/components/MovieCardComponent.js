import * as React from 'react';
import '../styles/style.css'

export default function MovieCardComponent(props) {
  const {imgSrc, movieTitle, movieCountry,movieLanguage, movieGenre} = props
  return (
    <div className='MovieCardsContainer'>
      <div className='MoviesImageDiv' >
        <img
          className=' imageClass '
          src={imgSrc}
          alt='Movie Poster'
        />
      </div>
      <div className='TextFieldDiv'>
        <h2 className='MovieTitleClass'>{movieTitle}</h2>
        <div className='MovieCategoryDiv'>
          <p className='MovieCategoryPtag'>{movieCountry} | {movieLanguage} | {movieGenre}</p>
        </div>
      </div>
    </div>
  );
}
