import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './../store';
import { GetSuggestList } from './../services/GetData';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchSearchState = (_searchList, _searchCount) => {
      this.setState({
        searchList: _searchList,
        searchCount : _searchCount,
      })
    };
    this.state = {
      fetching: false,
      suggestList: [],
      searchList: [
        {
          detail: { area_name: null,
                    description : null, 
                    url_naver_map: null },
          name: null ,
          num_of_posts: null ,
          posts: [
                    { hashtags:[],
                    img_urls:[],
                    key: null }
          ]
        },
      ],
      searchCount: null,
      fetchSearchState: this.fetchSearchState,
    };
  }

  fetchSuggestList = async () => {
    this.setState({ fetching: true });
    const sgtListRequest = await GetSuggestList();
    const suggestList = sgtListRequest.data.area_list;
    this.setState({
      suggestList,
      fetching: false,
    });
  };

  render() {
    console.log('App');
    return (
      <div className="fullheight">
        <Router>
          <Store.Provider value={this.state}>
            <Route exact path="/" component={Intro} />
            <Route path="/search/" component={Main} />
          </Store.Provider>
        </Router>

        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchSuggestList();
  }
}

export default App;
