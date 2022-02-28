import React from "react";
import { Container, Grid } from "@mui/material";
import Footer from "../Components/Footer";
import {Helmet} from 'react-helmet'

const styles = {
  container: {
    backgroundColor: "#965DE9",
  },
};
const Document = () => {
  return (
    <>
    <Helmet>
      <title>Tentang</title>
    </Helmet>
      <section style={styles.container}>
        <Container maxWidth={"lg"}>
          <Grid container style={{ padding: "1.5rem 0" }}>
            <Grid item xs={12}>
              <h3 className="text-center text-white">Tentang</h3>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Container maxWidth={"md"} style={{ marginTop: "2rem" }}>
        <Grid container flexDirection="column">
          <Grid item xl={12} marginTop="2rem">
            <p className="text-justify">
              Click Layout adalah extention script untuk Adobe Illustrator yang
              dapat membantumempercepat pekerjaan anda dalam layout objek
              printing ke dalam satu kertas.
            </p>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Document;
