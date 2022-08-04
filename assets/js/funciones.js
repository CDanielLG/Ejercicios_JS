//simplificar func. lo mas que se pueda

//1.-Utilizar keyword function
//2.-Nombrar nuestra funcion
//3.-utilizar () y abrir y cerrar la funcion {}

function myFunction() {
  //Aqui va el cuerpo de la funcion
  console.log("Hola mundo");
}

myFunction();

function myName() {
  let name = "Daniel lopez";
}
function scopeFunction() {
  let local = "Esto se encuentra dentro de la funcion";
  console.log(local);
}

// scopeFunction();
// console.log(local);

var nombre = "Daniel Lopez";

function globalScope() {
  console.log(nombre);
}

// globalScope();

//Scope de variables
//LET
//Scope global, local
//Hoisting: la variable no existe para nuestro interprete de JS
// console.log(a);
let a = "Hoisting let";
//VAR
//Scope,global,local
//Hoisting: No se puede utilizar o invocar antes de declararla

// console.log(x);
var x = "hola";

//CONST
//Scope global, local
//Hoisting: No se puede uilizar, no existe para nuestro interprete js
// console.log(c);
const c = "Hoisting const";

const miNombre = "Daniel López";

function fiuFiu(x, y) {
  console.log(x);
  console.log(y);
}

fiuFiu(miNombre);
fiuFiu(3);
fiuFiu(miNombre, 2);

function out() {
  let x = "Hola";
  return x;
}
console.log(out());

const receive = out();

// console.log(receive);

//Funcion con parametro y return



function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));
