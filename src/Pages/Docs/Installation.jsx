import React, {createContext} from "react";
import { Container, Grid, Card } from "@mui/material";
import SideBar from "../../Components/SideBar";
import ContentBar from "../../Components/ContentBar";
import Home from "../Home";
const LinksContext = createContext()

const defaultLinkData = {
  label: "Installasion",
  link: "/installation",
};
const multipleLinksData = [
  { label: "Requirements", link: "/installation/requirement" },
  { label: "Configuration", link: "/installation/configuration" },
  { label: "Feature", link: "/installation/feature" },
  { label: "Element", link: "/installation/element" },
];

const Docs = () => {
 
  return (
    <>
    <LinksContext.Provider value={multipleLinksData}>
      <Container maxWidth={"lg"} style={{marginTop: "3rem"}}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={3}>
            <SideBar
              defaultLinkData={defaultLinkData}
              multipleLinksData={multipleLinksData}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Card style={{ padding: "20px" }}>
              <ContentBar
                DefaultComponent={<Home />}
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
