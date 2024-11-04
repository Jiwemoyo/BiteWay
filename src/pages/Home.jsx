import React, { useState } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaUtensils, 
  FaUtensilSpoon, 
  FaImage, 
  FaMapMarkerAlt,
  FaTimes 
} from "react-icons/fa";

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
    { id: 1, title: "Plato 1", image: "plato1.jpg" },
    { id: 2, title: "Plato 2", image: "plato2.jpg" },
    { id: 3, title: "Plato 3", image: "plato3.jpg" },
    { id: 4, title: "Plato 4", image: "plato4.jpg" },
  ];

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

      {/* Menú Izquierdo */}
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

      {/* Galería Derecha */}
      <div className="gallery-content">
        <h2>Nuestra Galería</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={`/api/placeholder/300/200`} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <a href="#" className="link-left" onClick={(e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
        if (galleryOpen) setGalleryOpen(false);
      }}>
        {menuOpen ? <FaTimes size={40} /> : <FaUtensilSpoon size={40} />}
        <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
      </a>

      <a href="#" className="link-right" onClick={(e) => {
        e.preventDefault();
        setGalleryOpen(!galleryOpen);
        if (menuOpen) setMenuOpen(false);
      }}>
        {galleryOpen ? <FaTimes size={40} /> : <FaImage size={40} />}
        <span>{galleryOpen ? 'Cerrar' : 'Galería'}</span>
      </a>

      <a href="#" className="link-bottom">
        <FaMapMarkerAlt size={40} />
        <span>Ubicación</span>
      </a>
    </section>
  );
};

export default Home;