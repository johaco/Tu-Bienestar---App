import { useState } from 'react';
import { calculateBMI } from '../utils/bmiCalculator';

const useBMICalculator = () => {
    const [bmi, setBmi] = useState(null);
    const [classification, setClassification] = useState("");

    const calculate = (weight, height) => {
        if (weight && height) {
            const { bmiValue, classification } = calculateBMI(weight, height);
            setBmi(bmiValue);
            setClassification(classification);
        } else {
            alert("Por favor, completa ambos campos.");
        }
    };

    return { bmi, classification, calculate };
};

export default useBMICalculator;
