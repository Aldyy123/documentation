import React from "react";
import { Container, Grid, Card } from "@mui/material";
import { Outlet, Link, useLocation } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "@emotion/styled";
const Li = styled.li({
  padding: "5px 10px",
});
const Nav = ({ className, label, link }) => (
  <li className={className}>
    <Link to={link}>{label}</Link>
  </li>
);
const SideNav = styled(Nav)`
  padding: 5px 10px;
`;

const Installation = () => {

  return (
    <>
      <Container maxWidth={"lg"}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={3}>
            <Card>
              <li style={{ listStyle: "none", margin: "10px" }}>
                <Link
                  to={"/installation"}
                  style={{ display: "flex", alignItems: "center", margin: "10px" }}
                >
                  <IoReturnUpBack size={30} />
                  <span style={{marginLeft: "10px"}}>Installation</span>
                </Link>
              </li>
              <ul>
                <SideNav label="Requirments" link={"/Installation/requirement"} />
                <SideNav label="Installation" link={"/Installation"} />
                <SideNav label="Configuration" link={"/requirements"} />
                <SideNav label="Customization" link={"/Customization"} />
                <SideNav label="Elements" link={"/Elements"} />
              </ul>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card style={{ padding: "20px" }}>
              <Outlet />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Installation;
