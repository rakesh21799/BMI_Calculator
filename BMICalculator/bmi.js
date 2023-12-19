document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.querySelector('button');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultsDiv = document.getElementById('results');
  
    calculateButton.addEventListener('click', function (e) {
      e.preventDefault();
  
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
  
      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultsDiv.innerHTML = 'Please enter valid height and weight values.';
        return;
      }
  
      const bmi = calculateBMI(height, weight);
      const bmiCategory = getBMICategory(bmi);
  
      resultsDiv.innerHTML = `
        <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>Category:</strong> ${bmiCategory}</p>
      `;
    });
  
    function calculateBMI(height, weight) {
      // BMI calculation formula: BMI = weight(kg) / (height(m) * height(m))
      const heightInMeters = height / 100; // Convert height from cm to meters
      return weight / (heightInMeters * heightInMeters);
    }
  
    function getBMICategory(bmi) {
      if (bmi < 18.6) {
        return 'Under Weight';
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        return 'Normal Range';
      } else {
        return 'Overweight';
      }
    }
  });
  