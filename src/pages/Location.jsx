import React from 'react'
import '../styles/Location.css';
import { FaTimes } from 'react-icons/fa';

export const Location = ({ isOpen, onClose }) => {
  return (
    <div className={`location-content ${isOpen ? 'open' : ''}`}>
    <button className="close-button" onClick={onClose}>
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
  )
}
