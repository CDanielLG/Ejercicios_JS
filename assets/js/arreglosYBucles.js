//Arrays o arreglos
//Definicion
//un arreglo o array es un conjunto de datos que se pueden almacenar
//en una sola variable

//Cuando tenemos una variable, la usamos para almacenar UN solo dato.
//en cambio, en un arreglo, guardamos MUCHOS datos a manera de lista

//Un array a no es un tipo de dato primitivo, se considera un objeto
//porque es una estructura de datos
let nombre = "Daniel";

//Ejemplo 1
// array = ["Felipe", "Ivonne","Briana","Zabdiel","Alonso"];

//Ejemplo 2
// arrayAnimalitosDelBosque = ["Daniel",23,true,null,undefined];

//------Formas de crear un array----------

//1.-primera forma
//Utilizando la palabra reservadas "new Array"
//var marcaDeColores = new Array ("Mapita")

// En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

// var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

// var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

// 2.- Segunda Forma

// La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.

// var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

// //Ejemplos de Arreglos
// listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
// console.log(listaDePerritos);

// //Ejemplo de Arreglo 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
// console.log(listaDelSuper)

var marcaDeColores2 = [
  "Mapita",
  "Norma",
  "Vividel",
  "Faber Castell",
  "BlancaNieves",
];

//Ejemplos de Arreglos
listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper);

var top5PeliculasAnime = [
  "me quiero comer tu pancreas",
  "your name",
  "La tumba de las luciernagas",
  "El castillo vagabundo",
  "El viaje de chihiro",
];
console.log(top5PeliculasAnime);

ListaDeAnimes = [
  "Dragon Ball Z",
  "One Piece",
  "Digimon",
  "Naruto Shippuden",
  "Pokémon",
];
console.log(ListaDeAnimes);

var cancionesKanye = [
  "Bound 2",
  "Fade",
  "Last Call",
  "Wolves",
  "Saint Pablo",
  "New Slaves",
  "I AM A God",
];
console.log(cancionesKanye);

marcasDeGuitarras = [
  "Fender",
  "Gibson",
  "Epiphone",
  "Yamaha",
  "ESP",
  "Ibanez",
  "Gretsch",
  "Paul Reed Smith",
];
console.log(marcasDeGuitarras);
mangas = ["the boxer", "one punch man", "super campeones", "hajime no hippo"];
console.log(mangas);

listaDePeliculas = ["Whiplash", "Django", "Star Wars", "Toy Story", "Batman"];
console.log(listaDePeliculas);

marcasDeTelefonos = ["Samsung", "Oppo", "Motorola", "Xiaomi", "Iphone"];
console.log(marcasDeTelefonos);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);
//ejemplo de e-commerce
let propiedadesDeMiComputadora = {
  marca: "Asus",
  modelo: "GL552JX",
  procesador: "Intel Core i7",
  ram: "16 GB",
  almacenamiento: "1 TB",
  precio: "1500",
};
console.log(propiedadesDeMiComputadora);
console.log(
  "La RAM de mi computadora es de: ",
  propiedadesDeMiComputadora["ram"]
);
console.log(
  "la marca de la computadora que elegiste es:",
  propiedadesDeMiComputadora["marca"],
  "y su precios es: ",
  ["precio"]
);

//Ejemplo de una Red Social
let publicacionRedSocial = {
  nombre: "Felipe",
  usuario: "@felipecontenis",
  fecha: "Agosto",
  likes: "5000",
  descripcion: "Esta es una bonita foto de lasagna",
  ubicacion: "Estado de Mexico",
};

console.log(
  "Estas son las publicaciones de Agosto: ",
  publicacionRedSocial["fecha"]
);

/*
Metodos de los arrays

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo.Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);


podemos dividir estos metodos en 3:
-Metodos transformadores
-metodos accesores
-metodos repetitivos;
*/

console.log("//////////////////////////////");
var arrayDeEjemplo = [
  "manzanas",
  "peras",
  "Mangos",
  "mandarinas",
  "uvas",
  "Sandia",
  "fresas",
];

console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);

//Metodos transformadores

//push():Agrega un elemento al final del arreglo
arrayDeEjemplo.push("pitaya");
console.log("Agregamos la pitaya a nuestro");

//pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al principio del arreglo

arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "Lichi");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);

//shift(): eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el
//arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice():extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)

var saludo1 = "Hola, estoy aprendiendo arreglos en generation";
var saludo2 = saludo1.slice(7, 9);
console.log(saludo2);

//splice(): Modificar el arreglo en 3 formas distintas

// - Eliminar elementos del arreglo
// - Agregar elementos nuevos al arreglo
// - Reemplazar elementos que ya existen en el arreglo

// Sintaxis basica

// splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

//     - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
//     - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
//     - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

// */

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

// Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

//Agregar elementos sin borrar nada del arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log(diasSemana);
console.log("Los nuevos dias de la semana son: ", diasSemana);

