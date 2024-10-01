"use client";
import React from "react";

const Hosts = ({ hosts }) => {
  return (
    <div className="mil-mb-30">
      <p className="mil-upper mil-mb-10">Podcast Hosts:</p>
      {hosts.map((contributor, index) => (
        <React.Fragment key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={contributor.link}
            className="mil-text-sm mil-hyperlink"
          >
            {contributor.name}
          </a>
          {index < hosts.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Hosts;
