import React from "react";

const ProjectLinks = ({ links }) => {
  return (
    <div className="mil-mb-30">
      <p className="mil-upper mil-mb-10">Project Links:</p>

      {links.map((link, index) => (
        <React.Fragment key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link.link}
            className="mil-text-sm mil-hyperlink"
          >
            {link.name}
          </a>
          {index < links.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectLinks;
