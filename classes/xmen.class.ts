export class Xmen{
	nombre:string;
	clave:string;
	constructor(nombre:string,clave:string) {
		this.nombre=nombre;
		this.clave=clave;
		// code...

	}
	imprimir()
	{
		console.log(`${this.nombre} - ${this.clave}`);
	}
	
}