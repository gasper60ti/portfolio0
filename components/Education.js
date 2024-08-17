const Education = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "0%", left: "25%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              <p className="mil-upper mil-mb-30">Certificates</p>
              <h2 className="mil-up mil-mb-60">Education</h2>
              <p>
                Extensive education including Web development, Database
                management, Operating systems, Computer networks, Software
                engineering, and Information systems design..
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/engineer.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  école supérieure d'informatique de SBA
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2022 <span className="mil-accent">to</span> now
                </p>
                <p>
                  5th year computer science engineering student studying courses
                  about advanced databases, machine learning, IoT, semantic web,
                  cloud computing, and GIS
                </p>
              </div>
            </div>
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/prepa.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  école supérieure d'informatique (ex INI) d'alger
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2020 <span className="mil-accent">to</span> 2022
                </p>
                <p>
                  Completed the preparatory cycle in computer science
                  engineering where I got my foundation in the field.
                </p>
              </div>
            </div>
            <div className="mil-icon-box">
              <div className="mil-text-icon">
                <a href="img/bac.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Baccalaureate Degree
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">2020</p>
                <p>
                  Got my scientific baccalaureate degree with an excellent
                  grade, which allowed joining one of the finest schools in the
                  country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
