import Link from "next/link";

const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-25%", right: "15%", transform: "rotate(-35deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4">
            <div className="mil-about-person mil-mb-30">
              <img
                src="img/faces/1.jpg"
                alt="Sophie Miller"
                className="mil-avatar"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row">
              <div className="col-xl-12">
                <p className="mil-upper mil-mb-30">
                  <span className="mil-accent">Get to know me </span>via this
                  section!
                </p>
                <h2 className="mil-up mil-mb-60">
                  They call me<span className="mil-accent"> Nasro...</span>
                </h2>
                <p>
                  Creative engineering student with a strong passion for
                  technology and design. Currently in my fifth year at Ecole
                  Superieure d'Informatique de Sidi Bel-Abbes, Algeria, where I
                  developed a solid foundation in computer science principles
                  and programming methodologies.
                </p>
                <p className="mil-mb-30">
                  My journey in the field has been marked by hands-on experience
                  in software development, big data analysis, and UI/UX design,
                  complemented by my role as a Junior Web developer.
                </p>
                <p className="mil-mb-30">
                  My diverse skill set is further enriched by some leadership
                  roles in student organizations, and projects where I
                  successfully managed developement and marketing teams, driving
                  significant growth and engagement to the local community...
                </p>
                <div className="mil-buttons-frame">
                  <Link
                    legacyBehavior
                    href="https://doc-0g-04-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/55vmnmcq35ab1uickl3llgmmbd112d4r/tuaveaudbcupf583632b9gq494otnp15/1723414050000/3/*/APznzaY4pS6EL7P7dy055RJtD4XDUZG6CNjSjTG_DgLh0rcp14S9yyc-9jesS2Lx-PrBJPqLnW_UtHsqfOUm_XthgHgIwB6tCz9zqpee5MoaJ8QPZFllWS_0KNK_GCXH1sYBo3XpYBRC4x4eF2O12kUNqYOrjcuvrsiWnWUZd0t5AK6hWI8jXNQ-na-m9YtEhQ7s2brkORplob2xo4mdoMMm9Rc-LdDD7C6LU5toerGN6_YbGa8PiTvus9ooT3lE2BWxXIthjy_uALfumCz4VBzSRjOje0cZhzOl_i3iOnCzJjGxKaWfgNeYrAo7_QdV_blZO_ttHkKZYBTlXt2Dlp3_p3avuxOrU3APlJkcw7GbOBrERabep7tK0wmdfNwH4tynVkzAukJ7PmpjgpsDjcShWTVr7dWGAA==?authuser"
                  >
                    <a className="mil-button">Download CV</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

export const About2 = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">
                  <div className="mil-about-person-2 mil-mb-30">
                    <img
                      src="img/faces/clients/4.jpg"
                      alt="Sophie Miller"
                      className="mil-avatar"
                    />
                  </div>
                  <p className="mil-upper mil-mb-30">
                    Graphic <span className="mil-accent">and</span> Web
                    Developer
                  </p>
                  <h2 className="mil-up mil-mb-30">Devies Byrne</h2>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <img
                          src="img/signature.png"
                          alt="signature"
                          className="mil-signature"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
