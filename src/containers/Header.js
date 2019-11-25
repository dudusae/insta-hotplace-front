import React from 'react';
import Search from './Search';
import Logo from './../components/header/Logo';

function Header({ blind, queryURI}) {
  return (
    <div className="header_container fullwidth key_color_bg">
      <header className="header">
        <Logo/>
        <Search
          blind={blind}
          queryURI={queryURI}
        />
      </header>
    </div>
  );
}

export default Header;
