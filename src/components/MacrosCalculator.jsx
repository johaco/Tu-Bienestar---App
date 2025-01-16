import React, { useState } from "react";
import "../styles/MacrosCalculator.css"; // Opcional: Estilos específicos para esta calculadora.

const MacrosCalculator = () => {
    const [calories, setCalories] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fats, setFats] = useState("");
    const [result, setResult] = useState(null);

    const calculateMacros = () => {
        const proteinGrams = (calories * (protein / 100)) / 4; // 4 cal por gramo de proteína
        const carbsGrams = (calories * (carbs / 100)) / 4;     // 4 cal por gramo de carbohidrato
        const fatsGrams = (calories * (fats / 100)) / 9;       // 9 cal por gramo de grasa

        setResult({
            protein: proteinGrams.toFixed(2),
            carbs: carbsGrams.toFixed(2),
            fats: fatsGrams.toFixed(2),
        });
    };

    return (
        <div className="container mt-5">
            <div className="card-dark shadow-lg p-4 bg-dark text-white rounded">
                <h1 className="text-center">Calculadora de Macronutrientes</h1>
                <div className="form-group mt-3">
                    <label>Calorías diarias (kcal):</label>
                    <input
                        type="number"
                        className="form-control bg-dark"
                        placeholder="Ingresa tus calorías diarias"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>% Proteínas:</label>
                    <input
                        type="number"
                        className="form-control bg-dark"
                        placeholder="Ingresa el porcentaje de proteínas"
                        value={protein}
                        onChange={(e) => setProtein(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>% Carbohidratos:</label>
                    <input
                        type="number"
                        className="form-control bg-dark"
                        placeholder="Ingresa el porcentaje de carbohidratos"
                        value={carbs}
                        onChange={(e) => setCarbs(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>% Grasas:</label>
                    <input
                        type="number"
                        className="form-control bg-dark"
                        placeholder="Ingresa el porcentaje de grasas"
                        value={fats}
                        onChange={(e) => setFats(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-success mt-4 w-100"
                    onClick={calculateMacros}
                >
                    Calcular
                </button>
                {result && (
                    <div className="alert alert-info mt-4">
                        <p>Proteínas: <strong>{result.protein} g</strong></p>
                        <p>Carbohidratos: <strong>{result.carbs} g</strong></p>
                        <p>Grasas: <strong>{result.fats} g</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MacrosCalculator;
