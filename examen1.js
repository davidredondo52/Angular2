var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log("Nombre " + nombre);
console.log("Edad " + edad);
;
var batman = { nombre: "Brucce", artesMarciales: ["kung fu", "judo"] };
console.log(batman);
// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2
}*/
var resultadoDoble = function (a, b) { return a + b; };
/* Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};*/
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de : " + poder + " y un arma : " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
console.log(getAvenger("Thor"));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = (function () {
    function rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    rectangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return rectangulo;
}());
