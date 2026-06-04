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


//4
var _string4 = 'Poco a poco vamos conociendo el mundo de JavaScript utilizando:'

function stringVariado(_string4){ 
    var _nuevoString = 'Visual';
    var _stringCombinado = _string4.toUpperCase().substring(0, 29) + _nuevoString.toLowerCase();
    return console.log(_stringCombinado);
}


//5
var _string5= 'Otorrinolaringologo son especialistas en enfermedades de oído, nariz y garganta.';

function encontrarEspacios(_string5){
    var posicionPrimerEspacio = _string5.indexOf(' ');
    return console.log(posicionPrimerEspacio);
}


//6
var _string6 = 'otorrinolaringología mecanografía';

function formarOracion(_string6){
    var primeraLetra1 = _string6.substring(0, 1).toUpperCase();
    var posicionEspacio = _string6.indexOf(' ');
    var restoTexto1 = _string6.substring(1, posicionEspacio).toLowerCase();

    var primeraLetra2 = _string6.substring(posicionEspacio + 1, posicionEspacio + 2).toUpperCase();
    var restoTexto2 = _string6.substring(posicionEspacio + 2).toLowerCase();

    var oracion = primeraLetra1 + restoTexto1 + ' y ' + primeraLetra2 + restoTexto2;
    return console.log(oracion);
}



//resultados
convertirMayusculas(_string1);
recortarString(_string2);
mostrarUltimosTres(_string3);
stringVariado(_string4);
encontrarEspacios(_string5);
formarOracion(_string6);