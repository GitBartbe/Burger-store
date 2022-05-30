import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './header.styles.scss';
import logo from '../../assets/burger-logo.png';
import userIcon from '../../assets/account-circle.svg';
import shoppingBag from '../../assets/shopping-bag.svg';
import CartDropdown from '../crat-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../firebase/firebase';
import NavLinks from './nav-links/NavLinks';
import BurgerIcon from './burger-icon-nav/BurgerIcon';
import MobileNav from './mobile-nav/MobileNav';

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();

  const gotToLogIn = () => {
    navigate('/SignIn');
  };

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMobile = () => {
    setIsHidden(false);
  };

  return (
    <div className='header-container'>
      <div className='wrapper'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-links'>
          <NavLinks />
        </div>
        <div
          className='burger-icon-container'
          onClick={() => setIsHidden(!isHidden)}
        >
          <BurgerIcon isMobileOpen={isHidden} />
        </div>
        <MobileNav isMobileOpen={isHidden} closeMobile={closeMobile} />
        <div className='menu-icons-container'>
          <div className='menu-icons'>
            <div className='login-icon' onClick={gotToLogIn}>
              <img src={userIcon} alt='user-icon' />
            </div>
            <div className='shoping-bag' onClick={toggleIsCartOpen}>
              <div className='amount'>{cartCount}</div>
              <img src={shoppingBag} alt='shopping-bag' />
            </div>
          </div>
          {currentUser ? (
            <span className='log' onClick={signOutUser}>
              Logout
            </span>
          ) : (
            <span className='log'>Log In</span>
          )}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  );
};

export default Header;
