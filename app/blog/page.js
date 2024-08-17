"use client";
import TretoLayout from "@/layout/TretoLayout";
import { tretoUtility } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Commodo Dolor a Bibendum",
    image: "/img/blog/1.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 2,
    title: "Fringilla Ligula il Pharetra",
    image: "/img/blog/2.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 3,
    title: "Morbi leo risus as porta eget",
    image: "/img/blog/3.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 4,
    title: "Fringilla Ligula il Pharetra",
    image: "/img/blog/1.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
];

const page = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    tretoUtility.pagination(".mil-blog-card", sort, active);
    let list = document.querySelectorAll(".mil-blog-card");
    setstate(tretoUtility.getPagination(list.length, sort));
  }, [active]);

  return (
    <TretoLayout noFooter>
      <div>
        {/* <div className="mil-page"> */}
        {/* TMP VVVVVV */}
        <div className="mil-top-banner">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          {/* TEMP */}
          <div
            className="mil-bg-item mil-bg-item-large"
            style={{ top: "10%", right: "15%", transform: "rotate(-35deg)" }}
          />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-4">
                <div className="mil-about-person mil-mb-30">
                  <img
                    src="img/icons/blog.jpg"
                    alt="Sophie Miller"
                    className="mil-avatar"
                  />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="row">
                  <div className="col-xl-12">
                    <p className="mil-upper mil-mb-30">
                      I'm still writing some{" "}
                      <span className="mil-accent">Great articles </span>
                    </p>
                    <h2 className="mil-up mil-mb-60">
                      Comming<span className="mil-accent"> Soon!</span>
                    </h2>
                    <p className="mil-mb-30">
                      Thank you for visiting my blog! I'm currently working on
                      creating valuable content that I can't wait to share with
                      you. Check back soon for insights on software development,
                      design, and much more.
                    </p>
                    <p className="mil-mb-30">
                      In the meantime, feel free to explore the rest of my
                      portfolio or get in touch with me directly. Stay
                      tuned—exciting things are on the way!
                    </p>
                    <div className="mil-buttons-frame">
                      <Link legacyBehavior href="contact">
                        <a className="mil-button">Contact me!</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TEMP */}
          {/* <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                News and <span className="mil-accent">articles</span>
              </p>
              <h2 className="mil-up mil-mb-30">Latest Blog</h2>
              <p className="mil-left-offset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="mil-blog-list mil-mb-90">
              {blogs.map((blog) => (
                <div className="mil-blog-card mil-mb-60" key={blog.id}>
                  <div className="mil-cover">
                    <Link legacyBehavior href={`/blog/${blog.id}`}>
                      <a>
                        <img src={blog.image} alt="cover" />
                      </a>
                    </Link>
                    <div className="mil-date mil-upper">{blog.date}</div>
                  </div>
                  <div className="mil-title">
                    <div>
                      <p className="mil-upper mil-mb-30">
                        <span className="mil-accent">
                          {blog.tags && blog.tags[0]}
                        </span>
                      </p>
                      <h3 className="mil-up mil-mb-30">{blog.title}</h3>
                    </div>
                    <div>
                      <Link legacyBehavior href={`/blog/${blog.id}`}>
                        <a className="mil-button mil-type-2">Read more</a>
                      </Link>
                    </div>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem ..
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mil-pagination-panel">
              <ul className="mil-pagination-numbers">
                {state &&
                  state.map((s, i) => (
                    <li className={`${active === s ? "mil-active" : ""}`} key={`paginatio-item-${i}`}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s > 9 ? s : `0${s}`}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="mil-pagination-nav">
                <div className="mil-slider-nav mil-mb-30">
                  <a
                    href="#."
                    className="mil-prev mil-reviews-prev"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
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
                  <a
                    href="#."
                    className="mil-next mil-reviews-next"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
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
            </div>
          </div> */}
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
