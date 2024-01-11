import React, { useState } from 'react';
import '../styles/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';

import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
  });

  const handleInputChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value,
      });
  };

  const [errors, setErrors] = useState({});
  const handleChangeRoute = () => {
      navigate('/signin');
      window.location.reload();
  };

  const handleRegistration = async (event) => {
      event.preventDefault();

      if (!formData.name || !formData.email || !formData.password) {
          return;
      }

      axios
          .post('https://at.usermd.net/api/user/create', {
              name: formData.name,  // Fix here
              email: formData.email,
              password: formData.password
          })
          .then((response) => {
              handleChangeRoute();
          })
          .catch((error) => {
              console.log(error);

              setFormData({
                  name: '',
                  email: '',
                  password: '',
              });
          });
    };
  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='container'>
            <h2>Sign up</h2>
            <input type='text' name="name" placeholder='name' value={formData.name} onChange={handleInputChange}></input><br></br>
            <input type='text' name="email" placeholder='email' value={formData.email} onChange={handleInputChange}></input><br></br>
            <input type='password' name="password" placeholder='password' value={formData.password} onChange={handleInputChange}></input><br></br>
            <h5><button onClick={handleRegistration}>sign up</button></h5>
        </div>
      </main>

      <div className='bottom'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default SignUp;