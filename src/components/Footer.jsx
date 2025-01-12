import React from "react";
import "../styles/Footer.css"; // Si tienes estilos específicos para el footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <img
        src="/src/assets/logo2.png"
        className="img-fluid rounded-top mb-3"
        alt="logo tu bienestar"
      />
      <p>&copy; 2025 Tu Bienestar. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
