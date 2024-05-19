import React, { useState } from "react";
import LoginImage from "./Images/login.png";
import Eye from "./Icons/eye.png";
import EyeDisabled from "./Icons/eye-disabled.svg";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePasswords = (e) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      e.preventDefault();
    }
  };

  const callAPI = async (email, password) => {
    const statusDisplay = document.getElementById("status-display");
    const response = await fetch("http://localhost:9000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status == 200) {
      statusDisplay.textContent = "Sign Up Successful!";
    } else if (response.status == 400) {
      statusDisplay.textContent = "User with this email already exists!";
    } else {
      statusDisplay.textContent = `Server Error: ${await response.json()}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    callAPI(email, password);
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1B262C",
      }}
    >
      <div style={{ height: "100%" }}>
        <div className="bg-holder bg-size" style={{ backgroundColor: "#1B262C", height: "100%" }}>
          <div className="container p-4" style={{ width: "100%", backgroundColor: "#1B262C" }}>
            <div className="row">
              <div className="col-md-6">
                <img src={LoginImage} className="mw-25 mh-" alt="Login Page Icon" />
              </div>
              <div className="col-md-6">
                <h1 id="headertext" className="text-center" style={{ color: "white" }}>
                  Sign Up
                </h1>
                <form action="" onSubmit={handleSubmit}>
                  <p id="email" style={{ color: "white" }}>
                    Email
                  </p>
                  <div className="input-group mb-3">
                    <input
                      id="email_input"
                      required
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      style={{ color: "white", border: "none" }}
                    />
                  </div>
                  <p id="text" style={{ color: "white" }}>
                    Password
                  </p>
                  <div className="input-group mb-3">
                    <input
                      required
                      type={passwordVisible ? "text" : "password"}
                      className="form-control"
                      id="password_input"
                      placeholder="Password"
                      style={{ color: "white", border: "none" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        style={{
                          backgroundColor: "#0F4C75",
                          border: "none",
                          borderRadius: "0px 5px 5px 0px",
                          height: "38px",
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        <img
                          id="eyeIconPasscode"
                          src={passwordVisible ? EyeDisabled : Eye}
                          height="100%"
                          width="auto"
                          alt={passwordVisible ? "Hide Password" : "Show Password"}
                        />
                      </span>
                    </div>
                  </div>
                  <p id="text" style={{ color: "white" }}>
                    Confirm Password
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      className="form-control"
                      id="confirmPasswordInput"
                      placeholder="Password"
                      style={{ color: "white", border: "none" }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        style={{
                          backgroundColor: "#0F4C75",
                          border: "none",
                          borderRadius: "0px 5px 5px 0px",
                          height: "38px",
                        }}
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        <img
                          id="eyeIconConfirmPasscode"
                          src={confirmPasswordVisible ? EyeDisabled : Eye}
                          height="100%"
                          width="auto"
                          alt={confirmPasswordVisible ? "Hide Password" : "Show Password"}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="pt-5 d-flex justify-content-center">
                    <button
                      type="submit"
                      onClick={validatePasswords}
                      className="auth-btn pl-5 pr-5 pt-1 pb-1"
                      style={{ width: "35%", borderRadius: "10px" }}
                    >
                      Sign-Up
                    </button>
                  </div>
                </form>
                <div className="d-flex m-4" style={{ justifyContent: "center" }}>
                  <p id="status-display" style={{ color: "white" }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
