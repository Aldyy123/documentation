import React, { useContext } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

const ContentBar = ({ defaultLinkData, DefaultComponent, LinksContext }) => {
  const url = useLocation();
  const linksData = useContext(LinksContext);

  const linkNow = linksData.findIndex((value, index) => {
    if (value.link !== url.pathname) return false;
    else return index;
  });
  return (
    <>
      {url.pathname === defaultLinkData.link ? (
        <>
          {DefaultComponent}
          <hr />
          <nav style={{ display: "flex", justifyContent: "right" }}>
            <Link to={linksData[0].link}>{linksData[0].label}</Link>
          </nav>
        </>
      ) : (
        <>
          <Outlet />
          <hr />
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to={linksData[linkNow - 1].link}>
              {linksData[linkNow - 1].label}
            </Link>
            {linksData.length >= linkNow + 1 ? (
              <Link to={linksData[linkNow + 1].link}>
                {linksData[linkNow + 1].label}
              </Link>
            ) : null}
          </nav>
        </>
      )}
    </>
  );
};

export default ContentBar;
