import React, { useState } from "react";
import logo from "../assets/images/MianLogo.jpg";
import searchIcon from "../assets/images/search-icon.png";
import cart from "../assets/images/Cart.png";
import hamburger from "../assets/images/hamburger-menu.svg";
import "../styles/header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

const toggleMenu = () => {
  if (!menuOpen) {
    setMenuVisible(true);       // Show it immediately
    setTimeout(() => setMenuOpen(true), 10); // Delay to trigger animation
  } else {
    setMenuOpen(false);         // Start exit animation
    setTimeout(() => setMenuVisible(false), 300); // Remove from DOM after animation
  }
};

const handleMenuItemClick = () => {
  setMenuOpen(false);
  setTimeout(() => setMenuVisible(false), 300);
};


  return (
    <header>
      {/* Main Header */}
      <section className="header">
        <div className="left-section">
          <img className="logo-img" src={logo} alt="Site Logo" />
          <div className="logo-text">Tech Savvy Nurse Onyi</div>
        </div>

        <div className="header-search desktop-only">
          <input type="text" placeholder="Search products..." />
          <button aria-label="Search">
            <img className="search-icon" src={searchIcon} alt="Search" />
          </button>
        </div>

        <div className="right-upper-section">
          <button className="sign-in-btn">Sign In</button>

          <button className="orders-btn">
            Returns <br /> & Orders
          </button>

          <div className="cart-wrapper">
            <button className="cart-btn" aria-label="Cart">
              <span className="cart-icon">🛒</span>
              <span className="cart-text">Cart</span>
              <span className="cart-count">3</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mini Header */}
      <section className="mini-header">
        <button
          className="nav-button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <img className="burger-img" src={hamburger} alt="Menu" />
        </button>

        
          <nav className="scrolling-nav right-section">
            <ul>
              <li>Flashcards</li>
              <li>Clinical Handbooks</li>
              <li>Digital Diagrams</li>
              <li>Med-Surg Bundles</li>
              <li>Exam Tips</li>
              <li>Quick Notes</li>
            </ul>
          </nav>
        

      </section>

 {menuVisible && (
  <section className={`dropdown-menu ${menuOpen ? 'open' : 'closing'}`}>
      <div className="left-sectionb">
          <img className="logo-imgb" src={logo} alt="Site Logo" />
          <div className="logo-textb">Tech Savvy Nurse Onyi</div>
         <div>
           <button className="close-btn" onClick={handleMenuItemClick}>✕</button>
         </div>
        </div>
       <div className="right-sectionb">
        <ul>
      <li onClick={handleMenuItemClick}>Home</li>
      <li onClick={handleMenuItemClick}>Shop</li>
      <li onClick={handleMenuItemClick}>Customer Service</li>
      <li onClick={handleMenuItemClick}>About Onyi</li>
    </ul>
       </div>
  </section>
)}


    </header>
  );
}

export default Header;
