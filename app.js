document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const interpretationDiv = document.getElementById('interpretation');

    calculateButton.addEventListener('click', function() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = "Пожалуйста, введите корректные значения.";
            interpretationDiv.textContent = "";
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBmi = bmi.toFixed(2);

        resultDiv.textContent = "Ваш ИМТ: " + roundedBmi;
        interpretationDiv.textContent = interpretBMI(bmi);
    });

    function interpretBMI(bmi) {
      if (bmi < 16) {
            return "Выраженный дефицит массы тела";
        } else if (bmi < 18.5) {
            return "Недостаточная масса тела";
        } else if (bmi < 25) {
            return "Нормальная масса тела";
        } else if (bmi < 30) {
            return "Избыточная масса тела (предожирение)";
        } else if (bmi < 35) {
            return "Ожирение I степени";
        } else if (bmi < 40) {
          return "Ожирение II степени";
        } else {
          return "Ожирение III степени (морбидное)";
        }
    }
});