import React from "react";
import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-banner">
          <h1>¡Bienvenidos a Bite Way!</h1>
          <p>
            <strong>Donde cada bocado cuenta una historia.</strong>
            Disfruta de la mejor experiencia gastronómica en un ambiente acogedor, 
            lleno de sabores auténticos y momentos inolvidables.
          </p>
          <button className="reserve-button">Reserva tu mesa</button>
        </div>
      </section>
    </>
  );
};