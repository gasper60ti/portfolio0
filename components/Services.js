const Services = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-10%", right: "20%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "20%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">I might be helpfull at</p>
        <h2 className="mil-up mil-mb-60">Services</h2>
        <div className="row">
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-code" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15 mil-accent">
                  Front-end Development
                </p>
                {/* <p className="mil-upper mil-mb-30">
                  $29 <span className="mil-accent">per hour</span>
                </p> */}
                <p>
                  I create visually appealing and responsive user interfaces,
                  ensuring seamless interaction and an excellent user experience
                  across devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-server" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15 mil-accent">
                  Branding
                </p>
                {/* <p className="mil-upper mil-mb-30">
                  $39 <span className="mil-accent">per hour</span>
                </p> */}
                <p>
                  I design and manage databases while developing robust
                  server-side logic, ensuring secure, efficient, and scalable
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-palette" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15 mil-accent">
                  Graphic Design
                </p>
                {/* <p className="mil-upper mil-mb-30">
                  $49 <span className="mil-accent">per hour</span>
                </p> */}
                <p>
                  I craft compelling visual content, from branding to social
                  media posts to motion graphics, that effectively communicates
                  messages and enhances user engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
