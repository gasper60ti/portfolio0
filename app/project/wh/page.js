"use client";
import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";
import ProjectDetailsIsotope from "@/components/ProjectDetailsIsotope";
import UsedTechnologies from "@/components/UsedTechnologies";
import SocialMedia from "@/components/SocialMedia";
import { TechnologyEnum } from "@/utility/TechnologyEnum";
import Hosts from "@/components/Hosts";
import Links from "@/components/Links";
const linksData = [
  {
    name: "Youtube",
    link: "https://www.youtube.com/@WledHormaTalks",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/show/6reCIJwx0vtOMNs8al3xv0",
  },
  {
    name: "X",
    link: "https://twitter.com/WledHormaTalks",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/wledhormatalks",
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/wledhormatalks",
  },
];

const hostsData = [
  {
    name: "Amine",
    link: "https://www.linkedin.com/in/amineremache/",
  },
  {
    name: "Mehdi",
    link: "https://www.linkedin.com/in/mehdi-karech/",
  },
  {
    name: "Chems",
    link: "https://www.linkedin.com/in/belkheir/",
  },
];

const selectedTechnologies = [
  TechnologyEnum.COLLECTIVE_INTELLIGENCE,
  TechnologyEnum.INTEGRITY,
  TechnologyEnum.AUTHENTICITY,
  TechnologyEnum.IGNITE_MINDS,
  TechnologyEnum.HIGHEST_STANDARDS,
];
const images = [
  {
    src: "../img/portfolio/wh/1.jpg",
    alt: "cover",
    category: "architecture",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/wh/2.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/wh/3.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/wh/4.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/wh/5.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/wh/6.jpg",
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
                <span className="mil-accent">Tech Podcast</span>
              </p>
              <h2 className="mil-up mil-mb-60">
                Wled Horma: Innovating Tech and Economy via Podcasting
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
                    I had the pleasure of working on the Wled Horma podcast,
                    where I contributed to various aspects of production,
                    including podcast editing, graphic design, short video
                    editing, and copywriting. Wled Horma is a platform that aims
                    to bridge the gap between technology and business, making
                    complex ideas accessible and engaging for a diverse
                    audience. Our podcast, presented by Amine, Chemsou, and
                    Mehdi, delves into the intersections of life, education,
                    technology, and business, focusing on the Algerian context.
                    <br />
                    <br />
                    During my time with Wled Horma, I had the opportunity to
                    contribute to the podcast's visual identity and audio
                    quality, working alongside a talented team to produce
                    engaging content. I focused on tasks like podcast editing,
                    graphic design, short video editing, and copywriting, which
                    helped me grow creatively and technically. By supporting the
                    production of short videos and graphics for social media, I
                    was able to assist in the marketing efforts that contributed
                    to the podcast's growing reach within Algeria and beyond.
                    This experience allowed me to learn from others and gain
                    valuable insights into content creation and digital media.
                    <br />
                    <br />
                    In addition to these tasks, working on Wled Horma allowed me
                    to connect with brilliant individuals who have had a lasting
                    impact on my career as an engineer. This experience not only
                    helped me refine my creative and technical skills but also
                    enabled me to build a network of friends and mentors,
                    fostering a collaborative environment that continues to
                    inspire me as well!
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="mil-timeline-nav">
                    <Hosts hosts={hostsData} />
                    <Links links={linksData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="cse" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="tripx" className="mil-button mil-mb-30">
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
