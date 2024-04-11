import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-scroll";
import Logo from "../../Assets/logo.png";
import Menu_icon from "../../Assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : " "}`}>
      <img src={Logo} alt="nav-logo" className="logo" />
      <ul className={mobileMenu ? "" : "hidden-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact Us
          </Link>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
      <img src={Menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
