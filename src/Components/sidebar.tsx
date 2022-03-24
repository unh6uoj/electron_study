import React from 'react';

import './sidebar.css';

import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div id="SideBar">
      <div className="sidebar-header">
        <h3 id="sidebar-title">정종윤입니다.</h3>
        <ul>
          <li>
            <Link to="/home">
              <h4>Home</h4>
            </Link>
            <Link to="/search">
              <h4>search</h4>
            </Link>
          </li>
        </ul>
        </div>
    </div>
  );
}

export default SideBar;