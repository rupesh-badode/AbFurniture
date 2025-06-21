import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // for Bootstrap functionality

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="vh-100 d-flex  bg-light" id='home' >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Text */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h1 className="display-4 fw-bold">Design Your Dream Space</h1>
            <p className="lead">Elegant. Comfortable. Timeless. Explore our latest furniture collections.</p>
            <a href="#shop" className="btn btn-dark px-4 py-2 mt-3">Shop Now</a>
          </div>

          {/* Right Image */}
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="Hero.jpg"
              alt="Furniture"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

