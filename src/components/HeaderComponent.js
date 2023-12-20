import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderComponent.css';

function HeaderComponent() {
    return (
        <div className='header'>
            <header>
                <Link to="/"><img src={'./ovie.png'} alt='logo' /></Link>
                <div className='spacer'></div>
                <Link to="/add"><h5><button>add movie</button></h5></Link>
                <Link to="/signin"><h5><button>sign in</button></h5></Link>
                <Link to="/signup"><h5><button>sign up</button></h5></Link>
            </header>
        </div>
    )
}

export default HeaderComponent;