import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const multipleLinksData = [
  { label: "Home", link: "/" },
  { label: "Faq", link: "/faq" },
  { label: "Contact", link: "/contact" },
];
const NavBar = () => {
    const [collapse, setCollapse] = useState(false)
  return (
    <>
      <header className="navbar-header">
        <NavLink to={"/"}>Home</NavLink>

        <div className={collapse? 'navbar animation-navbar' : 'navbar'}>
          {multipleLinksData.map((link) => (
            <div className="nav-item" key={link.label}>
              <NavLink to={link.link}>{link.label}</NavLink>
            </div>
          ))}
          <div className="dropdown nav-item">
            <button>Doc</button>
            <div className="dropdown-item">
              <NavLink to={"/installation"}>Installation</NavLink>
              <NavLink to={"/price"}>Price</NavLink>
            </div>
          </div>
        </div>
          <span className="burger" onClick={() => {
              setCollapse(!collapse)
          }}>
            <IoMenu />
          </span>
      </header>
    </>
  );
};

export default NavBar;
