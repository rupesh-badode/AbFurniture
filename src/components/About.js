import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 m-3 bg-subtle" id="about">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="Iprofile.JPG"
              alt="About us"
              className="img-fluid rounded-5 shadow"
            />
          </div>

          {/* Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">About AbFurniture</h2>
            <p>
             I am a passionate furniture designer and craftsman with over <strong> 15 years of hands-on experience</strong> in creating high-quality, custom furniture. From traditional woodwork to modern styles, I specialize in blending functionality with aesthetics to craft pieces that are both beautiful and durable.
              Throughout my career, I’ve worked with a variety of materials and styles, always focusing on fine craftsmanship, customer satisfaction, and lasting value. Whether it’s designing for residential spaces or commercial projects, I take pride in turning ideas into functional works of art.
              My goal is to create furniture that not only fits a space but also tells <strong> a story and stands the test of time.</strong>
            </p>
            <a href="#jhhcontact" className="btn btn-outline-dark mt-3">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
