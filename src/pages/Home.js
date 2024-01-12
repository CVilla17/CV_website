import React, { Component } from "react";
// import Todos from "../component/todos";
// import AddTodo from "../component/AddTodo";
import "../pages/Home.css";
import { ListSubheader } from "@mui/material";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.

  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            {/* <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img> */}
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
                  <li>
                    Love for running, working out, cooking, poetry, and friend
                    and family
                  </li>
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
                around!
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
