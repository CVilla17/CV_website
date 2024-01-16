import React, { useState } from "react";

function ReadMore({ title, description, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p>
        <a href={link}>
          <b>{title}</b>
        </a>
      </p>
      <span onClick={() => setExpanded(!expanded)}>
        <div>Read More...</div>
      </span>
      {expanded ? (
        <div>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ReadMore;