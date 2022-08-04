function idCard() {
  var nombre = "Daniel";
  var ubicacion = "Tepatitlan";
  var pasatiempo = "Dibujar";

  return `"Hola, mi nombre es ${nombre} vivo en ${ubicacion} y disfruto ${pasatiempo}`;
}

console.log(idCard());

function calcMascotAge(edadH) {
  var edadD = 7;
  var dogYears = edadD * edadH;

  return `La edad de su perro es ${dogYears}`;
}

var añosHumanos = prompt("Ingrese la edad humana de su perro");
console.log(calcMascotAge(añosHumanos));
