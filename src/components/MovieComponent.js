import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieComponent.css';

function MovieComponent() {
    const trendingMovies = [
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
        { image: './placeholder.png', title: 'title', rating: 10 },
      ]

    return (
        <div id='trending'>
            {trendingMovies.map((movie, index) => (
                <Link key={index} to="/details" className='movie'>
                    <img src={movie.image} alt={movie.title} />
                    <h6>{movie.title}</h6>
                    <div className='rating'>  
                        <img src='star.png' alt='Ocena' />
                        <h6>{movie.rating.toFixed(1)}</h6>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MovieComponent;