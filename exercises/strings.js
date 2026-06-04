//1
var _string1 = 'Estoy en 4to año de Ingeniería en Sistemas';

function convertirMayusculas(_string1){
    var textoMayusculas = _string1.toUpperCase();
    return console.log(textoMayusculas)
}


//2
var _string2 = 'Aprendiendo programación Web en 2026';

function recortarString(_string2){
    var corte = _string2.substring(0, 5);
    return console.log(corte);
}


//3
var _string3 = 'Estamos programando en el salón con la propaganda Lenovo';

function mostrarUltimosTres(_string3){
    var corte2 = _string3.substring(_string3.length - 3);
    return console.log(corte2);
}



//resultados
convertirMayusculas(_string1);
recortarString(_string2);
mostrarUltimosTres(_string3);