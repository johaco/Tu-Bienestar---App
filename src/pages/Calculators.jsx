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
                        <MacrosCalculator />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Calculators;
