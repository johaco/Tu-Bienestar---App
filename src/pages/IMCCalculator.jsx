import React, { useState } from 'react';
import useBMICalculator from '../Hooks/useBMICalculator';

const IMCCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const { bmi, classification, calculate } = useBMICalculator();

    const handleCalculate = () => {
        calculate(weight, height);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center text-primary">Calculadora de IMC</h1>
                <div className="form-group">
                    <label>Peso (kg):</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ingresa tu peso"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Altura (m):</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ingresa tu altura"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary mt-4 w-100" onClick={handleCalculate}>
                    Calcular IMC
                </button>
                {bmi && (
                    <div className="alert alert-info mt-4">
                        <p>Tu IMC es: <strong>{bmi}</strong></p>
                        <p>Clasificación: <strong>{classification}</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IMCCalculator;
