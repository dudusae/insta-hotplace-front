import React from 'react';
import Header from './../containers/Header';
import Search from './../containers/Search';

function Intro () {
    return (
      <div className="intro">
        <Header blind="blind" />
        <div className="main_container fullwidth key_font">
          <main className="main">
            <h1 className="main_copy">
              지금 인스타그램에서{' '}
              <span className="mb_view">
                <br />
              </span>
              <span className="key_color">핫한</span> 맛집은?
            </h1>
            <Search/>
            <div className="home_ico"></div>
          </main>
        </div>
      </div>
    );
  }

export default Intro;
