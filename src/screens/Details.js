import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/Details.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';

import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://at.usermd.net/api/movies/${id}`);
        if (!response.data) {
          throw new Error('Network response was not ok');
        }

        const movieDetailsData = response.data;
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [id]);

  const handleDelete = () => {
    const token = localStorage.getItem('token');

    axios.delete(`https://at.usermd.net/api/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Movie deleted successfully:', response);
      window.location.href = '/';
    })
    .catch(error => {
      console.error('Error deleting movie:', error);
    });
  };

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='top'>
            <div className='poster'><img src={movieDetails.image} alt={movieDetails.title} /></div>
            <div className='introduction'>
                <h1>{movieDetails.title}</h1>
                <div className='rating2'>  
                        <img src={process.env.PUBLIC_URL + '/star.png'} alt='Ocena' />
                        <h3>{movieDetails.rate}</h3>
                </div>
                <h6>Year: {movieDetails.productionYear}</h6>
                <h6>Genre: {movieDetails.genre}</h6>
                <h5>{movieDetails.content} </h5>
                {isLoggedIn && (
                  <button className='delete-button' onClick={handleDelete}>
                    Delete
                  </button>
                )}
            </div>
        </div>
      </main>
      <div className='bottom'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Details;