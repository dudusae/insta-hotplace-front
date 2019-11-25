import React, { useState, useRef, useEffect } from 'react';
import './header.css';

function SearchField({ queryURI, onFocus, onClick }) {
  const [query, setQuery] = useState(queryURI);
  const inputQuery = e => setQuery(e.target.value);
  const searchInput = useRef();
  const clearQuery = () => setQuery('');

  const setQueryURI = () => {setQuery(queryURI);};
  useEffect(setQueryURI, [queryURI]);

  return (
    <fieldset>
      <legend className="blind">검색</legend>
      <div className="search_sharp">
        <span>#</span>
      </div>
      <span className="search_outline">
        <input
          type="text"
          ref={searchInput}
          className="key_color search_input"
          placeholder="강남역"
          value={query}
          onChange={inputQuery}
          onFocus={onFocus}
          onBlur={onFocus}
        />
      </span>
      <button
        type="button"
        className={
          'search_clear_btn ' +
          (query !== undefined && query.length > 0 ? '' : 'blind')
        }
        onClick={clearQuery}
      >
        <span className="blind">지우기</span>
        <span className="search_clear_btn_ico"></span>
      </button>
      <div className="search_fixed_text">
        <span>맛집 |</span>
      </div>
      <button type="submit" className="search_btn" onClick={onClick}>
        <span className="blind">검색</span>
        <span className="search_btn_ico"></span>
      </button>
    </fieldset>
  );
}

export default SearchField;
