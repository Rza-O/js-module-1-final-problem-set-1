/**
 * ### Task-1: 
    Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celToFahr(number){
    let convertTemp = number * 1.8 + 32;
    return convertTemp;
}

let temperatureInCelsius = 35;

let temperatureInFahrenheit = celToFahr(temperatureInCelsius);

console.log('Today the temperature is:', temperatureInFahrenheit,'F');