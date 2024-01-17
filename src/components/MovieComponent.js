import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieComponent.css';

const MovieComponent = (props) => {
    const { id, title, rate, image } = props;

    return (
        <Link to={`/details/${encodeURIComponent(title)}/${id}`} style={{ textDecoration: 'none' }}>
            <div className='movie'>
                <img src={image} alt={title} />
                <h6>{title}</h6>
                <div className='rating'>  
                    <img src='star.png' alt='Ocena' />
                    <h4>{rate}</h4>
                </div>
            </div>
        </Link>
    );
};

export default MovieComponent;