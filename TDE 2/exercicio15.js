function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
  
const temperaturaCelsius = 30;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + "°C equivale a " + temperaturaFahrenheit + "°F");