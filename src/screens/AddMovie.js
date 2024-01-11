import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddMovie.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/HeaderComponent.js';
import Footer from '../components/FooterComponent.js';
import SearchBar from '../components/SearchBar.js';
import MovieComponent from '../components/MovieComponent.js';
import axios from 'axios';

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    publicationYear: '',
    rate: '',
    genre: '',
    image: '',
    content: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeRoute = () => {
    navigate('/');
    window.location.reload();
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.image || !formData.content) {
      return;
    }

    axios
      .post('https://at.usermd.net/api/movies', {
        title: formData.title,
        image: formData.image,
        content: formData.content,
      })
      .then(() => {
        handleChangeRoute();
      })
      .catch((error) => {
        console.log(error);

        setFormData({
          title: '',
          publicationYear: '',
          rate: '',
          genre: '',
          image: '',
          content: '',
        });
      });
  };

  return (
    <div id='body'>
      <Header></Header>

      <main>
        <div className='container'>
            <h2>Add movie</h2>
            <input type='text' name="title" placeholder='title' value={formData.title} onChange={handleInputChange}></input><br></br>
            <input type='text' name="pulicationYear" placeholder='publication year' value={formData.publicationYear} onChange={handleInputChange}></input><br></br>
            <input type='text' name="rate" placeholder='rate' value={formData.rate} onChange={handleInputChange}></input><br></br>
            <input type='text' name="genre" placeholder='genre' value={formData.genre} onChange={handleInputChange}></input><br></br>
            <input type='text' name="image" placeholder='image' value={formData.image} onChange={handleInputChange}></input><br></br>
            <textarea name="content" rows="5" placeholder='description' value={formData.content} onChange={handleInputChange} />
            <h5><button type="submit" onClick={handleAdd}>Submit</button></h5>
        </div>
      </main>

      <div className='bottom'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AddMovie;