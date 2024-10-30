import '../styles/Menu.css';
import menuItems from '../data/menuData'
import { useState } from 'react';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredItems = selectedCategory === 'todos' 
  ? menuItems 
  : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="menu">
    <h2>Menú</h2>
    <div className="menu-filters">
      <button onClick={() => setSelectedCategory('todos')}>Todos</button>
      <button onClick={() => setSelectedCategory('desayuno')}>Desayuno</button>
      <button onClick={() => setSelectedCategory('almuerzo')}>Almuerzo</button>
      <button onClick={() => setSelectedCategory('cena')}>Cena</button>
    </div>
    <ul className="menu-list">
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </section>
  )
}
