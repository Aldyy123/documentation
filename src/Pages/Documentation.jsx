import React, { createContext, useEffect, useState } from "react";
import { Container, Grid, Card } from "@mui/material";
import SideBar from "../Components/SideBar";
import ContentBar from "../Components/ContentBar";
import { getUrlRoutes } from "../Models/Firestore";
import Overview from "./Overview";
const LinksContext = createContext();

const defaultLinkData = {
  label: "Documentation",
  link: "/documentation",
};

const Docs = () => {
  const [dataRoutes, setDataRoutes] = useState([]);
  useEffect(() => {
    getUrlRoutes()
      .then((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data().data, id: doc.id };
          temp.push(data);
        });
        setDataRoutes(temp);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <LinksContext.Provider value={dataRoutes}>
        <Container maxWidth={"lg"} style={{ marginTop: "3rem" }}>
          <Grid spacing={2} container>
            <Grid item xs={12} md={3}>
              <SideBar
                defaultLinkData={defaultLinkData}
                multipleLinksData={dataRoutes}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Card style={{ padding: "20px" }}>
                <ContentBar
                  DefaultComponent={
                    <Overview
                      routes={dataRoutes}
                      defaultLinkData={defaultLinkData}
                    />
                  }
                  defaultLinkData={defaultLinkData}
                  LinksContext={LinksContext}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </LinksContext.Provider>
    </>
  );
};

export default Docs;
