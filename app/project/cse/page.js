"use client";
import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";
import ProjectDetailsIsotope from "@/components/ProjectDetailsIsotope";
import UsedTechnologies from "@/components/UsedTechnologies";
import SocialMedia from "@/components/SocialMedia";
import WebSites from "@/components/Websites"; // Corrected import
import { TechnologyEnum } from "@/utility/TechnologyEnum";

const socialMediaData = [
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

const webSitesData = [
  {
    name: "CSE Website",
    link: "https://www.cse.club/",
  },
  {
    name: "Tresor ESI",
    link: "https://tresor.cse.club/",
  },
];

const selectedTechnologies = [
  TechnologyEnum.DIGITAL_MARKETING,
  TechnologyEnum.MULTIMEDIA_PRODUCTION,
  TechnologyEnum.NETWORKING,
  TechnologyEnum.TECH_EVENTS_MAKING,
  TechnologyEnum.TEAM_MANAGEMENT,
  TechnologyEnum.MORE,
];
const images = [
  {
    src: "../img/portfolio/cse/main.jpg",
    alt: "cover",
    category: "architecture",
    size: "mil-long",
  },
  {
    src: "../img/portfolio/cse/2.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/cse/3.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/cse/4.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/cse/5.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
];

const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div className="container">
            <div className="mil-top-banner mil-text-center">
              <p className="mil-upper mil-mb-30">
                <span className="mil-accent">Frontend & Backend & DevOps</span>
              </p>
              <h2 className="mil-up mil-mb-60">
                TripX: multi-agency booking platform
              </h2>
              <UsedTechnologies technologies={selectedTechnologies} />
            </div>
            <div className="mil-project mil-mb-60">
              <ProjectDetailsIsotope images={images} />
              <div className="mil-divider" />

              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    During my time at CSE (Le Club Scientifique de l'ESI), I
                    took on various roles such as Marketing Manager, Video
                    Producer, Multimedia Manager, and Assistant. These roles
                    allowed me to sharpen my skills in digital marketing, social
                    media management, and multimedia production, contributing to
                    the club's media strategy and boosting its visibility.
                    <br />
                    <br />
                    Throughout my journey, I facilitated technical workshops,
                    collaborated with talented individuals, and played a key
                    role in organizing events like the Hack it hackathon. My
                    involvement allowed me to sharpen my skills in motion
                    graphics, photography, and event coverage. I also had the
                    privilege of speaking at the Talaba Talk's show, discussing
                    artificial intelligence, robotics, and the importance of
                    university clubs in fostering creativity and growth.
                    <br />
                    <br />
                    One of the most rewarding aspects of my experience was the
                    opportunity to network with brilliant people who shaped my
                    career. They helped me build a mindset focused on creativity
                    and technical development, and together we formed a
                    multidisciplinary community of friends that continues to
                    inspire me both professionally and personally.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="mil-timeline-nav">
                    <WebSites websites={webSitesData} />
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="nutriboost" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="wh" className="mil-button mil-mb-30">
                Next Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
