function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("unit").value;
  
    if (unit === "celsius") {
      var fahrenheit = (input * 9/5) + 32;
      document.getElementById("result").innerHTML = input + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
      var celsius = (input - 32) * 5/9;
      document.getElementById("result").innerHTML = input + "°F = " + celsius.toFixed(2) + "°C";
    }
  }
  
