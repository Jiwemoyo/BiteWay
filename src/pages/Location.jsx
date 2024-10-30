import React from 'react'
import '../styles/Location.css';

export const Location = () => {
  return (
    <section className="location">
    <h2>Nuestra Ubicación</h2>
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091716!2d144.95373521584343!3d-37.817209979751916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c8ab%3A0x5045675218ceed0!2sBite%20Way!5e0!3m2!1sen!2sus!4v1612321617380!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <p>Estamos ubicados en la mejor zona de la ciudad. ¡Te esperamos!</p>
  </section>
  )
}
