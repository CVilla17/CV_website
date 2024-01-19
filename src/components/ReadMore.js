import React, { useState } from "react";
import "../components/ReadMore.css";
function ReadMore({ title, description, link, bullets = [] }) {
  const [expanded, setExpanded] = useState(false);
  console.log("length greater than 0", bullets.length > 0);
  let hasBullets = bullets.lenght > 0;
  console.log("Has bullets:", hasBullets);
  return (
    <div>
      <p>
        <a href={link}>
          <b>{title}</b>
        </a>
      </p>
      <span onClick={() => setExpanded(!expanded)}>
        {expanded ? (
          <div id="change"> Read Less </div>
        ) : (
          <div id="change">Read More...</div>
        )}
      </span>
      {expanded ? (
        <div>
          <p>{description}</p>
          <div>
            {bullets.length > 0 ? (
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet.id}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReadMore;
