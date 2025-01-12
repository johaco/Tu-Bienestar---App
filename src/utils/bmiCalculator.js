export const calculateBMI = (weight, height, gender, lifeStage) => {
  const bmi = weight / (height * height);
  let classification = "";
  let weightRange = { min: 0, max: 0 };

  if (lifeStage === "niño" || lifeStage === "adolescente") {
      // Usar tablas de percentiles (ejemplo simple)
      if (bmi < 5) {
          classification = "Bajo peso";
      } else if (bmi >= 5 && bmi < 85) {
          classification = "Peso normal";
      } else if (bmi >= 85 && bmi < 95) {
          classification = "Sobrepeso";
      } else {
          classification = "Obesidad";
      }
      // Supongamos un rango estimado (puedes reemplazarlo por cálculos más complejos)
      weightRange = { min: 15, max: 45 }; // Valores aproximados
  } else {
      // Adultos
      if (bmi < 18.5) {
          classification = "Bajo peso";
      } else if (bmi >= 18.5 && bmi < 24.9) {
          classification = "Peso normal";
      } else if (bmi >= 25 && bmi < 29.9) {
          classification = "Sobrepeso";
      } else {
          classification = "Obesidad";
      }
      const minBMI = 18.5;
      const maxBMI = 24.9;
      const minWeight = minBMI * height * height;
      const maxWeight = maxBMI * height * height;
      const genderFactor = gender === "femenino" ? 0.95 : 1;

      weightRange = {
          min: (minWeight * genderFactor).toFixed(1),
          max: (maxWeight * genderFactor).toFixed(1),
      };
  }

  return {
      bmiValue: bmi.toFixed(2),
      classification,
      weightRange,
  };
};
