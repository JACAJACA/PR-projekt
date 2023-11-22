import React from 'react';
import '../App';
import '../App.css';

function HeaderComponent() {
    return (
        <div className='header'>
            <header>
                <h5><button>menu</button></h5>
                <img src={'./ovie.png'} alt='logo' /> 
                <h5><button>sign in</button></h5>
            </header>
        </div>
    )
}

export default HeaderComponent;