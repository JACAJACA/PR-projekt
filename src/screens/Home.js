import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';
import SearchBar from '../components/SearchBar.js';
import MovieComponent from '../components/MovieComponent.js';

import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div id='body'>
      <Header></Header>

      <main>
        <SearchBar></SearchBar>

        <div id='allMovies'>
          {movies.map((movie, index) => (
            <MovieComponent key={index} {...movie} />
          ))}
        </div>

      </main>

      <div className='bottom'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;