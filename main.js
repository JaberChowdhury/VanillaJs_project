import "./style.css";

window.onload = () => {
  // Function to add value to the input field
  function addValue(value) {
    document.querySelector(".equation").value += value;
  }

  // Function to clear the input field
  function clearDisplay() {
    document.querySelector(".equation").value = "";
  }

  // Function to calculate the result
  function calculate() {
    try {
      const equation = document.querySelector(".equation").value;
      const result = eval(equation); // Using eval for simplicity (not recommended for production)
      // document.querySelector('.result').textContent = result;
      document.querySelector(".result").innerHTML = result;
    } catch (error) {
      document.querySelector(".result").textContent = JSON.stringify(error);
    }
  }

  window.addValue = addValue;
  window.calculate = calculate;
  window.clearDisplay = clearDisplay;
};
