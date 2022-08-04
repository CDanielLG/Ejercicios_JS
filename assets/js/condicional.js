// const nineros = false;
// const hambre = true;

// alert(nineros == hambre);

// alert(nineros || hambre);

//AND
//Todas las condiciones deben ser true

//OR
//Solo una condicion debe ser true
//true || true = true
//true ||false = true
//false || false = false

//NOT
//Es la negacion a la condicion
//True => false , false => true

// let hora = 8;

// if (hora == 8) {
//   alert("Buen dia");
// }
// hora = 3;

// if (hora != 8) {
//   console.log("Buen dia");
// }

// var hungry = false;

// if (hungry == true) {
//   alert("Tengo mal del porky");
// } else {
//   alert("Two mimir");
// }

// var hour = 20;

// if (hour < 18) {
//   alert("Good day");
// } else {
//   alert("Tardes, ya");
// }

// var edad = 21;

// if (edad >= 18) {
//   alert("Crear cuenta");
// } else {
//   alert("bai bai");
// }

// hora = 12;

// if (hora <= 7 && hora > 0) {
//   alert("Buenas madrugadas");
// } else {
//   alert("Que tenga un buen dia");
// }
// hora = 12;

// if (hora > 0) {
//   if (hora <= 7) {
//     alert("Buenas madrugadas");
//   } else {
//     alert("Que tenga un buen dia");
//   }
// } else {
//   alert("Su hora no existe");
// }

function numPar(numero) {
  if (numero % 2 == 0) {
    return "El numero " + numero + " sí es par";
  } else {
    return "El numero " + numero + " no es par";
  }
}
//Funcion para saber si alguien es mayor de 18 años
// function saberEdad(edad) {
//   var añoActual = 2022;
//   var añosCumplidos = añoActual - edad;

//   if (edad <= 0) {
//     return "ingrese un año valido";
//   } else if (añosCumplidos <= 17 && añosCumplidos >= 0) {
//     return "menor de edad, tienes: " + añosCumplidos + " años";
//   } else if (añosCumplidos >= 18) {
//     return (
//       "Felicidades, eres mayor de 18, tienes " +
//       añosCumplidos +
//       " años,preparate para abandonar tus sueños y ser un adulto"
//     );
//   }
// }

// var numero = prompt("Ingrese el numero deseado");
// console.log(numPar(numero));

// var edad = prompt("Ingrese su año de nacimiento");
// console.log(saberEdad(edad));

// Switch

// Obtener la fecha actual

var dia = new Date().getDay();

function evalDate(day) {
  switch (day) {
    case 0:
      return "Domingo";
      break;
    case 1:
      return "Lunes";
      break;
    case 2:
      return "Martes";
      break;
    case 3:
      return "Miercoles";
      break;
    case 4:
      return "Jueves";
      break;
    case 5:
      return "Viernes";
      break;
    case 6:
      return "Sabado";
      break;
  }
}

alert(evalDate(dia));

function carritoCompras(nineros) {
  switch (true) {
    case nineros <= 10:
		return "10 ";
      break;
	case nineros <=50:
		return "50 ";
		break;
	case nineros <=100:
		return "100 ";
		break;
	case nineros <=500:
		return "500 ";
		break;
  }
}
var dinero = prompt("Ingrese el dinero");

alert(carritoCompras(dinero));
