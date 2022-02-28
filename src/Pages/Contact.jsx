import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const Input = styled.input({
  padding: "15px 10px",
  boxShadow: "2px 1px 7px rgba(0,0,0,0.5)",
  outline: "none",
  border: "none",
  width: "100%",
  margin: "5px",
});
const TextArea = styled.textarea({
  padding: "15px 10px",
  boxShadow: "2px 1px 7px rgba(0,0,0,0.5)",
  outline: "none",
  border: "none",
  width: "100%",
  margin: "5px",
});
const Button = styled.button({
  padding: "10px 20px",
  backgroundColor: "#02007e",
  color: "#ffff",
  border: "none",
  outline: "none",
});

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container maxWidth={"md"} style={{ marginTop: "5rem" }}>
        <Grid xs={11} item md={12}>
          <h1>Kontak kami</h1>
          <h4>Cobain demonya dengan mengisi data diri.</h4>
          <form action="mailto:mohammad.aldyy@gmail.com" method="post">
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Input placeholder="Subject" name="subject" />
            <TextArea placeholder="Message" name="message" rows={"10"} cols={"10"} />
            <Button>Send</Button>
          </form>
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
