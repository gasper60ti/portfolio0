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
    link: "https://github.com/gasper60ti/tripx_projet2cs_front.git",
  },
  {
    name: "Backend part",
    link: "https://github.com/gasper60ti/tripx_projet2cs_back.git",
  },
  {
    name: "Docs",
    link: "https://drive.google.com/drive/folders/1eLmeNnm-4lh1n76RdFg6y7ih-ijBvdUe",
  },
];

const contributorsData = [
  {
    name: "Ilyes",
    link: "https://www.linkedin.com/in/ilyas-benhammadi/",
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
    name: "Dr. Bedjaoui",
    link: "https://www.linkedin.com/in/bedjaoui-mohammed/",
  },
];

const selectedTechnologies = [
  TechnologyEnum.NEXTJS,
  TechnologyEnum.REACT,
  TechnologyEnum.TYPESCRIPT,
  TechnologyEnum.SHADCN,
  TechnologyEnum.TAILWINDCSS,
  TechnologyEnum.STRIPE,
  TechnologyEnum.SPRING,
  TechnologyEnum.NESTJS,
  TechnologyEnum.MONGODB,
  TechnologyEnum.POSTGRESQL,
  TechnologyEnum.REDIS,
  TechnologyEnum.KAFKA,
  TechnologyEnum.DOCKER,
  TechnologyEnum.GITLAB,
  TechnologyEnum.NGINX,
  TechnologyEnum.GOOGLE_CLOUD,
];
const images = [
  {
    src: "../img/portfolio/tripx/1.jpg",
    alt: "cover",
    category: "architecture",
    size: "mil-long",
  },
  {
    src: "../img/portfolio/tripx/2.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/tripx/3.jpg",
    alt: "cover",
    category: "sustainable",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/tripx/4.jpg",
    alt: "cover",
    category: "interior",
    size: "mil-square",
  },
  {
    src: "../img/portfolio/tripx/5.jpg",
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
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    As part of the pluridisciplinary project of the 4th year of
                    our school, my team and I have created a digital solution
                    called TripX. TripX is a micro-services based booking
                    platform, for travel and hike agencies.
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
                    For the frontend, the platform is composed of the client
                    website, and 3 management dashboards. The client website
                    allows users to book trips and hikes, and manage their
                    bookings. The admin dashboard allow the admin to manage the
                    users, travel and hike agencies. Each agency has a dashboard
                    interface that allows the travel/hike agent to manage the
                    trips and hikes, bookings and reviews. For the backend, the
                    architecture is composed of 10 micro services, all
                    subscribed to a kafka broker.
                    <br />I was responsible for the UX design, the frontend part
                    of the website and I too contributed to the architecture
                    design, and the development of the entire platform.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    The frontend part was developed using NextJS, Shadcn/ui and
                    Tailwind CSS, and the backend, using SpringBoot, NestJS,
                    MongoDB, PostgreSQL, Redis, Apache Kafka and Stripe for
                    online payments. This project was my first micro services
                    project, and it was a great opportunity to learn more about
                    Spring, NestJS, CQRS and event-driven architectures.
                    <br />
                    For the DevOps part, the entire infrastructure was deployed
                    on a GCP virtual machine. We used Gitlab CI/CD to automate
                    code deliveries, and Docker/Docker-compose to orchestrate
                    the containers with an Nginx reverse proxy.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="#" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="#" className="mil-button mil-mb-30">
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
