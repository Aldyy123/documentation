import React, {  useEffect, useState } from "react";
import {Helmet} from 'react-helmet';
import { Container, Grid, Card } from "@mui/material";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import { getUrlRoutes } from "../Models/Firestore";
import ContentBar from "../Components/ContentBar";
import ContentDocument from "../Components/ContentDocument";

const styles = {
  container: {
    backgroundColor: "#965DE9",
  },
};
const defaultLinkData = {
  label: "Documentation",
  link: "/documentation",
};
const Document = () => {
    const [dataRoutes, setDataRoutes] = useState([]);
    const [title, setTitle] = useState(null);
    useEffect(() => {
      getUrlRoutes()
        .then((querySnapshot) => {
          const temp = [];
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), id: doc.id };
            temp.push(data);
          });
          setDataRoutes(temp);
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <>
    <Helmet>
        <title>Documentation</title>
    </Helmet>
      <section style={styles.container}>
        <Container maxWidth={"lg"}>
          <Grid container style={{ padding: "1.5rem 0" }}>
            <Grid item xs={12}>
              <h3 className="text-center text-white">{title?.title || 'Documentation'}</h3>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Container maxWidth={"md"} style={{marginTop: '2rem'}}>
        <Grid container flexDirection="column">
          <Grid>
            <Card>
              <SideBar
                defaultLinkData={defaultLinkData}
                multipleLinksData={dataRoutes}
              />
            </Card>
          </Grid>
          <Grid item xl={12} marginTop='2rem' className='content'>
            {/* <Outlet context={content} /> */}
            {/* <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p> */}
            <ContentBar
                  DefaultComponent={
                    <ContentDocument
                      routes={dataRoutes}
                      defaultLinkData={defaultLinkData}
                    />
                  }
                  defaultLinkData={defaultLinkData}
                  LinksContext={dataRoutes}
                  title={setTitle}
                />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Document;
