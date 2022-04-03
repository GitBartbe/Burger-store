import React, { useState, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./header.styles.scss";
import { navLinks } from "./links";
import logo from "../../assets/burger-logo.png";
import userIcon from "../../assets/account-circle.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import CartDropdown from "../crat-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const headerLinks = navLinks;
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerLinks.findIndex((e) => e.path === pathname);

  const navigate = useNavigate();

  const gotToLogIn = () => {
    navigate('/SignIn');
    
  }

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" onClick={handleClick} />
        </div>

        <ul className={`${isHidden ? "hidden" : ""} header__nav`}>
          {headerLinks.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link onClick={() => setIsHidden(true)} to={e.path}>
                {e.display}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-icons">
          <div className="login-icon" onClick={gotToLogIn} >
            <img src={userIcon} />
          </div>
          <div className="shoping-bag" onClick={toggleIsCartOpen}>
            <div className="amount">{cartCount}</div>
            <img src={shoppingBag} />
          </div>
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;
