import React from 'react'
import galleryImages from '../data/galeriaData'
import '../styles/Gallery.css'

export const Gallery = () => {
  return (
    <section className="gallery">
    <h2>Galería</h2>
    <div className="gallery-grid">
      {galleryImages.map(image => (
        <img key={image.id} src={image.src} alt={image.alt} className="gallery-image" />
      ))}
    </div>
  </section>
  )
}
