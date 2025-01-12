import { useState } from "react";
import { calculateBMI } from "../utils/bmiCalculator";

const useBMICalculator = () => {
    const [bmi, setBmi] = useState(null);
    const [classification, setClassification] = useState("");
    const [weightRange, setWeightRange] = useState({ min: 0, max: 0 });

    const calculate = (weight, height, gender, lifeStage) => {
        if (weight && height) {
            const { bmiValue, classification, weightRange } = calculateBMI(
                weight,
                height,
                gender,
                lifeStage
            );
            setBmi(bmiValue);
            setClassification(classification);
            setWeightRange(weightRange);
        } else {
            alert("Por favor, completa todos los campos.");
        }
    };

    return { bmi, classification, weightRange, calculate };
};

export default useBMICalculator;
