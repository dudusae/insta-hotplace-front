import React, { Component } from 'react';
import SearchField from './../components/SearchField';
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
          <SearchField 
          query={this.props.query}
          onChange={this.props.onChange}
          inputClear={this.props.inputClear}
          />
        </form>
      </div>
    );
  }
}
export default withRouter(Search);
