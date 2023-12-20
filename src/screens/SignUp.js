import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';
import SearchBar from '../components/SearchBar.js';
import MovieComponent from '../components/MovieComponent.js';

function Home() {
  return (
    <div id='body'>
      <Header></Header>

      <main>
        <SearchBar></SearchBar>
        <h5>Trending</h5>
        <MovieComponent></MovieComponent>

        <h5>Latest</h5>
        <MovieComponent></MovieComponent>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;