import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "@emotion/styled";
const texDecoration = {
  textDecoration: "none"
}

const Nav = ({ className, label, link }) => (
  <li className={className}>
    <Link style={texDecoration} to={link}>{label}</Link>
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
          <Link
            to={defaultLinkData.link}
            style={{ display: "flex", alignItems: "center", margin: "10px", ...texDecoration }}
          >
            <IoReturnUpBack size={30} />
            <span style={{ marginLeft: "10px" }}>{defaultLinkData.label}</span>
          </Link>
        </li>
        <ul>
          {multipleLinksData.map((value, index) => (
            <SideNav label={value.label} link={value.link} key={index} />
          ))}
        </ul>
      </Card>
    </>
  );
};

export default SideBar;
