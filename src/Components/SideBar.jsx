import React from "react";
import { Card } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "@emotion/styled";
const texDecoration = {
  textDecoration: "none",
};
const unActiveStyle = {
  color: "blue",
  ...texDecoration
};
const activeStyle = {
  color: "red",
  ...texDecoration
};

const Nav = ({ className, label, link }) => (
  <li className={className}>
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
      to={link}
    >
      {label}
    </NavLink>
  </li>
);
const SideNav = styled(Nav)`
  padding: 5px 10px;
`;

const SideBar = ({ defaultLinkData, multipleLinksData }) => {
  return (
    <>
      <Card>
        <li style={{ listStyle: "none", margin: "10px" }}>
          <NavLink
            to={defaultLinkData.link}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px",
              ...texDecoration,
            }}
          >
            <IoReturnUpBack size={30} />
            <span style={{ marginLeft: "10px" }}>{defaultLinkData.label}</span>
          </NavLink>
        </li>
        <ul>
          {multipleLinksData?.map((value, index) => (
            <SideNav
              label={value.label}
              link={defaultLinkData.link + value.url}
              key={index}
            />
          ))}
        </ul>
      </Card>
    </>
  );
};

export default SideBar;
