import React, { useState } from "react";

import ill from "./Images/ill2.png";

const CallbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    setNameError(name === "");
    setEmailError(email === "" || !isValidEmail(email));
    setMessageError(message === "");

    if (name && isValidEmail(email) && message) {
      // Form submission logic here
      console.log("Form submitted");
    }
  };

  return (
    <section style={{ backgroundColor: "#1B262C" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <img src={ill} alt="..." />
            <h5 style={{ color: "white" }}>REQUEST A CALLBACK</h5>
            <h2 style={{ color: "white" }}>We will contact in the shortest time.</h2>
            <p className="text-muted" style={{ color: "white" }}>
              Monday to Friday, 9am-5pm.
            </p>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4">
            <form className="row" id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label visually-hidden" htmlFor="inputName">
                  Name
                </label>
                <input
                  className="form-control form-quriar-control"
                  style={{ color: "white", caretColor: "white" }}
                  id="inputName"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && (
                  <div id="nameError" className="invalid-feedback" style={{ display: "block" }}>
                    Please enter your name.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label visually-hidden" htmlFor="inputEmail">
                  Email
                </label>
                <input
                  style={{ color: "white", caretColor: "white" }}
                  className="form-control form-quriar-control"
                  id="inputEmail"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <div id="emailError" className="invalid-feedback" style={{ display: "block" }}>
                    Please enter a valid email address.
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label className="form-label visually-hidden" htmlFor="validationTextarea">
                  Message
                </label>
                <textarea
                  style={{ color: "white", caretColor: "white", height: "150px" }}
                  className="form-control form-quriar-control is-invalid border-400"
                  id="validationTextarea"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                {messageError && (
                  <div id="messageError" className="invalid-feedback" style={{ display: "block" }}>
                    Please enter a message.
                  </div>
                )}
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#3282B8", borderColor: "#3282B8" }}
                  type="submit"
                >
                  Send Message<i className="fas fa-paper-plane ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;
