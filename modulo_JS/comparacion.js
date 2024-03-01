//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4);
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3); /* == verifica que sea igual el valor */  
console.log (3 === 3); /* === igualdad estricta, verifica que sea igual el tipo de dato y el valor */
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad
var a = 1; /* = es valor de asignación */
var b = 2;
var c = a = b;
console.log (c); 