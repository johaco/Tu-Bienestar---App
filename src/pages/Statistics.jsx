import React from "react";

const Statistics = () => {
  return (
    <div className="container mt-5">
      <h1>Estadísticas Globales</h1>
      <p>
        Aquí puedes encontrar datos y tendencias globales relacionadas con el
        IMC, como el porcentaje de personas en diferentes categorías de peso.
      </p>
      <ul>
        <li><strong>Obesidad:</strong> 13% de la población mundial</li>
        <li><strong>Sobrepeso:</strong> 39% de los adultos mayores de 18 años</li>
        <li><strong>Bajo peso:</strong> 9% de los adolescentes</li>
      </ul>
    </div>
  );
};

export default Statistics;
