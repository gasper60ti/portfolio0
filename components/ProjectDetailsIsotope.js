"use client";
import { useEffect, useRef, useState } from "react";

const ProjectDetailsIsotope = ({ images = [] }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(async () => {
      const Isotope = (await import("isotope-layout")).default;
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

  return (
    <div className="mil-portfolio-grid mil-mb-60">
      <div className="grid-sizer" />
      {images.map((image, index) => (
        <div className={`mil-grid-item ${image.category}`} key={index}>
          <div className={`mil-project-img ${image.size} mil-mb-30`}>
            <a href={image.src} className="mfp-image">
              <img src={image.src} alt={image.alt} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsIsotope;
