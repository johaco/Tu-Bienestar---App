import React from 'react';
import IMCCalculator from './IMCCalculator';

const Calculators = () => {
    return (
        <>
            <main>
                <section>
                    <h1>Prevención de la obesidad</h1>
                    <p>La obesidad y el sobrepeso se definen como una acumulación anormal o excesiva de grasa que puede ser perjudicial para la salud. Un índice simple de peso para la talla que se utiliza comúnmente para clasificar el sobrepeso y la obesidad en adultos es el índice de masa corporal (IMC). Se calcula dividiendo el peso de una persona en kilogramos por el cuadrado de la altura en metros. Un IMC igual o superior a 30 se considera obesidad y un IMC igual o superior a 25 se considera sobrepeso. El IMC proporciona la medida de sobrepeso y obesidad a nivel poblacional más útil, ya que es el mismo para ambos sexos y adultos de todas las edades. Sin embargo, debe considerarse una guía aproximada porque puede no corresponder al mismo grado de gordura en diferentes individuos. La obesidad es uno de los principales factores de riesgo de muchas enfermedades crónicas, incluidas la diabetes, las enfermedades cardiovasculares, la hipertensión y los accidentes cerebrovasculares, así como varios tipos de cáncer. Además, los niños con sobrepeso tienen mayor riesgo de vivir con sobrepeso u obesidad en la edad adulta. En el caso de los niños, es necesario tener en cuenta la edad al definir el sobrepeso y la obesidad.Para niños menores de 5 años:</p>
                    <ul>
                        <li>el sobrepeso es el peso para la talla superior a 2 desviaciones estándar por encima de la mediana de los estándares de crecimiento infantil de la OMS; y</li>
                        <li>La obesidad es un peso para la talla superior a 3 desviaciones estándar por encima de la mediana de los estándares de crecimiento infantil de la OMS.</li>
                    </ul>
                    <p>Para niños de entre 5 y 19 años:</p>
                    <ul>
                        <li>el sobrepeso es el IMC para la edad superior a 1 desviación estándar por encima de la mediana de referencia de crecimiento de la OMS; y</li>
                        <li>la obesidad está más de 2 desviaciones estándar por encima de la mediana de referencia de crecimiento de la OMS.</li>
                    </ul>
                </section>
                <section>
                    <IMCCalculator />
                </section>
            </main>
        </>
    )
}

export default Calculators;
