import React from 'react';
import './App.css';

import { MemoryRouter, HashRouter, Route, Routes, Router } from 'react-router-dom';
import SideBar from './Components/sidebar';
import SearchPage from './page/search_page';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
