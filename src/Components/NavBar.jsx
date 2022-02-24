import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoArrowDown } from "react-icons/io5";
import { Transition, CSSTransition } from "react-transition-group"; // ES6

const multipleLinksData = [
  { label: "Home", link: "/" },
  { label: "Faq", link: "/faq" },
  { label: "Contact", link: "/contact" },
];
const styles = {
  active: {
    color: "red",
    "&::before": {
      position: "absolute",
      content: "",
      backgroundColor: "pink",
      top: 0,
      left: 0,
    },
  },
};
const transitionStyle = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
};

const NavBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [DropdownView, setDropdownView] = useState(false);
  return (
    <>
      <header className="navbar-header">
        <NavLink to={"/"}>ClickLayout</NavLink>

        {/* <div className={"navbar"}>
          {multipleLinksData.map((link) => (
            <div className="nav-item" key={link.label}>
              <NavLink to={link.link}>{link.label}</NavLink>
            </div>
          ))}
          <div className="dropdown nav-item">
            <a href="#" className="btn-dropwdown">
              Doc
            </a>
            <div className="dropdown-item">
              <NavLink to={"/installation"}>Installation</NavLink>
              <NavLink to={"/price"}>Price</NavLink>
            </div>
          </div>
        </div> */}
        <button
          style={{ border: "none", background: "transparent" }}
          className="burger"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          <IoMenu />
        </button>
        <Transition in={collapse} timeout={500}>
          {(state) => (
            <div className={"navbar " + state}>
              {multipleLinksData.map((link) => (
                <div className="nav-item" key={link.label}>
                  <NavLink
                    to={link.link}
                    style={({ isActive }) => (isActive ? styles.active : {})}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
              <div className="nav-item">
                <NavLink
                  style={({ isActive }) => (isActive ? styles.active : {})}
                  to={"/documentation"}
                  className="btn-dropdown"
                >
                  Doc
                  {/* <IoArrowDown size={12} /> */}
                </NavLink>
                {/* <div className={"dropdown-item "}>
                  <NavLink to={"/installation"}>Installation</NavLink>
                  <NavLink to={"/price"}>Price</NavLink>
                </div> */}
                {/* <Transition in={DropdownView} timeout={200}>
                  {(classDropdown) => (
                  )}
                </Transition> */}
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  );
};

export default NavBar;
