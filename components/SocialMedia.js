"use client";
import React from "react";

const socialMedias = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/cse.club/",
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/club.scientifique.esi/",
  },
  {
    name: "X",
    link: "https://x.com/csesi_club",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/user/ClubScientifiqueESI",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/cse-club",
  },
];
const SocialMedia = () => {
  return (
    <div className="mil-mb-30">
      <p className="mil-upper mil-mb-10">Social media:</p>
      {socialMedias.map((media, index) => (
        <React.Fragment key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={media.link}
            className="mil-text-sm mil-hyperlink"
          >
            {media.name}
          </a>
          {index < socialMedias.length - 1 && ", "}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialMedia;
