import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';
import SearchBar from '../components/SearchBar.js';
import SearchBarResults from '../components/SearchBarResult.js';
import MovieComponent from '../components/MovieComponent.js';

import axios from 'axios';

const Home = () => {
  const location = useLocation(); 
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios.get('https://at.usermd.net/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleSearch = (results) => {
    setFilteredMovies(results);
  };

  useEffect(() => {
    setFilteredMovies([]);
  }, [location.pathname]);

  return (
    <div id='body'>
      <Header></Header>

      <main>
        <SearchBar onSearch={handleSearch}></SearchBar>
        {filteredMovies.length > 0 && (
          <SearchBarResults
            filteredMovies={filteredMovies}
            />
        )}

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