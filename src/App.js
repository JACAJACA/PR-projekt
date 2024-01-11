import React from 'react';
import { BrowserRouter as Router, Route,  Navigate, Switch, Routes } from 'react-router-dom';
import Home from './screens/Home.js';
import Details from './screens/Details';
import AddMovie from './screens/AddMovie';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import {MoviesProvider} from "./components/MoviesContext";

const App = () => {
  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:title/:id" element={<Details />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
