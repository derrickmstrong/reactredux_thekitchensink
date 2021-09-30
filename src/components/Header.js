import './Header.css';
import React, { Fragment } from 'react';
import GoogleAuth from './GoogleAuth';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isSignedIn } = useSelector(state => state.auth);
  const renderNav = () => {
    return (
      <div className='ui secondary pointing menu pt-1'>
        <NavLink exact to='/' activeClassName='active' className='item'>
          Home
        </NavLink>
        {isSignedIn && (
          <Fragment>
            <NavLink exact to='/test' activeClassName='active' className='item'>
              Test
            </NavLink>
            <NavLink
              exact
              to='/about'
              activeClassName='active'
              className='item'
            >
              About
            </NavLink>
          </Fragment>
        )}
        <div className='right menu'>
          <GoogleAuth />
        </div>
      </div>
    );
  };
  return <Fragment>{renderNav()}</Fragment>;
};

export default Header;
