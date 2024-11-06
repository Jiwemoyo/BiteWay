import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaUtensils, FaUtensilSpoon, FaImage, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "../styles/Home.css";
import { Contact } from "./Contact";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Función para manejar el clic en el menú
  const handleMenuClick = (e) => {
    e.preventDefault();
    setGalleryOpen(false); // Cierra la galería
    setLocationOpen(false); // Cierra la ubicación
    setMenuOpen(!menuOpen); // Abre/cierra el menú
  };

  // Función para manejar el clic en la galería
  const handleGalleryClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // Cierra el menú
    setLocationOpen(false); // Cierra la ubicación
    setGalleryOpen(!galleryOpen); // Abre/cierra la galería
  };

  // Función para manejar el clic en la ubicación
  const handleLocationClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // Cierra el menú
    setGalleryOpen(false); // Cierra la galería
    setLocationOpen(!locationOpen); // Abre/cierra la ubicación
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
    <section className={`home ${menuOpen ? 'menu-open' : ''} ${galleryOpen ? 'gallery-open' : ''} ${locationOpen ? 'location-open' : ''}`}>
      {/* Wrapper general que se oculta cuando la ubicación está abierta */}
      <div className={`content-wrapper ${locationOpen ? 'hidden' : ''}`}>
        <img src="bitewayicon.png" alt="biteWayLogo" className={`biteWayLogo-home ${locationOpen ? 'hidden' : ''}`} />
        
        {/* Botones de contacto que se ocultan cuando la ubicación está abierta */}
        <div className={`buttons-contact-home ${locationOpen ? 'hidden' : ''}`}>
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
      <div className="menu-content">
        <h2>Nuestro Menú</h2>
        {/* Muestra categorías del menú */}
      </div>

      {/* Contenido de la galería */}
      <div className="gallery-content">
        <h2>Nuestra Galería</h2>
        {/* Muestra elementos de la galería */}
      </div>

      {/* Contenido de la ubicación */}
      <div className="location-content">
        <button className="close-button" onClick={handleLocationClose}>
          <FaTimes size={40} />
          <span>Cerrar</span>
        </button>
        <h2>Nuestra Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9977565!3d40.7179525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1169%3A0x49466eb56f44f15a!2sGrand%20Central%20Terminal!5e0!3m2!1sen!2sus!4v1612280695424!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

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