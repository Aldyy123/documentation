import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Nav = ({ label, link, style }) => (
  <li style={style}>
    <Link to={link} style={{ textDecoration: "none" }}>
      {label}
    </Link>
  </li>
);
const Overview = ({ routes, defaultLinkData }) => {

  return (
    <>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
      <Grid>
        <h3>Documentation</h3>
        <div
          style={{ margin: "10px 20px", backgroundColor: "rgb(248 249 250)" }}
          className="overview"
        >
          <ul
            style={{ listStyle: "none", padding: "5px 20px" }}
            className="overview-ul"
          >
            {routes.length > 0
              ? routes.map((route, index) => (
                  <Nav
                    link={defaultLinkData.link + route.url}
                    label={route.label}
                    key={index}
                    style={{ margin: "15px 0" }}
                  />
                ))
              : null}
          </ul>
        </div>
      </Grid>
    </>
  );
};

export default Overview;
