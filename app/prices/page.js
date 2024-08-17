import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";
const page = () => {
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
                    src="img/icons/services.jpg"
                    alt="Sophie Miller"
                    className="mil-avatar"
                  />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="row">
                  <div className="col-xl-12">
                    <p className="mil-upper mil-mb-30">
                      Services are under
                      <span className="mil-accent"> study...</span>
                    </p>
                    <h2 className="mil-up mil-mb-60">
                      Coming<span className="mil-accent"> Soon!</span>
                    </h2>
                    <p className="mil-mb-30">
                      I'm in the process of crafting a range of services
                      tailored to meet your needs. Whether you're looking for
                      software development, design expertise, or something else,
                      I'll soon have offerings that can help you achieve your
                      goals.
                    </p>
                    <p className="mil-mb-30">
                      Please check back soon for more details. In the meantime,
                      feel free to explore my portfolio or reach out
                      directly—I’d love to hear how I can assist you!
                    </p>
                    <div className="mil-buttons-frame">
                      <Link legacyBehavior href="/contact">
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
                Pricing <span className="mil-accent">table</span>
              </p>
              <h2 className="mil-up mil-mb-30">Pricing and Plan</h2>
              <p className="mil-left-offset">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum <br />
                has been the industry's standard dummy text ever since the
                1500s.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Basic Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      39${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button mil-type-2">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <div className="mil-label mil-upper mil-upper-sm">
                      Popular
                    </div>
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Premium Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      69${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                      <li>Content Writing &amp; Social Media</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Ultimate Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      99${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                      <li>Content Writing &amp; Social Media</li>
                      <li>Server Managment, Security services</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button mil-type-2">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-call-to-action">
            <div className="container">
              <div className="mil-text-center">
                <h3 className="mil-up mil-mb-30">
                  You have alarge <span className="mil-accent">team</span>?
                </h3>
                <p className="mil-mb-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum <br />
                  has been the industry's standard dummy text ever since the
                  1500s.
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="mil-button mil-type-2">Contact me</a>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
