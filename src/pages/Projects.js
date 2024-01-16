import React, { Component } from "react";

import "../pages/Projects.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import Item from "@mui/material/Grid";
import ReadMore from "../components/ReadMore";

class Projects extends Component {
  // Create a default state of this component with an empty list of todos.

  render() {
    return (
      <Grid container spacing={0} bgcolor={"turquoise"} height="100vh">
        <Grid item xs={6}>
          <Item>
            <ReadMore
              title={"Battle Royale Simulation"}
              link={"https://github.com/CVilla17/Battle_Royale_Sim"}
              description={
                "Following my first semester of college/introduction to computer science I really wanted to make something using what I had learned in class. I asked my professor if I could use some of the starter code from a monte carlo simulation lab we had done earlier in the semester, and once I had the go ahead I began formulating a plan to make this game with my friend. I ended up making the game to be customizable and playable for many players. The interface is pretty rough but it reflects my experience at the time. I really enjoyed making it and playing with friends. Game play centers around and is changed by user inputted stats. Players roam a user designed arena and a story is generated describing their interactions until only one player remains."
              }
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <ReadMore
              title={"CRIPT Excel Uploader"}
              description={
                "I worked with CRIPT through the Undergraduate Research Opportunities program at MIT for 1 year as a software developer. The Excel Uploader was one of my most notable contributions. When I was onboarded it was the only formal data ingestion pipeline outside of using our SDK. My lead Reid Mello nurtured my understanding of our software by having me write other programs before allowing me to work on the Uploader. Eventually I would assume joint control, alongside my supervisor Navid Hariri, and work on maintenance as well as updates as our data model's growth required it. By the time I left it fully supported our data model which had grown 2x from its initial state."
              }
              link={"https://github.com/C-Accel-CRIPT/cript-excel-uploader"}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <ReadMore
              title={"Other CRIPT Contributions"}
              link={
                "https://github.com/C-Accel-CRIPT/criptscripts?tab=readme-ov-file"
              }
              description={
                "While working at CRIPT I contributed to several other projects that can be found on the CRIPT github or via this criptscripts website that is linked(although it should be moved to the main site soon apparently). Notable highlights from the criptscripts website that I worked on are: multiple graph representations of experiments translated from research papers(CRIPT graphs), JSON representations of those same experiments(CRIPT JSON),example scripts for SDK usage as well as bibliography transformers(CRIPT scripts), example excel files for users (Excel files). Aside from the programs and other work mentioned I worked on development and maintenance of the CRIPT SDK, the core of the CRIPT service."
              }
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;
