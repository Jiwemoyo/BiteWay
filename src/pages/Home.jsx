import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaUtensils, FaUtensilSpoon, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import "../styles/Home.css";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const menuItems = [
    {
      category: "Entradas",
      items: [
        { name: "Ensalada César", price: "$8.99" },
        { name: "Sopa del Día", price: "$6.99" },
      ]
    },
    {
      category: "Platos Principales",
      items: [
        { name: "Pasta Alfredo", price: "$14.99" },
        { name: "Salmón Grillado", price: "$18.99" },
      ]
    },
    {
      category: "Postres",
      items: [
        { name: "Tiramisú", price: "$6.99" },
        { name: "Cheesecake", price: "$5.99" },
      ]
    }
  ];

  const galleryItems = [
    { 
      id: 1,
      title: "Plato 1",
      image: "plato1.jpg",
      description: "Deliciosa pasta fresca"
    },
    { 
      id: 2,
      title: "Plato 2",
      image: "plato2.jpg",
      description: "Ensalada mediterránea"
    },
    // Añade más imágenes según necesites
  ];

  const handleMenuClick = (e) => {
    e.preventDefault();
    setGalleryOpen(false); // Cierra la galería si está abierta
    setMenuOpen(!menuOpen);
  };

  const handleGalleryClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // Cierra el menú si está abierto
    setGalleryOpen(!galleryOpen);
  };

  return (
    <section className={`home ${menuOpen ? 'menu-open' : ''} ${galleryOpen ? 'gallery-open' : ''}`}>
      <div className="content-wrapper">
        <img src="bitewayicon.png" alt="biteWayLogo" className="biteWayLogo-home" />
        <div className="buttons-contact-home">
          <button className="button-contact">Contáctanos</button>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={35} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={35} />
              </a>
            </li>
            <li>
              <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">
                <FaUtensils size={35} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu-content">
        <h2>Nuestro Menú</h2>
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3>{category.category}</h3>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gallery-content">
        <h2>Nuestra Galería</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#" className="link-left" onClick={handleMenuClick}>
        <FaUtensilSpoon size={40} />
        <span>Menú</span>
      </a>
      <a href="#" className="link-right" onClick={handleGalleryClick}>
        <FaImage size={40} />
        <span>Galería</span>
      </a>
      <a href="#" className="link-bottom">
        <FaMapMarkerAlt size={40} />
        <span>Ubicación</span>
      </a>
    </section>
  );
};

export default Home;