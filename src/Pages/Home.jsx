import React, {useState} from "react";
import styled from "@emotion/styled";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import LandingDownload from "../Components/LandingDownload";

const styles = {
  link: {
    textAlign: "center",
    padding: "15px 3rem",
    textDecoration: "none",
    color: "black",
    boxShadow: "2px 2px 4px #00000040",
    borderRadius: "15px",
  },
};


const Input = styled.input({
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
  const GridCustom = styled.div({
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
  const [query, setQuery] = useState(null)
  console.log(query)
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
          <h1 className="title-home">
            Mulai dan Cari Solusi Masalah kamu di Halaman Dokumentasi
          </h1>
        </section>
      </section>
      <Container maxWidth={"md"}>
        <h1
          style={{
            color: "#965DE9",
            textAlign: "center",
          }}
        >
          Kategori
        </h1>
        <Grid item container flexWrap={"wrap"} wrap={"wrap"}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            className="grid-link-category"
            container
          >
            <Link style={styles.link} to="/about">
              Tentang
            </Link>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            className="grid-link-category"
            container
          >
            <Link style={styles.link} to="/documentation">
              Documentation
            </Link>
          </Grid>
        </Grid>
        {/* <section>
          <h1 style={{ textAlign: "center" }}>Find your answer by subject</h1>
          <GridCustom>
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
          </GridCustom>
        </section>
        <section
          style={{
            textAlign: "center",
            padding: "25px",
            margin: "50px",
            boxShadow: "0px 0px 10px grey",
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
        </section> */}
      </Container>
      <LandingDownload />
      <Footer />
    </>
  );
};

export default Home;
