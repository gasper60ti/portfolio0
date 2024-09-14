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
    link: "https://drive.google.com/file/d/1RoEwJYJvzExrRo_Ua0sbS6OCI_HtCuhm",
  },
  {
    name: "Dataset",
    link: "https://www.kaggle.com/datasets/jiashenliu/515k-hotel-reviews-data-in-europe",
  },
];

const contributorsData = [
  {
    name: "Mohammed El Amin",
    link: "https://www.linkedin.com/in/mohammed-el-amin-oukebdane-90181b1b4/",
  },
  {
    name: "Achour",
    link: "https://www.linkedin.com/in/achour-ouahab/",
  },
];
const selectedTechnologies = [
  TechnologyEnum.REACT,
  TechnologyEnum.TAILWINDCSS,
  TechnologyEnum.ELK,
  TechnologyEnum.GPT_3_5,
  TechnologyEnum.KAGGLE_DATASETS,
  TechnologyEnum.UBUNTU,
  TechnologyEnum.VS_CODE,
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
                <span className="mil-accent">Internship project</span>
              </p>
              <h2 className="mil-up mil-mb-60">
                Hotel Reviews Sentiment Analysis
              </h2>
              <UsedTechnologies technologies={selectedTechnologies} />
            </div>
            <div className="mil-project mil-mb-60">
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    This project was carried out during my fourth-year
                    internship at Algiers Marriott Hotel Bab-Ezzouar. The aim
                    was to develop a digital solution to analyze customer
                    reviews of hotels using Big Data tools. The system collects
                    customer reviews, performs sentiment analysis using GPT-3.5,
                    and generates action plans for service improvement based on
                    the analysis.
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
                    For the frontend, a user interface was developed using
                    React.js and Tailwind CSS, featuring dashboards that
                    visualize data insights and sentiment analysis results.
                    Kibana was employed to generate visualizations, including
                    bar graphs, pie charts, and geographical maps.
                    <br />
                    <br />
                    The backend and big data architecture was built using the
                    ELK Stack (Elasticsearch, Logstash, Kibana, and Filebeat),
                    which collects, processes, and stores large datasets of
                    hotel reviews. The data was enriched via Logstash, analyzed
                    with Elasticsearch, and visualized through Kibana
                    dashboards.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Sentiment analysis was conducted using GPT-3.5 to extract
                    key insights from customer reviews, identifying strengths,
                    weaknesses, and overall sentiment. JSON-based action plans
                    were generated to suggest service improvements.
                    <br />
                    Initially, we aimed to source data from APIs like
                    TripAdvisor and Booking.com, but due to access limitations,
                    we used Kaggle datasets containing over 500,000 reviews. The
                    project faced challenges with API access and web scraping,
                    which were resolved by switching to publicly available
                    datasets.
                    <br />
                    The system was deployed on an Ubuntu virtual machine with
                    Elasticsearch and Kibana, and Visual Studio Code was used
                    for development and dependency management with npm.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="tripx" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="s9illo" className="mil-button mil-mb-30">
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
