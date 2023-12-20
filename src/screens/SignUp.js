import React from 'react';
import '../styles/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';

function Home() {
  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='container'>
            <h2>Sign up</h2>
            <input type='text' placeholder='name'></input><br></br>
            <input type='text' placeholder='login'></input><br></br>
            <input type='text' placeholder='email'></input><br></br>
            <input type='password' placeholder='password'></input><br></br>
            <input type='password' placeholder='re-enter password'></input>
            <Link to="/signup"><h5><button>sign up</button></h5></Link>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;