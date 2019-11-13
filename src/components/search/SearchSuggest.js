import React from 'react';
// 자동완성 키워드 목록 (낱개)
function SuggestList(props) {
  return (
    <a href={props.url} onClick={props.onClick}>
      <li className="search_keyword_item">{props.name}</li>
    </a>
  );
}

// 자동완성 키워드 목록 (모음 박스)
function SearchSuggest(props) {
  return (
    <div
      className={'search_keyword_suggest' + props.blind}
      onMouseEnter={props.onMouse}
      onMouseLeave={props.onMouse}
    >
      <ul className="search_keyword_suggest_ul">
        <span className="search_keyword_subtitle">추천지역</span>
        <div className="search_keyword_list key_color_hv">{props.list}</div>
      </ul>
    </div>
  );
}

export { SuggestList, SearchSuggest };
