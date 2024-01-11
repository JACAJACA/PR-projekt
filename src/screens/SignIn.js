import React, {useState} from 'react';
import '../styles/SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';

import axios from "axios";

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      login: '',
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
      navigate("/");
      window.location.reload();
  };

  const handleLogin = async (event) => {
      event.preventDefault();

      if (!formData.login || !formData.password) {
          return;
      }

      axios
          .post('https://at.usermd.net/api/user/auth', {
              login: formData.login,
              password: formData.password
          })
          .then((response) => {
              localStorage.setItem('token', response.data.token);
              handleChangeRoute();
          })
          .catch((error) => {
              const errorMessages = {};
              errorMessages.password =
                  "Given username doesn't exist or the password is wrong!";
              setErrors(errorMessages || {});
              console.log(error);

              setFormData({
                  login: '',
                  password: '',
              });
          });
    };

  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='container'>
            <h2>Sign in</h2>
            <input type='text' name="login" placeholder='login' value={formData.email} onChange={handleInputChange}></input><br></br>
            <input type='password' name="password" placeholder='password' value={formData.email} onChange={handleInputChange}></input>
            <h5><button type="submit" onClick={handleLogin}>sign in</button></h5>
            <div className='divider'></div>
            <Link to="/signup"><h5><button>sign up</button></h5></Link>
        </div>
      </main>

      <div className='bottom'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default SignIn;