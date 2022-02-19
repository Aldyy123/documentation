import React from "react";
import Footer from "../Components/Footer";
import AccordianItem from "../Components/AccordianItem";
import { Container, Grid } from "@mui/material";
import {Helmet} from 'react-helmet'
const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: "Screen Readers Actually Read That Stuff",
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: "They Fail Poorly and Often",
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];

const Faq = () => {
  const [clickActive, setClickActive] = React.useState(-1);
  return (
    <>
    <Helmet>
      <title>Faq</title>
    </Helmet>
      <Container maxWidth={"md"} style={{marginTop: '5rem'}}>
        <Grid item>
          <h2>Frequently Asked Questions</h2>
          <section>
            {panels.map((panel, index) => (
              <AccordianItem
                panel={panel}
                key={index}
                index={index}
                click={{ clickActive, setClickActive }}
              />
            ))}
          </section>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Faq;
