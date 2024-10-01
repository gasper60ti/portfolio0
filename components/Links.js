"use client";
import React from "react";

const Links = ({ links }) => {
  return (
    <div className="mil-mb-30">
      <p className="mil-upper mil-mb-10">Podcast Hosts:</p>
      {links.map((contributor, index) => (
        <React.Fragment key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={contributor.link}
            className="mil-text-sm mil-hyperlink"
          >
            {contributor.name}
          </a>
          {index < links.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Links;
