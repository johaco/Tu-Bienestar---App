import React from "react";
import useMacroCalculator from "../hooks/useMacroCalculator";

const MacroCalculator = () => {
    const {
        step,
        formula,
        setFormula,
        basicInfo,
        setBasicInfo,
        activityLevel,
        setActivityLevel,
        goal,
        setGoal,
        results,
        nextStep,
        prevStep,
        calculateResults,
    } = useMacroCalculator();

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Calculadora de Macros</h1>

            {/* Paso 1: Elige la fórmula */}
            {step === 1 && (
                <div>
                    <h2 className="h4 mb-3">Paso 1: Elige la fórmula</h2>
                    <div className="list-group">
                        {["mifflin", "harris-benedict", "oms"].map((formulaType) => (
                            <button
                                key={formulaType}
                                onClick={() => setFormula(formulaType)}
                                className={`list-group-item list-group-item-action ${
                                    formula === formulaType ? "active" : ""
                                }`}
                            >
                                {formulaType === "mifflin" && "Fórmula de Mifflin-St Jeor"}
                                {formulaType === "harris-benedict" && "Fórmula de Harris-Benedict"}
                                {formulaType === "oms" && "Organización Mundial de la Salud"}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Paso 2: Información Básica */}
            {step === 2 && (
                <div>
                    <h2 className="h4 mb-3">Paso 2: Información básica</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Sexo</label>
                            <select
                                value={basicInfo.sex}
                                onChange={(e) =>
                                    setBasicInfo({ ...basicInfo, sex: e.target.value })
                                }
                                className="form-select"
                            >
                                <option value="male">Hombre</option>
                                <option value="female">Mujer</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Edad (años)</label>
                                <input
                                    type="number"
                                    value={basicInfo.age}
                                    onChange={(e) =>
                                        setBasicInfo({ ...basicInfo, age: e.target.value })
                                    }
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Altura (cm)</label>
                                <input
                                    type="number"
                                    value={basicInfo.height}
                                    onChange={(e) =>
                                        setBasicInfo({ ...basicInfo, height: e.target.value })
                                    }
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Peso (kg)</label>
                            <input
                                type="number"
                                value={basicInfo.weight}
                                onChange={(e) =>
                                    setBasicInfo({ ...basicInfo, weight: e.target.value })
                                }
                                className="form-control"
                            />
                        </div>
                    </form>
                </div>
            )}

            {/* Paso 3: Nivel de Actividad */}
            {step === 3 && (
                <div>
                    <h2 className="h4 mb-3">Paso 3: Nivel de actividad (NEAT)</h2>
                    <div className="list-group">
                        {[
                            { value: "sedentary", text: "Sedentario" },
                            { value: "light", text: "Ligero" },
                            { value: "moderate", text: "Moderado" },
                            { value: "active", text: "Activo" },
                            { value: "veryActive", text: "Muy activo" },
                            { value: "extremelyActive", text: "Extremadamente activo" },
                        ].map(({ value, text }) => (
                            <button
                                key={value}
                                onClick={() => setActivityLevel(value)}
                                className={`list-group-item list-group-item-action ${
                                    activityLevel === value ? "active" : ""
                                }`}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Paso 4: Elige tu objetivo */}
            {step === 4 && (
                <div>
                    <h2 className="h4 mb-3">Paso 4: Elige tu objetivo</h2>
                    <div className="list-group">
                        {[
                            { value: "maintain", text: "Mantener peso" },
                            { value: "lose", text: "Perder peso" },
                            { value: "lose-aggressive", text: "Perder peso de forma agresiva" },
                            { value: "gain", text: "Ganar peso" },
                            { value: "gain-aggressive", text: "Ganar peso de forma agresiva" },
                        ].map(({ value, text }) => (
                            <button
                                key={value}
                                onClick={() => setGoal(value)}
                                className={`list-group-item list-group-item-action ${
                                    goal === value ? "active" : ""
                                }`}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Paso 5: Resultados */}
            {step === 5 && results && (
                <div>
                    <h2 className="h4 mb-3">Estos son tus resultados:</h2>
                    <div className="card">
                        <div className="card-body">
                            <p>
                                <strong>Tasa de metabolismo basal (BMR):</strong> {results.bmr} kcal
                            </p>
                            <p>
                                <strong>Objetivo de consumo calórico por día:</strong> {results.dailyCalories} kcal
                            </p>
                            <p>
                                <strong>Balance de macronutrientes:</strong>
                            </p>
                            <ul>
                                <li>Grasas: {results.macros.fat} g</li>
                                <li>Proteína: {results.macros.protein} g</li>
                                <li>Carbohidratos: {results.macros.carbs} g</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Controles de Navegación */}
            <div className="d-flex justify-content-between mt-4">
                <button
                    onClick={prevStep}
                    className="btn btn-secondary"
                    disabled={step === 1}
                >
                    Atrás
                </button>
                {step < 4 && (
                    <button
                        onClick={nextStep}
                        className="btn btn-primary"
                    >
                        Siguiente
                    </button>
                )}
                {step === 4 && (
                    <button
                        onClick={calculateResults}
                        className="btn btn-success"
                    >
                        Calcular
                    </button>
                )}
            </div>
        </div>
    );
};

export default MacroCalculator;