//Metodos accesores

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//Lenght(): Nos permite saber el numero de elementos o longitud

console.log("Tenemos estos elementos en el arreglo ensalada", ensalada.length);

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join("-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = [
  "galletas",
  "chetos",
  "glorias",
  "galletas",
  "gansitos",
  "picafresas",
  "tamborines",
  "galletas",
];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);

//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log(
  "La posicion de los chetos de mi arreglo dulces: ",
  dulces.indexOf("chetos")
);

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log(
  "La ultima posicion de las galletas es: ",
  dulces.lastIndexOf("galletas")
);

//toString(): nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueof(): Nos permitir devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

// let listaNumeros = [3, 6, 8, 10, 12,];
// let impar = 3;

// var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
//     if (numero === impar){
//         listaNumeros.shift();
//     }
// });

// console.log("Estos son los elementos del array que no son impares", listaNumeros);
//----------------------------------------------------------------------------------------------------------------------------------------

/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false


Normalmente tenemos 3 ciclos
 -while
 -Do while
 -for

 Tenemos otras sentencias mas especificas:
    -for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    -for of: Sirve para recorrer un arreglo, y por cada uno de los
    elementos de este arreglo, obtenemos SU VALOR

*/
/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHILE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


*/

let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}
/**
 1-> ingresamos un 5
 2-> inicial vale 1
 3-> 1 es menor o igual a 5? sí
 4-> entonces dividimos 1 entre 2. El residuo es diferente a 0? sí
 5-> entonces imprimimos el inicial que es 1
 6-> termina el bucle, imprimimos el numero inicial que es 1
 7-> sumamos uno al inicial
 8-> inicial ahora vale 2
 **********************************************************************
 1-> ingresamos un 5
 2-> inicial vale 1
 3-> 2 es menor o igual a 5? sí
 4-> entonces dividimos 2 entre 2. El residuo es diferente a 0? no
 5-> no imprimimos el valor inicial
 6-> sumamos uno al inicial
 7-> inicial ahora vale 3
 8-> 
 **********************************************************************
 1-> ingresamos un 5
 2-> inicial vale 3
 3-> 3 es menor o igual a 5? sí
 4-> entonces dividimos 3 entre 2. El residuo es diferente a 0? sí
 5-> entonces imprimimos el inicial que es 3
 6-> termina el bucle, imprimimos el numero inicial que es 3
 7-> sumamos uno al inicial
 8-> inicial ahora vale 4
  **********************************************************************
 1-> ingresamos un 5
 2-> inicial vale 4
 3-> 4 es menor o igual a 5? sí
 4-> entonces dividimos 4 entre 2. El residuo es diferente a 0? no
 5-> no imprimimos el valor inicial
 6-> sumamos uno al inicial
 7-> inicial ahora vale 5
  **********************************************************************
 1-> ingresamos un 5
 2-> inicial vale 5
 3-> 1 es menor o igual a 5? sí
 4-> entonces dividimos 5 entre 2. El residuo es diferente a 0? sí
 5-> entonces imprimimos el inicial que es 5
 6-> termina el bucle, imprimimos el numero inicial que es 5
 7-> sumamos uno al inicial
 8-> inicial ahora vale 6
  **********************************************************************
 1-> ingresamos un 5
 2-> inicial vale 6
 3-> 6 es menor o igual a 5? no
 4-> se termina el bucle
  **********************************************************************

 */
/*
 Do while(Hacer mientras o hacer hasta)

 El bucle do while nos sirve para ejecutar una sentencia
 especificada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

 En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instriccion al menis una vez, y luego preguntamos la condicion.

 Estructura basica de un do while

 palabraReservada do{
  //codigo a ejecutar
 }
 while(condicion)

 Ejemplo 1
 */
let numerito = 0;

do{//esto se hará...
  console.log("El numero es: "+numerito);
  numerito ++;
}
while (numerito<=10);

/**
 Sentencia FOR(para)

 Este ciclo sirve para iterar sobre una seccion de una variable. Es
 diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:

 -El valor inicial de la variable que vamos a iterar(i=0)
 -La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i<5)
 -La operacion que se realiza una vez que termina el bucle (i++)

 Estructura basica del for:

 for (valor inicial, condicion, operacion){
 }
 */

 //EJEMPLO:

 console.log("For");
 for (let i=0;i<10;i++){
  console.log(i);
 }

 //let i=0 es mi valor inicial
 //i <5 establece la condicion para que el bucle se siga ejecutando
 //i++ incrementa el valor en 1

//  let arrayAnimalitosDelBosque=["ardillas", "conejos","venados","osos","mariposas"];

 //in: posiciones EN el arreglo

//  for (posiciones in arrayAnimalitosDelBosque){
//   console.log(posiciones)
//  }

 //of: valores DEL arreglo
//  for (valores of arrayAnimalitosDelBosque) {
//   console.log(valores)
//  }
