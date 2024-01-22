import React, { Component } from "react";

import "../pages/Home.css";
import home_pic from "../assets/images/home_pic.jpg";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.

  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={home_pic}
              alt="Profile Pic"
            ></img>
            <div>
              <b>Quick Facts</b>
              <div text-align="left">
                <ul>
                  <li>
                    Grew up in Illinois and went to Warren Township High School
                  </li>
                  <li>
                    Currently a junior at MIT studying Electrical Engineering
                    and Computer Science
                  </li>
                  <li>Enjoys running, working out, cooking, and poetry</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Carlos Villa</div>
              <div className="brief_description">
                Hi! Welcome to my website, I made this to show off things I've
                worked on and I'm passionate about. Feel free to take a look
                around! Oh, you can also contact me at:{" "}
                <a href="mailto:villac@mit.edu">villac@mit.edu</a> or{" "}
                <a href="mailto:carlos.x.5991@gmail.com">
                  carlos.x.5991@gmail.com
                </a>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
