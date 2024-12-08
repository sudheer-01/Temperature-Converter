const t1Obj = document.getElementById("t1");
const fObj = document.getElementById("Fahrenheit");
const cObj = document.getElementById("Celsius");
const kObj = document.getElementById("Kelvin");
const submitObj = document.getElementById("click");
const display = document.getElementById("p1");

submitObj.onclick = function() {
    const tempValue = parseFloat(t1Obj.value);

    // Validate if the input is a valid number
    if (isNaN(tempValue)) {
        display.style.color = "red";
        display.textContent = "Please enter a valid number!";
        return;
    }

    // Conversion logic
    if (cObj.checked) {
        // Convert Celsius to Fahrenheit and Kelvin
        const fahrenheit = (tempValue * 9/5) + 32;
        const kelvin = tempValue + 273.15;
        display.style.color = "#36a2eb";
        display.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
    } 
    else if (fObj.checked) {
        // Convert Fahrenheit to Celsius and Kelvin
        const celsius = (tempValue - 32) * 5/9;
        const kelvin = (tempValue - 32) * 5/9 + 273.15;
        display.style.color = "#36a2eb";
        display.textContent = `Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`;
    } 
    else if (kObj.checked) {
        // Convert Kelvin to Celsius and Fahrenheit
        const celsius = tempValue - 273.15;
        const fahrenheit = (tempValue - 273.15) * 9/5 + 32;
        display.style.color = "#36a2eb";
        display.textContent = `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } 
    else {
        display.style.color = "red";
        display.textContent = "Please select a temperature scale.";
    }
};
