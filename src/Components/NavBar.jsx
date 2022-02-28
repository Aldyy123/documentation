import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoArrowDown } from "react-icons/io5";
import { Transition, CSSTransition } from "react-transition-group"; // ES6
import PDF from "../Assets/user.pdf";


const NavBar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <header className="navbar-header">
        <NavLink to={"/"} style={{ color: "#965DE9" }}>
          Dokumentasi
        </NavLink>
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
              <div className="nav-item">
                <a href='https://clicklayout.com/'>
                  Beranda
                </a>
              </div>
                <div className="nav-item">
                  <NavLink to={'/about'}>Tentang</NavLink>
                </div>
              <div className="nav-item">
                <a href={PDF} download="Documentation.pdf">
                  Download
                </a>
              </div>
              {/* <div className="nav-item">
                <NavLink
                  style={({ isActive }) => (isActive ? styles.active : {})}
                  to={"/documentation"}
                  className="btn-dropdown"
                >
                  Doc
                </NavLink>
              </div> */}
            </div>
          )}
        </Transition>
      </header>
    </>
  );
};

export default NavBar;
