let nombre:string="Ricardo Tapia";
let edad :number= 23;
const PERSONAJE :{nombre:string,edad:number}= {
  nombre: nombre,
  edad: edad
};

console.log(`Nombre ${nombre}`);
console.log(`Edad ${edad}`);

interface heroe{nombre:string,artesMarciales:string[]};

let batman:heroe={nombre:"Brucce",artesMarciales:["kung fu","judo"]};

console.log(batman);

// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2
}*/
let resultadoDoble=(a:number,b:number)=>(a+b)*2;

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
function getAvenger(nombre:string,poder?:string,arma:string="arco"){
let mensaje;
if(poder)
{
	mensaje=`${nombre}  tiene el poder de : ${poder} y un arma : ${arma}`;
}
else{
	mensaje=`${nombre} tiene un ${poder}`;
}
}
console.log(getAvenger( "Thor"));

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class rectangulo{
	
	base:number;
	altura:number;
	constructor(base:number,altura:number)
	{
		this.base=base;
		this.altura=altura;
	}
	 area():Number{
	 	return this.base*this.altura;
	 }

}