import React, { useState } from 'react';

function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <h1>SearchPage</h1>
      <div>
        <input id='search-url-input' placeholder='url을 입력하세요' />
        <button id='search-url-button'>검색</button>
      </div>
      <div id='result-content'>
        <span>{searchResult}</span>
      </div>
    </div>
  );
}

export default SearchPage;