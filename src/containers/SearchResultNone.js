import React, { Component } from 'react';
import { SuggestList, SearchSuggest } from './Search';

class SearchResultNone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestList: [
        {
          url: '?가로수길',
          name: '가로수길',
        },
        {
          url: '강남역',
          name: '강남역',
        },
        {
          url: '건대',
          name: '건대',
        },
        {
          url: '#',
          name: '경리단길',
        },
        {
          url: '#',
          name: '광화문',
        },
      ],
    };
  }
  render() {
//     var suggestList = this.state.suggestList.map((list, i) => {
//       return (
//         <SuggestList
//           url={list.url}
//           name={list.name}
//           key={i}
//           onClick={e => {
//             this.autoComp(e, list.name);
//           }}
//         />
//       );
//     });

    return (
      <div className="main_container fullwidth">
        <main className="main search_result">
          <div className="search_no_msg">
            <span className="sch_no_ico"></span>
            <span className="main_copy">
              지금은 서울만 가능해요
              <br />
              이런 키워드는 어떠세요?
            </span>
            {/* <SearchSuggest
              classMode="_only"
              blind=""
              list={suggestList}
            /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default SearchResultNone;
