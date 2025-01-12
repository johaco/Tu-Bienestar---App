import React, { useState } from "react";
import useBMICalculator from "../hooks/useBMICalculator";

const IMCCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("masculino");
    const [lifeStage, setLifeStage] = useState("adulto");
    const { bmi, classification, weightRange, calculate } = useBMICalculator();

    const handleCalculate = () => {
        calculate(weight, height, gender, lifeStage);
    };

    return (
        <main>
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
                    <div className="form-group mt-3">
                        <label>Género:</label>
                        <select
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <label>Etapa de vida:</label>
                        <select
                            className="form-control"
                            value={lifeStage}
                            onChange={(e) => setLifeStage(e.target.value)}
                        >
                            <option value="niño">Niño (0-12 años)</option>
                            <option value="adolescente">Adolescente (13-18 años)</option>
                            <option value="adulto">Adulto (18+ años)</option>
                        </select>
                    </div>
                    <button className="btn btn-primary mt-4 w-100" onClick={handleCalculate}>
                        Calcular IMC
                    </button>
                    {bmi && (
                        <div className="alert alert-info mt-4">
                            <p>Tu IMC es: <strong>{bmi}</strong></p>
                            <p>Clasificación: <strong>{classification}</strong></p>
                            <p>
                                Rango de peso ideal:{" "}
                                <strong>
                                    {weightRange.min} kg - {weightRange.max} kg
                                </strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default IMCCalculator;
