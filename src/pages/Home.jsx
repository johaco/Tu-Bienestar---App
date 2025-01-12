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


        {/* Section Salud */}
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

        {/* Section: Dieta Balanceada  */}
        <section className="home-section section-dieta section-standard bg-dark text-white">
          <div className="dieta-container section-content">
            <div className="dieta-image">
              <img src="/src/assets/dieta-balanceada.png" alt="Dieta Balanceada" />
            </div>
            <div className="dieta-content">
              <h2 className="text-start text-white general-title">Dieta Balanceada</h2>
              <p className="text-start text-white general-paragraph">
                Una dieta saludable es clave para mantener tu cuerpo en óptimas condiciones. Aprende a equilibrar tus alimentos y conoce cuáles son los nutrientes esenciales para tu bienestar.
              </p>
              <ul className="dieta-tips">
                <li>
                  <span className="custom-icon">
                    <i className="fas fa-apple-alt"></i>
                  </span>
                  Incluye una variedad de frutas y verduras en cada comida.
                </li>
                <li>
                  <span className="custom-icon">
                    <i className="fas fa-bread-slice"></i>
                  </span>
                  Opta por carbohidratos integrales en lugar de refinados.
                </li>
                <li>
                  <span className="custom-icon">
                    <i className="fas fa-drumstick-bite"></i>
                  </span>
                  Consume proteínas magras como pollo, pescado o legumbres.
                </li>
                <li>
                  <span className="custom-icon">
                    <i className="fas fa-candy-cane"></i>
                  </span>
                  Evita el consumo excesivo de azúcares y grasas saturadas.
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* Section: Ejercicio y Actividad Física */}
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

        {/* Section: Control del Estrés */}
        <section className="control-estres section-standard bg-dark text-white">
          <div className="section-content">
            {/* Título Principal */}
            <h2 className="text-white general-title">Control del Estrés</h2>

            {/* Breve Descripción */}
            <div className="descripcion-general">
              <p className="text-white general-paragraph">
                El manejo del estrés es esencial para una vida equilibrada. Aquí te presentamos consejos clave para relajarte y mantener un estado de calma incluso en situaciones difíciles.
              </p>

              <ul className="consejos-list">
                <li>
                  <i className="fas fa-spa icono-consejo"></i>
                  <strong>Técnicas de relajación:</strong>&nbsp;Practica la meditación y la respiración profunda para reducir el estrés.
                </li>
                <li>
                  <i className="fas fa-dumbbell icono-consejo"></i>
                  <strong>Ejercicio Regular:</strong>&nbsp;Haz ejercicio de manera regular para liberar tensiones y mejorar tu bienestar.
                </li>
                <li>
                  <i className="fas fa-walking icono-consejo"></i >
                  <strong>Caminatas al aire libre:</strong>&nbsp;Salir a caminar en la naturaleza ayuda a reducir el estrés y mejora tu ánimo.
                </li>
              </ul>
            </div>

            {/* Introducción al Video */}
            <p className="text-white general-paragraph">
              Descubre cómo incorporar estos consejos en tu rutina diaria con este video breve y educativo:
            </p>

            {/* Video de YouTube */}
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GdTmUCK5ggo?si=VGlPVV-tmtzLsd5b"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>


        {/* Section: Prevención de Enfermedades Section */}
        <section className="prevencion-enfermedades section-standard">
          <div className='section-content'>
            <h2 className='text-dark general-title'>Prevención de Enfermedades</h2>
            <div className="checklist">
              <h3>Chequeos Médicos Importantes</h3>
              <ul>
                <li><i className="fas fa-check-circle icon-check" ></i> Examen de colesterol y glucosa</li>
                <li><i className="fas fa-check-circle icon-check" ></i> Vacunación y refuerzos</li>
                <li><i className="fas fa-check-circle icon-check" ></i> Examen de cáncer según edad</li>
              </ul>
            </div>
            <div className="info-container">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h3>Chequeos de Sangre</h3>
                    <p>Realizar exámenes de sangre periódicos para conocer tu estado de salud.</p>
                  </div>
                  <div className="carousel-item">
                    <h3>Vacunas y Prevención</h3>
                    <p>Consulta a tu médico sobre las vacunas necesarias y su calendario.</p>
                  </div>
                  <div className="carousel-item">
                    <h3>Ejercicio Preventivo</h3>
                    <p>El ejercicio regular no solo mantiene tu cuerpo activo, sino que previene enfermedades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
};

export default Home;
