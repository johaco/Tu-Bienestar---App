import React from 'react';
import IMCCalculator from '../components/IMCCalculator';
import MacrosCalculator from '../components/MacrosCalculator';

const Calculators = () => {
    return (
        <>
            <main className='section-standard'>
                <div>
                    <section className='section-content text-start'>
                        <h1 className='text-center general-title'>Prevención de la obesidad</h1>
                        <p>
                            La obesidad y el sobrepeso se definen como una acumulación anormal o excesiva de grasa 
                            que puede ser perjudicial para la salud...
                        </p>
                    </section>
                    <section>
                        <IMCCalculator />
                    </section>
                    <section className='mt-5'>
                    <h1 className='text-center general-title'>Calculadora de Macros</h1>
                    <p>
                    Los macronutrientes son nutrientes que el cuerpo necesita en grandes cantidades para obtener energía y mantener sus funciones vitales. 
                    Se dividen en tres categorías principales:
                    </p>
                    <ul>
                        <li>Carbohidratos: Son la fuente primaria de energía. Se encuentran en alimentos como panes, pastas, frutas y verduras.</li>
                        <li>Proteínas: Esenciales para la reparación y construcción de tejidos. Presentes en carnes, legumbres y productos lácteos.</li>
                        <li>Grasas: Necesarias para la absorción de vitaminas y protección de órganos. Se hallan en aceites, frutos secos y pescados grasos.</li>
                    </ul>
                    <p>
                    Aunque las calculadoras de macronutrientes proporcionan estimaciones útiles, 
                    es importante reconocer que cada individuo tiene necesidades únicas basadas en factores como edad, género, nivel de actividad y objetivos de salud. Consultar a un nutricionista permite obtener un plan alimenticio personalizado y un seguimiento continuo, 
                    asegurando que la dieta se adapte a las necesidades específicas y se realicen los ajustes necesarios para alcanzar los objetivos deseados.
                    </p>
                    <br />
                    <p>
                    En resumen, comprender el papel de los macronutrientes y buscar asesoramiento profesional puede optimizar la salud y el bienestar personal.
                    </p>
                        <MacrosCalculator />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Calculators;
