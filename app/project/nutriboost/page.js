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
    name: "Frontend part",
    link: "https://github.com/hakimalem/nutriBoost/",
  },
  {
    name: "Backend part",
    link: "https://github.com/abdelaliichou/Dragos-backend",
  },
  {
    name: "Docs",
    link: "https://drive.google.com/drive/folders/1hfJCvXQUwDerOZTVia5w7ftsrm7g77F4",
  },
  {
    name: "Presentation",
    link: "https://docs.google.com/presentation/d/1ogU8perj3-iq7mqmeuDIs51xpHQig3tD/edit?usp=drive_link&ouid=114416011124728949375&rtpof=true&sd=true",
  },
];

const contributorsData = [
  {
    name: "Abdelali",
    link: "https://www.linkedin.com/in/abdelali-ichou-60ab8222a/",
  },
  {
    name: "Hakim",
    link: "https://www.linkedin.com/in/hakim-allem/",
  },
  {
    name: "Moustafa",
    link: "https://www.linkedin.com/in/zahdour-moustafa/",
  },
  {
    name: "Chiheb",
    link: "https://www.linkedin.com/in/chiheb-sakhraoui/",
  },
  {
    name: "Dr. Bedjaoui",
    link: "https://www.linkedin.com/in/bedjaoui-mohammed/",
  },
];
const selectedTechnologies = [
  TechnologyEnum.REACT,
  TechnologyEnum.TAILWINDCSS,
  TechnologyEnum.NODE,
  TechnologyEnum.EXPRESS,
  TechnologyEnum.MONGODB,
  TechnologyEnum.JAVASCRIPT,
  TechnologyEnum.UML,
  TechnologyEnum.FIGMA,
  TechnologyEnum.DRAW_IO,
  TechnologyEnum.CLICKUP,
  TechnologyEnum.GITHUB,
  TechnologyEnum.POSTMAN,
  TechnologyEnum.JAVA_MOBILE,
];
const images = [
  {
    src: "../img/portfolio/nutriboost/1.jpg",
    alt: "cover",
    category: "architecture",
    size: "mil-long",
  },

  {
    src: "../img/portfolio/nutriboost/2.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/nutriboost/3.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/nutriboost/4.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/nutriboost/5.jpg",
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
                <span className="mil-accent">
                  Frontend & Backend & Project management
                </span>
              </p>
              <h2 className="mil-up mil-mb-60">
                NutriBoost: E-commerce Platform for Dietary Products
              </h2>
              <UsedTechnologies technologies={selectedTechnologies} />
            </div>
            <div className="mil-project mil-mb-60">
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    NutriBoost is an e-commerce solution developed during a
                    three-month academic project in our third year at the Higher
                    School of Computer Science. The platform is designed to sell
                    dietary and orthopedic nutrition products. It includes
                    features such as product listing, searching, ordering,
                    payment processing, and a management system for both
                    customers and administrators.
                    <br />
                    The project followed the Scrum methodology, with a focus on
                    iterative development and task management through sprints.
                    Risk management, project visualization tools like Gantt
                    charts and PERT charts, and collaboration tools were also
                    key aspects of the project management process.
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
                    For the frontend, NutriBoost was developed using React.js
                    and Tailwind CSS to ensure a responsive and user-friendly
                    interface for both the web and mobile applications. The
                    platform supports browsing, filtering, and searching for
                    products, and includes features like product
                    recommendations, reviews, and a wishlist. Additionally, the
                    admin panel allows efficient management of products, orders,
                    and users. The backend, built with Node.js and Express.js,
                    handles user authentication, payment processing, and the
                    order lifecycle. MongoDB is utilized for storing user and
                    product data.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Project management was structured using ClickUp, allowing
                    for effective task division, sprint planning, and backlog
                    management. We used tools like UML, PERT, and Gantt charts
                    to monitor progress and identify potential challenges,
                    ensuring deadlines were met. The risk matrix enabled
                    proactive identification of potential roadblocks.
                    <br />
                    <br />
                    Key Features of the project included a customer service
                    module, purchase history management, product recommendation
                    systems, parcel tracking, reviews, loyalty clubs, and an
                    admin panel. Notifications, push alerts, and social media
                    sharing were also implemented to enhance customer
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="s9illo" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="cse" className="mil-button mil-mb-30">
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
