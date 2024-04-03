import "./Header.css";
import { useContext } from "react";
import { CardContext } from "../../../context/CardProvider";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CardContext);

  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            TÜM MAYOLARDA YAZ İNDİRİMİ VE ÜCRETSİZ EKSPRES ULUSLARARASI TESLİMAT
            - %50 İNDİRİM!
            <a href="shop.html"> ŞİMDİ ALIŞVERİŞ YAPIN</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                LOGO
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${
                        pathname === "/" ? "active" : ""
                      }`}
                    >
                      AnaSayfa
                      <i className="bi bi-chevron-down"></i>
                    </Link>

                    <div className="menu-dropdown-wrapper">
                      {/* <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Home Clean</a>
                        </li>
                        <li>
                          <a href="#">Home Collection</a>
                        </li>
                        <li>
                          <a href="#">Home Minimal</a>
                        </li>
                        <li>
                          <a href="#">Home Modern</a>
                        </li>
                        <li>
                          <a href="#">Home Parallax</a>
                        </li>
                        <li>
                          <a href="#">Home Strong</a>
                        </li>
                        <li>
                          <a href="#">Home Style</a>
                        </li>
                        <li>
                          <a href="#">Home Unique</a>
                        </li>
                        <li>
                          <a href="#">Home RTL</a>
                        </li>
                      </ul> */}
                    </div>
                  </li>
                  <Link
                    to={"/shop"}
                    className={`menu-link ${
                      pathname === "/shop" ? "active" : ""
                    }`}
                  >
                    Mağaza
                    <i className="bi bi-chevron-down"></i>
                  </Link>

                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${pathname === "/blog" && "active"}`}
                    >
                      Haberler 
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" ? "active" : ""
                      }`}
                    >
                      İletişim
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <a href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: PropTypes.func,
};
