import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
      </div>
      <div className='header__center'>
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1280px-Star_wars2.svg.png'
          alt=''
        />
      </div>
      <div className='header__right'>
        <input placeholder='Search' type='text' />
        <SearchIcon />
      </div>
    </div>
  );
}
export default Header;
