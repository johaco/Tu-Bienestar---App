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

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const calculateResults = () => {
        const { sex, age, height, weight } = basicInfo;

        // Convertir los valores a números
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

        const dailyCalories = bmr * (activityMultiplier[activityLevel] || 1.2);
        const macros = calculateMacros(dailyCalories, goal);

        setResults({ bmr: Math.round(bmr), dailyCalories: Math.round(dailyCalories), macros });
        setStep(5);
    };

    const calculateMacros = (calories, goal) => {
        const goalRatios = {
            maintain: { protein: 0.3, fat: 0.25, carbs: 0.45 },
            lose: { protein: 0.35, fat: 0.3, carbs: 0.35 },
            gain: { protein: 0.25, fat: 0.2, carbs: 0.55 },
        };

        const { protein, fat, carbs } = goalRatios[goal] || goalRatios.maintain;

        return {
            protein: Math.round((calories * protein) / 4),
            fat: Math.round((calories * fat) / 9),
            carbs: Math.round((calories * carbs) / 4),
        };
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
