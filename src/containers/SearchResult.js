import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BoxItem, Loading } from './../components/BoxItems';
import { GetSearch } from './../services/GetData';
import Header from './Header';
import Store from './../store';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fetching: false,
      hasError: false,
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
    };
  }

  // Get Search Result Data
  fetchSearch = async keyword => {
    if (this._ismounted === true) {
      this.setState({ fetching: true });
      try {
        const searchRequest = await GetSearch(keyword);
        const searchList = searchRequest.data.venues;
        this.setState({
          fetching: false,
        });
        // Set Data on Store
        this.context.fetchSearchState(searchList, searchList.length);
      } catch (e) {
        this.setState({
          fetching: false,
          hasError: true,
        });
      } finally {
        this.setState({ hasError: false });
      }
    }
  };

  // Infinite scroll
  viewNextPage = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({ loadPage: this.state.loadPage + 1 });
    }
  };

  // go to Detail page
  viewDetail = (e, name) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.props.match.params.query}/${name}`);
  };

  render() {
    
    const { fetching, hasError, itemsPerPage, loadPage, indexStart } = this.state;
    const { searchList, searchCount } = this.context;


    if (hasError) {
      return <Redirect to={`/search/${this.props.match.params.query}/sorry`} />;
    } else {
      const indexEnd = itemsPerPage * loadPage;
      const searchListSlice = searchList.slice(indexStart, indexEnd);

      const boxItems = searchListSlice.map((searchList, i) => {
        //View Thumbnail Image with one of 1st insta-post's
        const img_urls = searchList.posts[0].img_urls.map(
          img_urls => 'url(' + img_urls + ')',
        );
        return (
          <BoxItem
            img_urls={img_urls}
            rank={searchList.rank}
            num_of_posts={searchList.num_of_posts}
            name={searchList.name}
            desc={searchList.detail.description}
            key={i}
            onClick={e => {
              this.viewDetail(e, searchList.name);
            }}
          />
        );
      });

      return (
        <div>
          <Header queryURI={this.props.match.params.query} />
          <div className="main_container fullwidth">
            <main className="main search_result">
              <p className="search_count">검색결과 : {searchCount} 건</p>
              <ul className="box_container">{boxItems}</ul>
              <Loading blind={fetching ? '' : 'blind'} />
            </main>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    // Prevent Reload when browser to go back to previous page
    const queryStore = this.context.searchList[0].detail.area_name;
    const queryURI = this.props.match.params.query;
    if (queryStore !== queryURI) {
      this._ismounted = true;
      this.fetchSearch(queryURI);
    }
    window.addEventListener('scroll', this.viewNextPage);
  }

  componentDidUpdate(prevProps, prevState) {


    // Update only when Query in URI is replaced
    const queryURI = this.props.match.params.query;
    const prevqueryURI = prevProps.match.params.query

    console.log('queryURI: '+queryURI);
    console.log('prevqueryURI: '+prevqueryURI);

    if (prevqueryURI !== queryURI) {
      this._ismounted = true;      
      this.fetchSearch(queryURI);
    }
  }

  componentWillUnmount() {
    this._ismounted = false;
  }
}

SearchResult.contextType = Store;
export default withRouter(SearchResult);
