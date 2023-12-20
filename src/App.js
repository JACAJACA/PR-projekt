import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './screens/Home.js';
import Details from './screens/Details';
import AddMovie from './screens/AddMovie';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
