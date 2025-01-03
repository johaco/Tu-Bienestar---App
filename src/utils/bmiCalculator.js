export const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  let classification = "";

  if (bmi < 18.5) {
    classification = "Bajo peso";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classification = "Peso normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    classification = "Sobrepeso";
  } else {
    classification = "Obesidad";
  }

  return { bmiValue: bmi.toFixed(2), classification };
};
