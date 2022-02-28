import React from "react";
import { Container, Grid } from "@mui/material";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import pdf from '../Assets/user.pdf';
const LandingDownload = () => {
  return (
    <>
      <section
        style={{
          marginTop: "4rem",
          backgroundColor: "#965DE9",
          padding: "3rem 0",
        }}
      >
        <Container maxWidth={"lg"}>
          <Grid item container justifyContent="center">
            <Grid md={6} item lg={12}>
              <div className="section-unduh">
                <h3 className="text-center text-white">Unduh Dokumentasi</h3>
                <p className="text-center" style={{ color: "#DDCDCD" }}>
                  Kamu bisa mengunduh dokumentasi di halaman ini dalam bentuk
                  PDF, silahkan klik tombol Unduh dibawah.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href={pdf}
                  download="Documentation.pdf"
                  style={{
                    backgroundColor: "#ffff",
                    padding: "5px 2rem",
                    borderRadius: "10px",
                  }}
                  className="text-primary"
                >
                  <BsFillFileEarmarkPdfFill />
                  Unduh
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default LandingDownload;
