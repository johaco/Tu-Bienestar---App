import Section from '../components/Section';

import '../styles/Home.css';


const Home = () => {
  return (
    <>
      <div className="home-hero">
        <div className="home-overlay">
          <h1 className="home-title animated fadeInLeft">Tu Bienestar</h1>
          <h2 className="home-subtitle animated fadeInRight">
            Comienza tu viaje hacia una vida más saludable y activa
          </h2>
          <button className="home-button animated fadeInUpBig">Comenzar</button>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="health-section">
        <h2 className="text-dark">¿Por qué es importante cuidar tu salud?</h2>
        <p className="text-dark">
          Mantener un estilo de vida saludable puede ayudarte a prevenir enfermedades, mejorar tu bienestar y aumentar tu energía diaria. Aquí encontrarás recursos útiles para comenzar tu viaje hacia una vida más activa y saludable.
        </p>
        <div className="health-content">
          <div className="health-item">
            <img src="src/assets/nutrition.png" alt="Nutrición" className="health-icon" />
            <h4>Nutrición</h4>
            <p>Descubre cómo una dieta balanceada puede transformar tu salud y aumentar tu energía.</p>
          </div>
          <div className="health-item">
            <img src="src/assets/exercise.png" alt="Ejercicio" className="health-icon" />
            <h4>Ejercicio</h4>
            <p>Inspírate para moverte más y fortalecer tu cuerpo con rutinas simples y efectivas.</p>
          </div>
          <div className="health-item">
            <img src="src/assets/wellness.png" alt="Bienestar" className="health-icon" />
            <h4>Bienestar</h4>
            <p>Aprende técnicas para manejar el estrés y mejorar tu salud mental día a día.</p>
          </div>
        </div>
      </div>

      {/* Section: Dieta Balanceada */}
      <div className="home-section home-dieta">
        <div className="dieta-container">
          <div className="dieta-image">
            <img src="/src/assets/dieta-balanceada.png" alt="Dieta Balanceada" />
          </div>
          <div className="dieta-content">
            <h3>Dieta Balanceada</h3>
            <p>
              Una dieta saludable es clave para mantener tu cuerpo en óptimas condiciones. Aprende a equilibrar tus alimentos y conoce cuáles son los nutrientes esenciales para tu bienestar.
            </p>
            <ul className="dieta-tips">
              <li>Incluye una variedad de frutas y verduras en cada comida.</li>
              <li>Opta por carbohidratos integrales en lugar de refinados.</li>
              <li>Consume proteínas magras como pollo, pescado o legumbres.</li>
              <li>Evita el consumo excesivo de azúcares y grasas saturadas.</li>
            </ul>
            <button className="home-button">Ver más consejos</button>
          </div>
        </div>
      </div>

      {/* Reutilización del componente para otras secciones */}
      <Section
        title="Ejercicio y Actividad Física"
        content="El ejercicio regular no solo mejora tu salud física, sino también tu salud mental. Descubre qué tipos de actividades son las más recomendables según tu estilo de vida."
        additionalClasses="home-ejercicio"
      />
      <Section
        title="Control del Estrés"
        content="El estrés puede tener efectos negativos en tu salud. Aquí te ofrecemos consejos prácticos para reducirlo y mejorar tu calidad de vida."
        additionalClasses="home-estres"
      />
      <Section
        title="Prevención de Enfermedades"
        content="La prevención es esencial para cuidar de tu salud. Aprende sobre los chequeos médicos importantes y cómo mantener tu bienestar a largo plazo."
        additionalClasses="home-prevencion"
      />
    </>
  );
};

export default Home;
