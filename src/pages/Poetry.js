import "../pages/Poetry.css";
import React, { Component } from "react";

class Poetry extends Component {
  render() {
    return (
      <div>
        <div className="poetry_page_style">
          {"This is small collection of poems I've written :)"}
          <br></br>
          <br></br>
          <ul>
            <li>
              <a href="https://docs.google.com/document/d/1Qj3g9mgtYCJHODUbqP_8BtuELXtbOoMzy1ciWYANQwY/edit?usp=sharing">
                Pour One Out/Sharing a Drink
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1av4nwa-FxF2_Do3XGfO8GQDlMp5xFjSpQmcfR6xglJg/edit?usp=sharing">
                The Best Day of My Life
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1-Y7W1dYfQZekmzcJFir9Kqy-p9yXL-BEnifFmTL_BBM/edit?usp=sharing">
                {"i will celebrate like you (inspired by Lucille Clifton)"}
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1mMAbCVB3avhHA19sz8EqICcaMsrhOFHA4EFE6rCm_ok/edit?usp=sharing">
                Plateau
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1UazTk0IhdOQENH3JbHmwtxwFxqvgJXHHWHCzA1gPwSE/edit?usp=sharing">
                {"Tom's Episode (Never Released)"}
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1f4Gy0P7fQyW7QvoOBeWekk-Z_8tqa5BCesNbFWCW5tg/edit?usp=sharing">
                Coronita
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://docs.google.com/document/d/1Ac38f21zYeFF0TTohDjg54CYOpHS319ueTSRInxB8qU/edit?usp=sharing">
                Snowflake
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Poetry;
