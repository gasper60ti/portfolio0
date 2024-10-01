"use client";
import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";
import ProjectDetailsIsotope from "@/components/ProjectDetailsIsotope";
import UsedTechnologies from "@/components/UsedTechnologies";
import { TechnologyEnum } from "@/utility/TechnologyEnum";
import ProjectLinks from "@/components/ProjectLinks";
import Contributors from "@/components/Contributors";

const projectLinksData = [
  {
    name: "Documentation",
    link: "https://drive.google.com/drive/folders/1eLmeNnm-4lh1n76RdFg6y7ih-ijBvdUe",
  },
  {
    name: "Repository",
    link: "https://github.com/akramex-dz/S9illo/tree/main",
  },
];

const contributorsData = [
  {
    name: "Akram",
    link: "https://www.linkedin.com/in/mohamed-akram-bennacer-634504204/",
  },
  {
    name: "Zakaria",
    link: "https://www.linkedin.com/in/zakaria-belhadj-28442b20a/",
  },
  {
    name: "Hodhaifa",
    link: "https://www.linkedin.com/in/hodhaifa-benouaklil-b26679235/",
  },
  {
    name: "Houssem",
    link: "https://www.linkedin.com/in/houssem-talbi-07056122a/",
  },
  {
    name: "Mohammed",
    link: "https://www.linkedin.com/in/mohammed-abdelkader-kaddour-572986252/",
  },
  {
    name: "Dr. Sehad ",
    link: "https://www.linkedin.com/in/dr-abdenour-sehad-0b864912a/",
  },
  {
    name: "Dr. Mahfoudi ",
    link: "/404",
  },
];
const selectedTechnologies = [
  TechnologyEnum.REACT_NATIVE,
  TechnologyEnum.ARDUINO,
  TechnologyEnum.RASPBERRY_PI,
  TechnologyEnum.FIREBASE,
  TechnologyEnum.PYTHON,
  TechnologyEnum.SQLITE,
  TechnologyEnum.JAVASCRIPT,
  TechnologyEnum.TRELLO,
  TechnologyEnum.GITHUB,
  TechnologyEnum.VS_CODE,
  TechnologyEnum.OPENWEATHER_API,
];
const images = [
  {
    src: "../img/portfolio/s9illo/1.jpg",
    alt: "cover",
    category: "architecture",
    size: "mil-long",
  },
  {
    src: "../img/portfolio/s9illo/2.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/s9illo/3.png",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/s9illo/4.png",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/s9illo/5.png",
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
                <span className="mil-accent">IOT, Mobile development</span>
              </p>
              <h2 className="mil-up mil-mb-60">
                S9illo: Smart Plant Irrigation System
              </h2>
              <UsedTechnologies technologies={selectedTechnologies} />
            </div>
            <div className="mil-project mil-mb-60">
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    This project was developed as part of our second-year
                    academic work at L'école superieure d'informatique (ESI) in
                    Algeria. The goal was to design and implement an automatic
                    plant irrigation system using IoT technologies, aimed at
                    efficiently managing home gardens or small agricultural
                    spaces. The system monitors soil moisture, temperature, and
                    humidity levels using sensors and controls the irrigation
                    process accordingly. Users can manage the system via a
                    mobile application.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="mil-timeline-nav">
                    <ProjectLinks links={projectLinksData} />
                    <Contributors contributors={contributorsData} />
                  </div>
                </div>
              </div>
              <ProjectDetailsIsotope images={images} />
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="mil-up mil-mb-30">Technical approach</h3>
                </div>
                <div className="col-lg-6">
                  <p>
                    For the frontend of the smart irrigation system, a mobile
                    app was developed using React Native to allow users to
                    control the irrigation system. It includes real-time
                    visualizations of sensor data such as soil moisture,
                    temperature, and humidity, and integrates weather forecasts
                    via the OpenWeather API. Users can switch between automatic,
                    manual, or programmed irrigation modes.
                    <br />
                    <br />
                    The backend of the system comprises a Raspberry Pi connected
                    to multiple Arduinos, each monitoring specific plants. The
                    Raspberry Pi acts as a hub, controlling irrigation based on
                    sensor data and user commands. Local data storage is handled
                    by SQLite, while cloud synchronization is achieved via
                    Firebase. The I2C protocol was used for communication
                    between the Raspberry Pi and Arduinos.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    The mobile app also included features such as QR code
                    authentication for linking accounts and real-time data
                    visualization of environmental factors. Deployment was done
                    locally using a Raspberry Pi setup, with mobile control
                    handled through Firebase.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="stage2cs" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="nutriboost" className="mil-button mil-mb-30">
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
