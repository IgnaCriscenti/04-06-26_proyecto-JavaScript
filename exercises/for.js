//1
var arrayScaloni = ['messi', 'lo celso', 'molina', 'nico paz', 'mac allister'];

for(let i=0; i < arrayScaloni.length; i++){
    alert(arrayScaloni[i]);
}


//2
for(let i=0; i < arrayScaloni.length; i++){
    var jugador = arrayScaloni[i];
    var primeraLetraJug = jugador.substring(0, 1).toUpperCase();
    var restoTextoJug = jugador.substring(1).toLowerCase();

    var jugadorModificado = primeraLetraJug + restoTextoJug;
    alert(jugadorModificado);
}


//3
var sentence = '';
for(let i=0; i < arrayScaloni.length; i++){
    sentence += arrayScaloni[i] + ' ';
    alert(sentence);
}


//4
var arrayVacio = [];
for(let i=0; i < 10; i++){
    arrayVacio.push(i);
}
console.log(arrayVacio);
