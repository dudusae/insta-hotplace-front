import React, { Component } from 'react';
import { SearchInput, SearchBtn, SearchClearBtn } from './../components/SearchField';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  // 검색창이 숨김처리 되었을 때 코드를 로드하지 않음
  shouldComponentUpdate(newProps) {
    if (newProps.blind !== 'blind') {
      return true;
    }
    return false;
  }

  // 검색실행시 검색창에 입력된 값을 url주소로 표시한다
  returnSearch = e => {
    e.preventDefault();
    var keyword = e.target.lastChild.childNodes[2].lastChild.value;
    this.props.history.push(`/search/${keyword}`);
  };

  render() {
    return (
      <div className="search">
        <form
          className={this.props.blind}
          onSubmit={this.returnSearch}
          method="get"
          autoComplete="off"
        >
          <fieldset>
            <legend className="blind">검색</legend>
            <div className="search_sharp">
              <span>#</span>
            </div>
            <SearchInput
              query={this.props.query}
              onChange={this.props.onChange}
            />
            <SearchClearBtn onClick={this.props.inputClear}/>
            <div className="search_fixed_text">
              <span>맛집 |</span>
            </div>
            <SearchBtn onClick={this.props.querySubmit} />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default withRouter(Search);
