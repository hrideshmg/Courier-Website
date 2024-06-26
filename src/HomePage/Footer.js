import React from "react";

const Footer = () => {
    return (
        <section style={{'background-color': '#172025'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="fw-bold text-white">Get an update every week</h2>
                    <p class="text-300">We ensure that your product is delivered in the safest possible<br />manner, at the correct location, at the right time.</p>
                </div>
                <div class="col-lg-6">
                    <h5 style={{'color': 'white'}}>SUBSCRIBE TO NEWSLETTER</h5>
                    <form class="row gx-2 gy-2 align-items-center" id="subscribeForm">
                        <div class="col">
                            <div class="input-group-icon">
                                <label class="visually-hidden" for="inputEmailCta">Address</label>
                                <input class="form-control input-box form-quriar-control text-light" id="inputEmailCta" type="email" placeholder="Enter your mail" />
                            </div>
                        </div>
                        <div class="d-grid gap-3 col-sm-auto">
                            <button class="btn btn-danger" style={{'background-color': '#3282B8','border-color': '#3282B8'}} type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Footer;