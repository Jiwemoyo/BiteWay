import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaUtensils, FaUtensilSpoon, FaImage, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "../styles/Home.css";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Location } from "./Location";
import { Menu } from "./Menu";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Función para manejar el clic en el menú
  const handleMenuClick = (e) => {
    e.preventDefault();
    setGalleryOpen(false);
    setLocationOpen(false);
    setMenuOpen(!menuOpen);
  };

  // Función para manejar el clic en la galería
  const handleGalleryClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setLocationOpen(false);
    setGalleryOpen(!galleryOpen);
  };

  // Función para manejar el clic en la ubicación
  const handleLocationClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setGalleryOpen(false);
    setLocationOpen(!locationOpen);
  };

  // Función para cerrar la ubicación desde el botón de cierre
  const handleLocationClose = () => {
    setLocationOpen(false);
  };

  // Función para manejar el clic en el botón "Contáctanos"
  const handleContactClick = () => {
    setShowContactForm(true);
  };

  // Función para cerrar el formulario de contacto
  const handleContactFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <section
      className={`home ${menuOpen ? 'menu-open' : ''} ${galleryOpen ? 'gallery-open' : ''} ${locationOpen ? 'location-open' : ''}`}
    >
      {/* Wrapper general que se oculta cuando la ubicación está abierta */}
      <div className={`content-wrapper ${locationOpen ? 'hidden' : ''}`}>
        <img src="bitewayicon.png" alt="biteWayLogo" className={`biteWayLogo-home ${locationOpen ? 'hidden' : ''}`} />
        {/* Botones de contacto que se ocultan cuando la ubicación está abierta */}
        <div className={`buttons-contact-home ${locationOpen ? 'hidden' : ''}`}>
          {/* Botones de contacto y enlaces sociales */}
          <button className="button-contact" onClick={handleContactClick}>Contáctanos</button>
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

      {/* Muestra el formulario de contacto si showContactForm es true */}
      {showContactForm && <Contact onClose={handleContactFormClose} />}

      {/* Contenido del menú */}
      <Menu />

      {/* Contenido de la galería */}
      <Gallery />

      {/* Contenido de la ubicación */}
      <Location isOpen={locationOpen} onClose={handleLocationClose} />

      {/* Botón del menú */}
      <a href="#" className={`link-left ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        {menuOpen ? <FaTimes size={40} /> : <FaUtensilSpoon size={40} />}
        <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
      </a>

      {/* Botón de la galería */}
      <a href="#" className={`link-right ${galleryOpen ? 'open' : ''}`} onClick={handleGalleryClick}>
        {galleryOpen ? <FaTimes size={40} /> : <FaImage size={40} />}
        <span>{galleryOpen ? 'Cerrar' : 'Galería'}</span>
      </a>

      {/* Botón de la ubicación */}
      <a href="#" className={`link-bottom ${locationOpen ? 'open' : ''}`} onClick={handleLocationClick}>
        {locationOpen ? <FaTimes size={40} /> : <FaMapMarkerAlt size={40} />}
        <span>{locationOpen ? 'Cerrar' : 'Ubicación'}</span>
      </a>
    </section>
  );
};

export default Home;