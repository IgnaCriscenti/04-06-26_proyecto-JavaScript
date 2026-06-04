//1
var num1 = 2;
var num2 = 5;
var resultado = 0;

function suma(num1, num2){
    resultado = num1 + num2;
    return console.log(resultado);
}

//2
var string1 = 'Hola';
var string2 = ' ¿Cómo estás?';
var oraciones = '';

function oracion(string1, string2){
    oraciones = string1 + string2
    return console.log(oraciones);
}


//3
var string3 = 'Rosario Central se fundó en el año 1889.';
var string4 = 'Es el único equipo del interior con contar con una copa internacional: la Conmebol del año 1995.';
var sumador; 

function contarLetras(string3, string4){
    sumador = string3.length + string4.length;
    return console.log(sumador);
}


//console log
suma(num1, num2);
oracion(string1, string2);
contarLetras(string3, string4);

