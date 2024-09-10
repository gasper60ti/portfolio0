"use client";
import React from "react";

const UsedTechnologies = ({ technologies }) => {
  return (
    <div className="mil-contact-card">
      {technologies.map((tech, index) => (
        <React.Fragment key={tech.name}>
          <a href={tech.link} target="_blank" rel="noopener noreferrer">
            {tech.name}
          </a>
          {index < technologies.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default UsedTechnologies;
