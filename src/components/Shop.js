import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const productData = [
  { id: 1, name: 'Elegant Chair', img: '/Products/chair.jpg' },
  { id: 2, name: 'Modern Sofa', img: '/Products/Sofa.jpeg'},
  { id: 3, name: 'Wooden Table', img: '/Products/bath.jpeg' },
  { id: 4, name: 'Luxury Bed', img: '/Products/bed.jpg' },
  { id: 5, name: 'Bookshelf', img: '/Products/bookself.jpg' },
  { id: 6, name: 'Office Chair', img: '/Products/office.jpg' },
  { id: 7, name: 'TV Stand', img: '/Products/Tv.jpeg' },
  { id: 8, name: 'Dining Set', img: '/Products/dining.jpg' },
];

function Shop() {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const showMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <section id="shop" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">Our Products</h2>
        <div className="row">
          {productData.slice(0, visible).map((product, idx) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={product.id}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="card h-100 shadow-sm">
                <img src={product.img} className="card-img-top" height={200} width={200} alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">High quality & modern design</p>
                  <button className="btn btn-outline-dark btn-sm" >Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visible < productData.length && (
          <button className="btn btn-dark mt-3" onClick={showMore}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

export default Shop;
