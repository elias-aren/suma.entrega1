function cargarArreglo(Arreglo1:number[]): void{  
let indice: number;
for(indice=0;indice<Arreglo1.length;indice++){
Arreglo1[indice]= Number(prompt("ingrese un numero"));
}
}
function sumaDeArreglos(v1: number[],v2: number[],vSuma:number[]):void{
let indice: number;    
for(indice=0;indice<v1.length;indice++){
vSuma[indice]=v1[indice]+v2[indice];
}
}
function mostrarSuma(vector: number[]): void{
let indice: number;
for(indice=0;indice<vector.length;indice++){
    console.log(vector[indice]);
}
}
let arregloA: number[]=new Array(6);
let arregloB: number[]=new Array(6);
let arregloSuma: number[]=new Array(6);
cargarArreglo(arregloA);
cargarArreglo(arregloB);
sumaDeArreglos(arregloA,arregloB,arregloSuma);
mostrarSuma(arregloSuma);
