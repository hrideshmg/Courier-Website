import { useNavigate } from "react-router-dom";
import React from "react";
import LoginImage from "./Images/login.png";
import Eye from "./Icons/eye.png";
import Eye1 from "./Icons/eye-off.png";

const Login = () => {
  const navigate = useNavigate();

  const callAPI = async (email, password) => {
    const statusDisplay = document.getElementById("status-display");
    const response = await fetch("http://localhost:9000/user/login", {
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
      statusDisplay.textContent = "Login Successful!";
      navigate("/order");
    } else if (response.status == 403) {
      statusDisplay.textContent = "Invalid Credentials!";
    } else {
      statusDisplay.textContent = `Server Error: ${await response.text()}`;
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
        paddingTop: "20px",
      }}
    >
      <div className="container p-4" style={{ backgroundColor: "#1B262C", height: "100%" }}>
        <div className="row">
          <div className="col-md-6" style={{ backgroundColor: "#1B262C" }}>
            <img src={LoginImage} className="mw-25% mh-" alt="loginPage icon" />
          </div>
          <div className="col-md-6" style={{ backgroundColor: "#1B262C" }}>
            <h1 id="headertext" style={{ color: "white" }} className="text-center">
              Login
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <p id="text" style={{ color: "white" }}>
                Email
              </p>
              <div className="input-group mb-3">
                <input
                  required
                  id="email_input"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  style={{ border: "none", color: "white" }}
                />
              </div>
              <p id="text" style={{ color: "white" }}>
                Password
              </p>
              <div className="input-group mb-3">
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password_input"
                  placeholder="Password"
                  style={{ color: "white", border: "none", borderRadius: "5px 0 0 5px" }}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#0F4C75", border: "none", borderRadius: "0 5px 5px 0", height: "38px" }}
                  >
                    <img
                      onClick={() => togglePasswordVisibility()}
                      id="eyeIcon"
                      src={Eye}
                      height="100%"
                      width="auto"
                      alt="eyeButton"
                    />
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center" style={{ backgroundColor: "#1B262C" }}>
                <button type="submit" className="auth-btn" style={{ borderRadius: "10px" }}>
                  Log in
                </button>
              </div>
            </form>
            <div className="d-flex m-4" style={{ justifyContent: "center" }}>
              <p id="status-display" style={{ color: "white" }}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById("password_input");
  const eyeIcon = document.getElementById("eyeIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = Eye;
  } else {
    passwordInput.type = "password";
    eyeIcon.src = Eye1;
  }
};

export default Login;
