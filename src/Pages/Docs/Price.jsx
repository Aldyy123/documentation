import React from "react";
import { Container, Grid, Card } from "@mui/material";
import SideBar from "../../Components/SideBar";
import ContentBar from "../../Components/ContentBar";
import Configuration from "../Pages/Installation/Configuration";

const defaultLinkData = {
  label: "Price",
  link: "/price",
};
const multipleLinksData = [
  { label: "Requirements", link: "/price/requirement" },
  { label: "Configuration", link: "/price/configuration" },
  { label: "Feature", link: "/price/feature" },
  { label: "Element", link: "/price/element" },
];

const Docs = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={3}>
            <SideBar
              defaultLinkData={defaultLinkData}
              multipleLinksData={multipleLinksData}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Card style={{ padding: "20px" }}>
              <ContentBar DefaultComponent={<Configuration />} defaultLinkData={defaultLinkData} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Docs;
