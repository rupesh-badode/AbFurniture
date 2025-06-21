import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default  function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-dark text-white pt-5 pb-3" data-aos="fade-up">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">abFurniture</h5>
            <p>Crafting timeless furniture for modern living. Stylish, sustainable & smart.</p>
            <h6>01 Ahiliya nagar, scheme no.51 , Indore ,MP India </h6>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#shop" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p href='mailto:abfuriture236@gmail.com'>Email: abfuriture236@gmail.com</p>
            <p>Phone:+91 7489709546</p>
            <div>
              <a href="" className="text-white me-3"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/ashokbarwalbaoddh/" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="" className="text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; 2025 abFurniture. All rights reserved.</p>
        <p>Developed by Rupesh <a href='https://e-portflio.netlify.app/'>contact us</a> </p>
      </div>
    </footer>
  );
}

