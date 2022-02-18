import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Footer from "../Components/Footer"

const Input = styled.input({
  padding: "15px 10px",
  boxShadow: "2px 1px 57px -2px rgba(0,0,0,0.5)",
  outline: "none",
  border: "none",
  width: "100%",
  margin: '5px'
});
const TextArea = styled.textarea({
  padding: "15px 10px",
  boxShadow: "2px 1px 57px -2px rgba(0,0,0,0.5)",
  outline: "none",
  border: "none",
  width: "100%",
  margin: '5px',
});
const Button = styled.button({
    padding: "10px 20px",
    backgroundColor: "#02007e",
    color: '#ffff',
    border: "none",
    outline: "none",
})

const Contact = () => {
  return (
    <>
      <Container maxWidth={"md"} style={{marginTop: '5rem'}}>
        <Grid xs={11} item md={12}>
          <h1>Got Any Questions</h1>
          <h6>Submit the form and confirm your email address at Formspree.</h6>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <TextArea placeholder="Message" rows={"10"} cols={'10'}/>
          <Button>Send</Button>
        </Grid>
        <Grid>
            <Footer/>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
