import React from "react";
import styled from "@emotion/styled";
import { VscCreditCard } from "react-icons/vsc";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";

const Box = styled.div({
  padding: "15px",
  textAlign: "center",
  boxShadow: "0px 0px 5px 2px grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "box-shadow 0.5s ease",
  ":hover": {
    boxShadow: "0px 9px 5px 2px grey",
  },
});

const Input = styled.input({
  borderRadius: "20px",
  border: "none",
  padding: "10px",
  width: "25rem",
  backgroundImage: `url(https://demo.gethugothemes.com/icons/ght-logo.png)`,
  backgroundPosition: "450px",
  backgroundSize: "190px",
  backgroundRepeat: "no-repeat",
  margin: "0 auto",
  "&:focus": {
    outline: "none",
  },
  "&::after": {
    position: "absolute",
    color: "salmon",
    display: "block",
    width: "100%",
    height: "100%",
  },
  "@media only screen and (max-width: 600px)": {
    width: "10rem!important",
    margin: "0 auto!important",
    display: "block!important",
  },
  "@media only screen and (max-width: 900px)": {
    width: "20rem",
  },
});

const Home = () => {
  const Grid = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
    padding: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr!important",
    },
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  });

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
        <section className="section-home">
          <section
            style={{
              zIndex: 1,
              position: "relative",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <h1>Support Center & Knowledge base</h1>
            <h3 className="title-home">
              Find advice and answers from our support team fast or get in touch
            </h3>
            <Input
              placeholder={"Have a question? Just ask here or enter terms"}
            />
          </section>
        </section>
      <Container maxWidth={"lg"}>
        <section className="container" style={{ textAlign: "center" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
            mi sit amet ipsum rhoncus pulvinar. Suspendisse consectetur
            hendrerit lectus eu molestie. Praesent at est arcu. Praesent
            tristique turpis massa, quis pellentesque tellus gravida sed. Duis
            consectetur justo in sodales volutpat. Phasellus pretium egestas
            ligula id scelerisque. Sed non enim in enim tristique laoreet. Duis
            mollis nulla tellus, faucibus varius dui vestibulum eget.
            Pellentesque congue nibh orci, ut ultrices ipsum tincidunt a. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Suspendisse auctor elit id magna consequat malesuada.
            Vivamus euismod urna nunc, at hendrerit eros tincidunt at. Nunc
            posuere ipsum erat, id aliquet eros interdum quis.
          </p>
          <p>
            Cras condimentum et nibh quis fermentum. Praesent enim nisi,
            placerat sit amet ex ac, dapibus iaculis nibh. Aliquam dapibus in
            purus nec ullamcorper. Aliquam in lectus at nisi ornare dictum.
            Aenean bibendum elit nunc, in dignissim enim ornare eget. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Sed at tortor diam. Suspendisse non nunc leo. Nulla
            facilisi. Integer tristique mauris at risus fringilla maximus. Donec
            id justo ac diam efficitur vehicula. Morbi nec vestibulum felis,
            efficitur rhoncus nunc.
          </p>
        </section>
        <section>
          <h1 style={{ textAlign: "center" }}>Find your answer by subject</h1>
          <Grid>
            <Box>
              <VscCreditCard size={"70px"} />
              <h3>Instalasion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae veritatis, ratione culpa esse possimus facere
                similique? Consectetur, pariatur temporibus repellat harum iste
                nam sequi voluptates fugit similique maiores. Doloribus?
              </p>
            </Box>
            <Box>
              <VscCreditCard size={"70px"} />

              <h3>Instalasion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae veritatis, ratione culpa esse possimus facere
                similique? Consectetur, pariatur temporibus repellat harum iste
                nam sequi voluptates fugit similique maiores. Doloribus?
              </p>
            </Box>
            <Box>
              <VscCreditCard size={"70px"} />

              <h3>Instalasion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae veritatis, ratione culpa esse possimus facere
                similique? Consectetur, pariatur temporibus repellat harum iste
                nam sequi voluptates fugit similique maiores. Doloribus?
              </p>
            </Box>
          </Grid>
        </section>
        <section
          style={{
            textAlign: "center",
            padding: "25px",
            margin: "50px",
            boxShadow: "0px 0px 3px 3px grey",
          }}
        >
          <h1>Didn’t find an answer to your question?</h1>
          <p>
            Musce libero nunc, dignissim quis turpis quis, semper vehicula
            dolor. Suspendisse tincidunt consequat quam.
          </p>
          <button
            style={{
              padding: "10px 20px",
              background: "blue",
              color: "white",
              border: "none",
              outline: "none",
            }}
          >
            Contact us
          </button>
        </section>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
