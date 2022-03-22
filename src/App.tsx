import React from 'react';
import './App.css';

import SideBar from './Components/sidebar';
import { IndexPage } from './page/IndexPage';

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <IndexPage />
    </div>
  );
}

export default App;
