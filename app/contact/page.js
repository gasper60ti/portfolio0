"use client";
import TretoLayout from "@/layout/TretoLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";
import { useState } from "react";
const page = () => {
  const [formData, setFormData] = useState({
    reciever: "Nasreddine",
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.href = "/"; // Redirect to the main page
        }, 3000);
      },
      (error) => {
        console.log("Failed to send email:", error.text);
        toast.error("Failed to send email.");
      }
    );
  };

  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Contact <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let's Talk!</h2>
              <p className="mil-left-offset">
                Whether you're interested in collaborating on a project or
                simply want to connect, feel free to reach out.
                <br />
                I'm always open to discussing new opportunities and ideas. Let's
                make something great together!
              </p>
            </div>
            <div className="mil-contact">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  {/* <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">
                      About <span className="mil-accent">me</span>
                    </p>
                    <p>
                      Margaret Anderson <br />
                      Web and App Developer <br />
                      Miami, FL <br />
                      United States of America
                    </p>
                  </div> */}
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-accent mil-mb-30">Email</p>
                    <p>
                      <a href="mailto:nasr.fliti@gmail.com">
                        nasr.fliti@gmail.com
                      </a>
                      <br />
                      <a href="mailto:n.fliti@esi-sba.dz">n.fliti@esi-sba.dz</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-accent mil-mb-30">Chats</p>
                    <p>
                      <a href="https://t.me/gasper60ti">Telegram</a>
                      <br />
                      <a href="https://wa.me/+213676638317">WhatsApp</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-accent mil-mb-30">Phone</p>
                    <p>
                      <a>+213 540 13 78 42</a>
                      {/* <br />
                      <a>+ 56 6363 06 06</a> */}
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  {/* <form id="cform" className="cform" method="post"> */}
                  <form
                    id="cform"
                    className="cform"
                    method="post"
                    onSubmit={sendEmail}
                  >
                    <label className="mil-upper">
                      Your full name <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="text"
                      className="mil-mb-30"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="mil-upper">
                      Your email address <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="email"
                      className="mil-mb-30"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {/* <label className="mil-upper">
                      Your phone number <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      className="mil-mb-30"
                      name="tel"
                      value={formData.tel}
                      onChange={handleInputChange}
                      required
                    /> */}
                    <label className="mil-upper">
                      Subject <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="text"
                      className="mil-mb-30"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="mil-upper">
                      Tell me your ideas <span className="mil-accent">*</span>
                    </label>
                    <textarea
                      className="mil-mb-30"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="mil-checkbox mil-mb-30">
                      by sending the message you accept the{" "}
                      <a href="#.">terms and conditions</a>.
                      <input type="checkbox" name="checkmark" defaultChecked />
                      <span className="mil-checkmark" />
                    </label>
                    <button type="submit" className="mil-button">
                      Submit
                    </button>
                  </form>

                  <div className="alert-success" style={{ display: "none" }}>
                    <h5>Thanks, your message is sent successfully.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </TretoLayout>
  );
};
export default page;
