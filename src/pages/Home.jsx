import React from "react";
import { FaFacebook, FaTwitter, FaUtensils, FaUtensilSpoon, FaImage, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa'
import "../styles/Home.css";

export const Home = () => {
  return (
    <section className="home">
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

  {/* Añadir los tres enlaces aquí */}
  <a href="#" className="link-left">
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
