import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Container maxWidth={"md"}>
        <Grid container className="footer">
          <p>Copyright © 2021 a Hugo theme by Gethugothemes</p>
          <div className="social">
            <a href="https://github.com/bucin-kode" target="_blank">
              <IoLogoGithub size="30" />
            </a>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
