import React from "react";
import { FaFacebook, FaTwitter, FaUtensils } from "react-icons/fa"; // Íconos de Font Awesome
import "../styles/Home.css";

export const Home = () => {
  return (
    <section className="home">
      <img src="bitewayicon.png" alt="BiteWay Logo" className="biteWayLogo-home" />
      
      <div className="contact-section">
        <button className="button-contact">Contáctanos</button>
        
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={35} /> {/* Tamaño ajustable */}
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
    </section>
  );
};
