

//Ejercicio 1 "Generar una piramide"
 let numeroRepeticion =  prompt("Ingrese el numero de escolones de la piramide");

 for(let i=1; i<=numeroRepeticion;i++)
 {
   
    for(let j=0; j<i;j++)
    {
       document.write(j+1);
    }
    document.write("<br>");
 }   

 document.write("<br>");

//Ejercicio 2 "Generar una funcion para Comparar 2 array y generar uno nuevo con los elementos que coniciden"

let matr1 = [3, 7, 9, 11];
let matr2 = [3, 12, 7, 19];
let arrRepetidos=[];

function compararMatriz(matriz1, matriz2){
   for(let i=0; i < matriz1.length ; i++)
   {
      for(let j=0; j < matriz2.length;j++)
      {
         
            if (matriz1[i]===matriz2[j])
            {
               arrRepetidos.push(matriz1[i]);
            }
      }
   }
   return arrRepetidos;   
}   

console.log(compararMatriz(matr1,matr2)); 


//Ejercicio 3 Clase Carrito

class carrito {
   montoTotal;
   productos;
   constructor(montoTotal, productos){
      this.montoTotal = montoTotal;
      this.productos = productos;
   } 

   agregarproducto(){

   }
}
