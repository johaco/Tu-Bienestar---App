import { useState } from "react";

const useMacroCalculator = () => {
    const [step, setStep] = useState(1);
    const [formula, setFormula] = useState("mifflin");
    const [basicInfo, setBasicInfo] = useState({
        sex: "male",
        age: "",
        height: "",
        weight: "",
    });
    const [activityLevel, setActivityLevel] = useState("sedentary");
    const [goal, setGoal] = useState("maintain");
    const [results, setResults] = useState(null);
    const [error, setError] = useState("");

    const validateStep = () => {
        if (step === 2) {
            const { age, height, weight } = basicInfo;
            if (!age || !height || !weight) {
                setError("Por favor, completa todos los campos.");
                return false;
            }

            // Validar que los valores sean números válidos
            if (
                isNaN(parseFloat(age)) ||
                isNaN(parseFloat(height)) ||
                isNaN(parseFloat(weight))
            ) {
                setError("Por favor, ingresa valores numéricos válidos.");
                return false;
            }
        }
        setError("");
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prev) => Math.min(prev + 1, 5));
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const calculateResults = () => {
        const { sex, age, height, weight } = basicInfo;
    
        // Convertir valores a números
        const numericAge = parseFloat(age);
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);
    
        // Validar entradas
        if (
            isNaN(numericAge) || numericAge <= 0 ||
            isNaN(numericHeight) || numericHeight <= 0 ||
            isNaN(numericWeight) || numericWeight <= 0
        ) {
            setError("Por favor, ingresa valores numéricos válidos en todos los campos.");
            return;
        }
    
        setError(""); // Limpiar errores previos
    
        let bmr = 0;
    
        // Fórmulas para calcular el BMR
        if (formula === "mifflin") {
            bmr =
                sex === "male"
                    ? (10 * numericWeight) + (6.25 * numericHeight) - (5 * numericAge) + 5
                    : (10 * numericWeight) + (6.25 * numericHeight) - (5 * numericAge) - 161;
        } else if (formula === "harris-benedict") {
            bmr =
                sex === "male"
                    ? 88.362 + (13.397 * numericWeight) + (4.799 * numericHeight) - (5.677 * numericAge)
                    : 447.593 + (9.247 * numericWeight) + (3.098 * numericHeight) - (4.330 * numericAge);
        } else if (formula === "oms") {
            bmr = numericWeight * 24; // Ejemplo simple para la fórmula de OMS
        }
    
        const activityMultiplier = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            veryActive: 1.9,
        };
    
        const activityValue = activityMultiplier[activityLevel];
        if (!activityValue) {
            setError("Nivel de actividad no válido.");
            return;
        }
    
        const dailyCalories = bmr * activityValue;
    
        // Calcular proteínas en base al peso (máximo 2g por kg)
        const proteinGrams = Math.min(numericWeight * 2, dailyCalories / 4);
        const proteinCalories = proteinGrams * 4;
    
        // Calorías restantes después de las proteínas
        const remainingCalories = dailyCalories - proteinCalories;
    
        // Ratios para grasas y carbohidratos según el objetivo
        const goalRatios = {
            maintain: { fat: 0.3, carbs: 0.4, protein: 0.3 },  // Equilibrado para mantenimiento
            lose: { fat: 0.25, carbs: 0.55, protein: 0.2 },    // Déficit calórico (menos grasas, más carbohidratos)
            gain: { fat: 0.25, carbs: 0.5, protein: 0.25 },     // Superávit calórico para ganar músculo
            loseAggressive: { fat: 0.2, carbs: 0.6, protein: 0.2 }, // Más carbohidratos, menos grasas para pérdida agresiva
            gainAggressive: { fat: 0.2, carbs: 0.6, protein: 0.2 }, // Superávit más agresivo (más carbohidratos)
        };
        
    
        const { fat, carbs } = goalRatios[goal] || goalRatios.maintain;
    
        const fatCalories = remainingCalories * fat;
        const carbsCalories = remainingCalories * carbs;
    
        // Convertir calorías a gramos
        const fatGrams = fatCalories / 9;
        const carbsGrams = carbsCalories / 4;
    
        setResults({
            bmr: Math.round(bmr),
            dailyCalories: Math.round(dailyCalories),
            macros: {
                protein: Math.round(proteinGrams),
                fat: Math.round(fatGrams),
                carbs: Math.round(carbsGrams),
            },
        });
    
        setStep(5);
    };
    


    return {
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
        error,
    };
};

export default useMacroCalculator;
