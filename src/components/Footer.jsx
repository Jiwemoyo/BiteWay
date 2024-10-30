import React from 'react'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Bite Way. Todos los derechos reservados.</p>
    <ul className="footer-links">
      <li><a href="/">Inicio</a></li>
      <li><a href="/menu">Menú</a></li>
      <li><a href="/gallery">Galería</a></li>
      <li><a href="/location">Ubicación</a></li>
      <li><a href="/contact">Contacto</a></li>
    </ul>
  </footer>
  )
}
