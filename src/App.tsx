import React from 'react';
import './App.css';

import SideBar from './Components/sidebar';
import SearchPage from './page/search_page';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <SearchPage />
    </div>
  );
}

export default App;
