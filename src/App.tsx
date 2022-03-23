import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
      <div className="App">
      </div>
=======
import './App.css';

import SideBar from './Components/sidebar';
import { IndexPage } from './page/IndexPage';

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <IndexPage />
    </div>
>>>>>>> e5f70be0c1a5ae6afcfa2d3c209645d17b977e71
  );
}

export default App;
