import React from "react";
import galleryImages from "../data/galeriaData";
import "../styles/Gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery-content">
      <h2>Nuestros platillos </h2>
      <div className="gallery-images">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};