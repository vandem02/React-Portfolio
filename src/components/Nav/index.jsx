import { NavLink } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  );
};

export default Nav;
