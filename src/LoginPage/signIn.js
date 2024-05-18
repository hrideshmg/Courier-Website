import React from "react";
import LoginImage from './Images/login.png';
import Eye from './Icons/eye.png';
import Eye1 from './Icons/eye-off.png';
import Eye2 from './Icons/eye-disabled.svg';

const Login = () => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1B262C', }}>
            <div className="container p-4" style={{ backgroundColor: '#1B262C' }}>
                <div className="row">
                    <div className="col-md-6" style={{ backgroundColor: '#1B262C' }}>
                        <img src={LoginImage} className="mw-25% mh-" alt="loginPage icon" />
                    </div>
                    <div className="col-md-6" style={{ backgroundColor: '#1B262C' }}>
                        <h1 id="headertext" style={{ color: 'white' }} className="text-center">Login</h1>
                        <form action="">
                            <p id="text" style={{ color: 'white' }}>Email</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" style={{ border: 'none', color: 'white' }} />
                            </div>
                            <p id="text" style={{ color: 'white' }}>Password</p>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" style={{ color: 'white', border: 'none', borderRadius: '5px 0 0 5px' }} />
                                <div className="input-group-append">
                                    <span className="input-group-text" style={{ backgroundColor: '#0F4C75', border: 'none', borderRadius: '0 5px 5px 0', height: '38px' }}>
                                        <img onClick={() => togglePasswordVisibility()} id="eyeIcon" src={Eye} height="100%" width="auto" alt="eyeButton" />
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center" style={{ backgroundColor: '#1B262C' }}>
                            <button type="submit" className="auth-btn" style={{ borderRadius: '10px' }}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = Eye; 
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = Eye1; 
    }
};

export default Login;
