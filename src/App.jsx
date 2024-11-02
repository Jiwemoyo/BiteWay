import './styles/App.css'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { Location } from "./pages/Location";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className='world'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
