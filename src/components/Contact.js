import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';


const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.AOS && window.AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <section className="bg-light py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-down">Contact Me</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6" data-aos="fade-right">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" name="user_name" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="user_email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" className="form-control" id="message" rows="4" placeholder="Type your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {isSent && <p className="mt-3 text-success">Message sent successfully!</p>}
            </form>
          </div>

          {/* Social Links */}
          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <h5>Connect with Me</h5>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a href="mailto:abfurniture236@gmail.com" className="text-dark" target="abfurniture236@gmail.com" rel="noopener noreferrer">
                <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a href="https://wa.me/917489709546" className="text-success" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@ABfurnitureindore7482" className="text-danger" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/ashokbarwalbaoddh/" className="text-danger" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
