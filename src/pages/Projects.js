import React, { Component } from "react";

import "../pages/Projects.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import Item from "@mui/material/Grid";
import ReadMore from "../components/ReadMore";
import criptscripts from "../assets/images/criptScripts.png";
import data_analysis from "../assets/images/data_analysis_pic.png";
import excel_uploader from "../assets/images/excel_uploader_pic_new.png";
import insole from "../assets/images/insole_pic.png";
import battle_royale from "../assets/images/BATTLE_ROYALE.png";
import reactPic from "../assets/images/logo512.png";

class Projects extends Component {
  // Create a default state of this component with an empty list of todos.

  render() {
    return (
      <div>
        <div className="title_style">
          <b>Projects</b>
        </div>

        <Grid container spacing={0} bgcolor={"white"} height="100vh">
          <Grid item xs={6}>
            <Item>
              <img
                className="image_styling"
                src={battle_royale}
                alt="The text 'BATTLE ROYALE' on a black background"
              ></img>
              <ReadMore
                title={"Battle Royale Simulation"}
                link={"https://github.com/CVilla17/Battle_Royale_Sim"}
                description={
                  "Following my first semester of college/introduction to computer science I really wanted to make something using what I had learned in class. I asked my professor if I could use some of the starter code from a monte carlo simulation lab we had done earlier in the semester, and once I had the go ahead I began formulating a plan to make this game with my friend. I ended up making the game to be customizable and playable for many players. The interface is pretty rough but it reflects my experience at the time. I really enjoyed making it and playing with friends. Game play is as follows: "
                }
                bullets={[
                  "Centers around and is changed by user inputted stats",
                  "Players roam a user designed arena ",
                  "A story is generated describing their interactions until only one player remains",
                ]}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img
                className="image_styling"
                src={excel_uploader}
                alt="Excel Uploader"
              ></img>

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
              <img
                className="image_styling"
                src={criptscripts}
                alt="criptscripts home page"
              ></img>
              <ReadMore
                title={"Other CRIPT Contributions"}
                link={
                  "https://github.com/C-Accel-CRIPT/criptscripts?tab=readme-ov-file"
                }
                description={
                  "One of my other main responsibilities was to work on the maintenance and development of the CRIPT SDK, the core of the CRIPT service. While working at CRIPT I also contributed to several other projects that can be found on the CRIPT github or via this criptscripts website that is linked(although it should be moved to the main site soon apparently). Notable highlights from the criptscripts website that I worked on are:  "
                }
                bullets={[
                  "multiple graph representations of experiments translated from research papers (CRIPT graphs)",
                  "JSON representations of those same experiments (CRIPT JSON)",
                  "example scripts for SDK usage as well as bibliography transformers (CRIPT scripts)",
                  "example excel files for users (Excel files)",
                ]}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img
                className="image_styling"
                src={insole}
                alt="Picture of prototype insole"
              ></img>
              <ReadMore
                title={
                  "Insole Design and Optimization Processes for Gait Analysis"
                }
                link={"https://ieeexplore.ieee.org/document/10372003"}
                description={
                  "I worked as a researcher at Universidad Panamericana in Mexico City, Mexico from June until August 2023. One of my responsibilities was the development of an insole that would capture data for gait analysis with intent for use with Parkinson's patients. My contributions are as follows:"
                }
                bullets={[
                  "Revised and improved code base for the insole's data acquisition features",
                  "Iterated on the design of the insole including evaluating cost/comfortability/functionality of materials",
                  "Aided in the construction of prototype insoles",
                  "Researched and implemented features for better user experience and efficiency",
                  "Documented work for future ease of work after my departure",
                ]}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img
                className="image_styling"
                src={data_analysis}
                alt="Picture of one data point in the data analysis"
              ></img>
              <ReadMore
                title={
                  "Development of a Multimodal Gait Analysis Acquisition System"
                }
                link={"https://ieeexplore.ieee.org/document/10371930"}
                description={
                  "I worked as a researcher at Universidad Panamericana in Mexico City, Mexico from June until August 2023. During my time there I was the lead on the development of a data analysis system that analyzed data from 2 independent insoles, a total of 5 Inertial Measurement Units, and 2 camera feeds. A rough outline of my work is as follows: "
                }
                bullets={[
                  "Collaborated with project teams to ensure cohesive data collection and understanding of processes",
                  "Aggregated the data of all independent systems and aligned them to a consistent frame of reference",
                  "Processed raw data to be understandable and useable in other programs",
                  "Created an interactive program for observing and labeling data",
                  "Brainstormed methods to use data with supervised learning methods for gait analysis",
                  "Documented all work for continued ease of use after departure from project",
                ]}
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img
                className="image_styling"
                src={reactPic}
                alt="ReactJS logo"
              ></img>
              <ReadMore
                title={"This Website :)"}
                link={"/"}
                description={
                  "I wanted a space to display my work as well as my interests, so I decided to use some of my programing background to whip up a website. Although this isn't my strongest area of expertise it's enjoyable to make something of my own and is a nice exercise of my skills."
                }
              />
            </Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;
