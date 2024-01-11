import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderComponent.css';
import {useNavigate} from "react-router-dom";


const HeaderComponent = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const handleChangeRoute = () => {
        navigate('/add');
        window.location.reload();
    };

    const handleSignInRoute = () => {
        navigate('/signin');
        window.location.reload();
    };

    const handleSignUpRoute = () => {
        navigate('/signup');
        window.location.reload();
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
        window.location.reload();
    };

    return (
        <div className='header'>
            <header>
                <Link to="/"><img src={process.env.PUBLIC_URL + '/ovie.png'} alt='logo' /></Link>
                <div className='spacer'></div>
                {isLoggedIn && (
                    <h5><button onClick={handleChangeRoute}>add movie</button></h5>
                )}
                {isLoggedIn ? (
                    <h5><button onClick={handleLogout}>log out</button></h5>
                ) : (
                    <h5><button onClick={handleSignInRoute}>sign in</button></h5>
                )}
                {!isLoggedIn && (
                    <h5><button onClick={handleSignUpRoute}>sign up</button></h5>
                )}
            </header>
        </div>
    )
}

export default HeaderComponent;