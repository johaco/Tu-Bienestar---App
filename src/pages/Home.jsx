import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <main>

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
        <section className="health-section section-standard">
          <div className='section-content'>
            <h2 className="text-dark general-title">¿Por qué es importante cuidar tu salud?</h2>
            <p className="text-dark general-paragraph">
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
        </section>

        {/* Dieta Balanceada Section */}
        <section className="home-section home-dieta section-standard">
          <div className="dieta-container  section-content">
            <div className="dieta-image">
              <img src="/src/assets/dieta-balanceada.png" alt="Dieta Balanceada" />
            </div>
            <div className="dieta-content">
              <h2 className='text- dark general-title'>Dieta Balanceada</h2>
              <p className="text-dark general-paragraph">
                Una dieta saludable es clave para mantener tu cuerpo en óptimas condiciones. Aprende a equilibrar tus alimentos y conoce cuáles son los nutrientes esenciales para tu bienestar.
              </p>
              <ul className="dieta-tips">
                <li>Incluye una variedad de frutas y verduras en cada comida.</li>
                <li>Opta por carbohidratos integrales en lugar de refinados.</li>
                <li>Consume proteínas magras como pollo, pescado o legumbres.</li>
                <li>Evita el consumo excesivo de azúcares y grasas saturadas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ejercicio y Actividad Física Section */}
        <section className="home-section section-standard">
          <div className='section-content'>
            <h2 className='text-dark general-title'>Ejercicio y Actividad Física</h2>
            <div className="ejercicio-container">
              <p className="text-dark general-paragraph">
                El ejercicio es clave para tu bienestar. No solo mejora tu salud física, sino también tu estado de ánimo. Aquí te mostramos los beneficios y formas sencillas de empezar.
              </p>

              <div className="ejercicio-benefits">
                <h4>Beneficios</h4>
                <ul>
                  <li><strong>Salud cardiovascular:</strong> Mejora la circulación y reduce el riesgo de enfermedades.</li>
                  <li><strong>Bienestar mental:</strong> Reduce el estrés, la ansiedad y mejora el sueño.</li>
                  <li><strong>Aumento de energía:</strong> Te sentirás más activo durante el día.</li>
                </ul>
              </div>

              <div className="ejercicio-tips">
                <h4>Consejos para empezar</h4>
                <ul>
                  <li>Comienza con caminatas de 20 minutos al día.</li>
                  <li>Integra ejercicios de fuerza como abdominales o flexiones.</li>
                  <li>Asegúrate de estirar antes y después de hacer ejercicio.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Control del Estrés Section */}
        <section className="control-estres section-standard">
          <div className='section-content'>
          <h2 className='text-dark general-title'>Control del Estrés</h2>
          <div className="video-container">
            <iframe src="https://youtu.be/iWU1KUCsYOI" title="Control del Estrés Video" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="consejos">
            <div className="consejo">
              <img src="icon-relax.svg" alt="Relájate" />
              <h4>Técnicas de relajación</h4>
              <p>Practica la meditación y la respiración profunda para reducir el estrés.</p>
            </div>
            <div className="consejo">
              <img src="icon-exercise.svg" alt="Ejercicio" />
              <h4>Ejercicio Regular</h4>
              <p>Haz ejercicio de manera regular para liberar tensiones y mejorar tu bienestar.</p>
            </div>
            <div className="consejo">
              <img src="icon-walk.svg" alt="Caminar" />
              <h4>Caminatas al aire libre</h4>
              <p>Salir a caminar en la naturaleza ayuda a reducir el estrés y mejora tu ánimo.</p>
            </div>
          </div>
          </div>
        </section>

        {/* Prevención de Enfermedades Section */}
        <section className="prevencion-enfermedades section-standard">
          <div className='section-content'>
          <h2 className='text-dark general-title'>Prevención de Enfermedades</h2>
          <div className="checklist">
            <h3>Chequeos Médicos Importantes</h3>
            <ul>
              <li>Chequeo general anual</li>
              <li>Examen de colesterol y glucosa</li>
              <li>Vacunación y refuerzos</li>
              <li>Examen de cáncer según edad</li>
            </ul>
          </div>
          <div className="info-container">
            <div className="info-item">
              <h4>Chequeos de Sangre</h4>
              <p>Realizar exámenes de sangre periódicos para conocer tu estado de salud.</p>
            </div>
            <div className="info-item">
              <h4>Vacunas y Prevención</h4>
              <p>Consulta a tu médico sobre las vacunas necesarias y su calendario.</p>
            </div>
            <div className="info-item">
              <h4>Ejercicio Preventivo</h4>
              <p>El ejercicio regular no solo mantiene tu cuerpo activo, sino que previene enfermedades.</p>
            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
