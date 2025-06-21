import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videoData = [
  { id: 1, title: 'Woodworking Tips', url: 'https://www.youtube.com/embed/UXZXcWIpXZw?si=mUtKj0J-rhun1uWV' },
  { id: 2, title: 'How to Style Furniture', url: 'https://www.youtube.com/embed/JxoLICDYvq0?si=SWgba1ZH6Mle2B5K&amp;start=22' },
];

export default function Videos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="videos" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">Watch Our Latest Videos</h2>
        <div className="row">
          {videoData.map((video, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={video.id} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="ratio ratio-16x9 shadow rounded">
                <iframe
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 fw-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

