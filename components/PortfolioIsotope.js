"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".mil-grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "mil-current" : "");
  return (
    <Fragment>
      <div className="mil-filter">
        <div className="container">
          <ul className="mil-filter-links mil-mb-30">
            <li>
              <a
                href="#"
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`c-pointer ${activeBtn("fil-startups")}`}
                onClick={handleFilterKeyChange("fil-startups")}
                data-filter=".fil-startups"
              >
                Startups
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".fil-analysis"
                className={`c-pointer ${activeBtn("fil-analysis")}`}
                onClick={handleFilterKeyChange("fil-analysis")}
              >
                Analysis
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".fil-graphics"
                className={`c-pointer ${activeBtn("fil-graphics")}`}
                onClick={handleFilterKeyChange("fil-graphics")}
              >
                Graphics
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".fil-others"
                className={`c-pointer ${activeBtn("fil-others")}`}
                onClick={handleFilterKeyChange("fil-others")}
              >
                Others
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="mil-portfolio-grid mil-mb-30">
          <div className="grid-sizer" />
          <div className="mil-grid-item fil-startups">
            <Link legacyBehavior href="/project/tripx">
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/tripx/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">
                    Startup project
                  </p>
                  <h4 className="mil-up">TripX</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-analysis">
            <Link legacyBehavior href="/project/stage2cs">
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/stage2cs/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">
                    Analysis Project
                  </p>
                  <h4 className="mil-up">Costumer reviews analysis</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-startups">
            <Link legacyBehavior href="/project/s9illo">
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/s9illo/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">
                    Startup project
                  </p>
                  <h4 className="mil-up">S9illo</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-startups">
            <Link legacyBehavior href="/project/nutriboost">
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/nutriboost/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">
                    Startup project
                  </p>
                  <h4 className="mil-up">NutriBoost</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-others">
            <Link legacyBehavior href="/project/cse">
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/cse/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-search-plus" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">
                    Students activities
                  </p>
                  <h4 className="mil-up">CSE Club</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-graphics">
            <Link legacyBehavior href="/project/wh">
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/wh/main.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-search-plus" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Graphics</p>
                  <h4 className="mil-up">Wled Horma Podcast</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="mil-pagination-panel">
          <ul className="mil-pagination-numbers">
            <li className="mil-active">
              <a href="#.">01</a>
            </li>
            <li>
              <a href="#.">02</a>
            </li>
            <li>
              <a href="#.">03</a>
            </li>
          </ul>
          <div className="mil-pagination-nav">
            <div className="mil-slider-nav mil-mb-30">
              <a href="#." className="mil-prev mil-reviews-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a href="#." className="mil-next mil-reviews-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
            <div className="mil-reviews-pagination mil-upper mil-mb-30" />
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
