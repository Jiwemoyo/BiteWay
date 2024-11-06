import "../styles/Menu.css";
import menuItems from "../data/menuData";
import { useState } from "react";

export const Menu = () => {
  return (
<div className="menu-content">
      <h2>Nuestro Menú</h2>
      {menuItems.map((category) => (
        <div key={category.category} className="menu-category">
          <h3>{category.category}</h3>
          <div className="menu-items">
            {category.items.map((item) => (
              <div key={item.name} className="menu-item">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p className="menu-price">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
