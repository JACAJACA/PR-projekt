import React from 'react';
import '../styles/Details.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';

function Home() {
  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='top'>
            <div className='poster'><img src='./placeholder.png' alt='title' /></div>
            <div className='introduction'>
                <h1>Title</h1>
                <div className='rating2'>  
                        <img src='star.png' alt='Ocena' />
                        <h3>10.0</h3>
                </div>
                <h6>Year: </h6>
                <h6>Length: </h6>
                <h6>Genre: </h6>
                <h6>Director: </h6>
                <h6>Writer: </h6>
                <h6>Stars: </h6>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
            </div>
        </div>
        <div className='bottom'>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;