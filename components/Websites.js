"use client";
import React from "react";

const WebSites = ({ websites }) => {
  return (
    <div className="mil-mb-30">
      <p className="mil-upper mil-mb-10">Websites:</p>
      {websites.map((website, index) => (
        <React.Fragment key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={website.link}
            className="mil-text-sm mil-hyperlink"
          >
            {website.name}
          </a>
          {index < websites.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WebSites;
