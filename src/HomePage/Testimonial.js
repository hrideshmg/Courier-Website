import React from 'react';
import Quote from './Images/quote.png'
import avatar from './Images/avatar.png'

const Testimonial = () => {
    return (
        <section className="py-7" style={{ backgroundColor: '#1B262C' }}>
            <div className="container-fluid">
                <div className="row flex-center">
                    <div
                        className="bg-holder bg-size"
                        style={{
                            backgroundImage: {Quote},
                            backgroundPosition: 'top',
                            backgroundSize: 'auto',
                            marginLeft: '-270px',
                            marginTop: '-45px'
                        }}
                    ></div>
                    <div className="col-md-8 col-lg-5 text-center">
                        <h5 style={{ color: 'white' }}>TESTIMONIAL</h5>
                        <h2 style={{ color: 'white' }}>Our Awesome Clients</h2>
                    </div>
                </div>
                <div className="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row h-100">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row h-100">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#3282B8' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row h-100">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#090d17' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#090d17' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card h-100 card-span p-3">
                                        <div className="card-body">
                                            <h5 style={{ color: '#090d17' }}>Fantastic service!</h5>
                                            <p style={{ color: '#172025' }}>
                                                I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.
                                            </p>
                                            <div className="d-xl-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                    <i className="fas fa-star text-primary me-1"></i>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                                                        <p className="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row px-3 px-md-0 mt-6">
                        <div className="col-12 position-relative">
                            <ol className="carousel-indicators">
                                <li className="active" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"></li>
                                <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
