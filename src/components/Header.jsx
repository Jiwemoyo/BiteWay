import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className="headerLogo">
        <h1>Bite Way</h1>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"gallery"}>Galeria</Link>
          </li>
          <li>
            <Link to={"location"}>Ubicacion</Link>
          </li>
          <li>
            <Link to={"contact"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
