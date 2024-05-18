import React from 'react';
import './App.css'; // Add your CSS imports here

import founderImage from './Images/guy.jpeg';
import mapImage from './Images/Map.png';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterExtension from './FooterExtension'
const AboutSection = () => (
  <>
    <section style={{ backgroundColor: '#172025' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-section" style={{ padding: '100px 0', textAlign: 'center' }}>
              <h1 style={{ color: 'white', fontSize: '75px' }}>About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: '#1B262C' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="display-4 mb-4" style={{ color: 'white' }}>Perfecting the art of delivery since 1990</h2>
            <p className="lead" style={{ color: 'white' }}>We are dedicated to providing reliable and efficient courier services to our customers. With years of experience in the industry, we ensure that your packages reach their destination safely and on time.</p>
            <p className="lead" style={{ color: 'white' }}>Our team consists of skilled professionals who are committed to delivering exceptional service and exceeding your expectations. Customer satisfaction is our top priority, and we strive to provide personalized solutions to meet your specific needs.</p>
            <p className="lead" style={{ color: 'white' }}>Whether you need to send documents, parcels, or freight, you can trust Courier Website to handle your shipments with care and professionalism. Thank you for choosing us for all your delivery needs!</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const TimelineItem = ({ year, title, description }) => (
  <li>
    <div style={{ color: 'white' }}>{year}</div>
    <div className="timeline-panel">
      <div className="timeline-heading text-center">
        <h4 className="timeline-title text-white">{title}</h4>
      </div>
      <div className="timeline-body">
        <p className="text-center text-white">{description}</p>
      </div>
    </div>
  </li>
);

const HistorySection = () => (
  <section style={{ backgroundColor: '#172025' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4 text-white">Our History</h1>
          <ul className="timeline">
            <TimelineItem year="1990" title="Company Founded" description="Swift Send is founded by John Smith, a former delivery driver with a vision to provide reliable and efficient courier services to businesses and individuals." />
            <TimelineItem year="1995" title="Expansion" description="Swift Send expands its operations to neighboring cities, establishing a reputation for timely deliveries and excellent customer service." />
            <TimelineItem year="2000" title="Technology Integration" description="Swift Send adopts advanced tracking systems and online booking platforms, allowing customers to track their shipments in real-time and conveniently schedule deliveries." />
            <TimelineItem year="2005" title="Fleet Expansion" description="With growing demand, Swift Send invests in expanding its fleet of vehicles, including vans, trucks, and motorcycles, to accommodate a wider range of delivery needs." />
            <TimelineItem year="2010" title="International Expansion" description="Swift Send expands its services internationally, partnering with trusted logistics providers to offer seamless cross-border shipping solutions to clients worldwide." />
            <TimelineItem year="2015" title="Green Initiatives" description="Swift Send launches eco-friendly initiatives, such as using electric vehicles for urban deliveries and implementing paperless invoicing, to reduce its environmental footprint and promote sustainability." />
            <TimelineItem year="2020" title="Pandemic Response" description="During the COVID-19 pandemic, Swift Send adapts its operations to meet increased demand for contactless deliveries and implements strict safety protocols to protect both customers and employees." />
            <TimelineItem year="2025 (Projected)" title="Technological Innovations" description="Swift Send continues to innovate with the adoption of drone delivery technology for faster and more efficient deliveries in urban areas. Additionally, AI-powered route optimization algorithms are implemented to further streamline operations and reduce delivery times." />
            <TimelineItem year="2030 (Projected)" title="Global Leader" description="Swift Send emerges as a global leader in the courier industry, known for its innovative solutions, commitment to customer satisfaction, and sustainable business practices. The company continues to expand its reach and influence, shaping the future of logistics worldwide." />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FounderSection = () => (
  <section style={{ backgroundColor: '#1B262C', padding: '50px 0' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4" style={{ color: 'white' }}>About Our Founder</h2>
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src={founderImage} alt="Founder Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-8">
              <h3 style={{ color: 'white' }}>John Smith</h3>
              <p style={{ color: 'white' }}>John Smith is the visionary founder of Swift Send. With years of experience as a delivery driver, John recognized the need for reliable and efficient courier services. In 1990, he founded Swift Send with a mission to provide top-notch delivery solutions to businesses and individuals.</p>
              <p style={{ color: 'white' }}>Under John's leadership, Swift Send has grown from a small local operation to an internationally recognized courier service. John's commitment to excellence and innovation has driven Swift Send's success and continues to inspire the company's growth and development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const AboutUs = () => (
  <>
    <AboutSection />
    <HistorySection />
    <FounderSection />
    <Footer/>
    <FooterExtension/>
  </>
);

export default AboutUs;
