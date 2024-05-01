import * as React from 'react';
import '../styles/style.css'

export default function MovieCardComponent() {
  return (
    <div className='MovieCardsContainer'>
      <div className='MoviesImageDiv' >
        <img
          className=' imageClass '
          src='https://m.media-amazon.com/images/M/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_QL75_UY281_CR18,0,190,281_.jpg'
          alt='Movie Poster'
        />
      </div>
      <div className='TextFieldDiv'>
        <h2 className='MovieTitleClass'>Adipurush</h2>
        <div className='MovieCategoryDiv'>
          <p className='MovieCategoryPtag'>India | Hindi | Action</p>
        </div>
      </div>
    </div>
  );
}
