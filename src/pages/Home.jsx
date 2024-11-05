import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaUtensils, FaUtensilSpoon, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import "../styles/Home.css";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <section className={`home ${menuOpen ? 'menu-open' : ''}`}>
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

      <a href="#" className="link-left" onClick={(e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
      }}>
        <FaUtensilSpoon size={40} />
        <span>Menú</span>
      </a>
      <a href="#" className="link-right">
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