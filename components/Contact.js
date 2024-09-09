"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    reciever: "Nasreddine",
    name: "",
    email: "",
    tel: "",
    subject: "No subject (used homepage contact)",
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
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">me</span>
        </p>
        <h2 className="mil-up mil-mb-60">Let's Talk!</h2>
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Email</p>
              <p>
                <a href="mailto:nasr.fliti@gmail.com">nasr.fliti@gmail.com</a>
                <br />
                <a href="mailto:n.fliti@esi-sba.dz">n.fliti@esi-sba.dz</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>
                <a>+213 540 13 78 42</a>
                {/* <br />
                <a href="tel+5663630606">+ 56 6363 06 06</a> */}
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <form
              id="cform-two"
              className="cform-two"
              onSubmit={sendEmail}
              method="post"
            >
              <div className="row">
                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-6">
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
                </div>
                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>
                  <textarea
                    className="mil-mb-30"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <label className="mil-checkbox mil-mb-30">
                    by sending, I accept the{" "}
                    <a href="#.">terms and conditions</a>.
                    <input type="checkbox" name="checkmark" defaultChecked="" />
                    <span className="mil-checkmark" />
                  </label>
                  <button type="submit" className="mil-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <h5>Thanks, your message is sent successfully.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
