import React from 'react';
import Illustration from './Images/Illustrations.png'

const HomeSection = () => {
  return (
    <section className="pb-0 pt-25" id="home" style={{ backgroundColor: '#1B262C' }}>
        <div className="container px-0">
          <div className="row align-items-center">
            <div className="col-md-5 col-xl-6 col-xxl-7 order-md-0 text-start">
              <img className="pt-7 pt-md-0" src={Illustration} alt="hero-header" style={{ width: '105%', height: 'auto', marginRight: '20px' }} />
            </div>
            <div className="col-md-7 col-xl-6 col-xxl-5 text-md-start text-center py-8 ps-5 ">
              <h1 className="fw-normal fs-6 fs-xxl-7" style={{ color: 'white' }}>A trusted provider of</h1>
              <h1 className="fw-bolder fs-6 fs-xxl-7 mb-2" style={{ color: 'white' }}>courier services.</h1>
              <p className="fs-1 mb-5" style={{ color: 'white' }}>We deliver your products safely to <br />your home in a reasonable time. </p>
              <a className="btn btn-primary me-2" href="#services" role="button" style={{ backgroundColor: '#0F4C75', borderColor: '#0F4C75' }}>
                Get started<i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomeSection;
