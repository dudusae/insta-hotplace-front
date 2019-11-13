import React from 'react';

// 검색어 입력 필드
function SearchInput(props) {
  return (
    <span className='search_outline'>
      <input
        type="text"
        className='key_color search_input'
        placeholder="강남역"
        value={props.query}
        onChange={props.onChange}
      />
    </span>
  );
}

// 검색버튼
function SearchBtn(props) {
  return (
    <button type="submit" className='search_btn' onClick={props.onClick}>
      <span className="blind">검색</span>
      <span className='search_btn_ico'></span>
    </button>
  );
}

export { SearchInput, SearchBtn};
