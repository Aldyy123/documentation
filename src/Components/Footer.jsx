import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Container maxWidth={"md"} style={{marginTop: '2.5rem'}}>
        <Grid container className="footer">
          <div className="social">
            <a href="https://github.com/bucin-kode" target="_blank">
              <IoLogoGithub size="30" />
            </a>
          </div>
          <p className="text-primary">Build with 💕 from Indonesia</p>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
