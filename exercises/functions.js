//1  - //2 - //4
var num1 = 0;
var num2 = 0;

function suma(num1, num2){
    
    var chequeo = validaciones(num1, num2);

    if(chequeo === null){
        return NaN;
    }

    if(!validateInteger(num1) || !validateInteger(num2)){
        return NaN;
    }

    var resultado = num1 + num2;
    return console.log(resultado);
}

//5
function validaciones(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("Uno de los parámetros no es un número.");
        return null;
    } else if(!validateInteger(num1) || !validateInteger(num2)){
        alert("Uno o los dos números son decimales, por lo tanto serán redondeados.");
    
        var num1Redondeado1 = Math.round(num1);
        var num1Redondeado2 = Math.round(num2);

        return console.log(num1Redondeado1 + num1Redondeado2);
    }
}


//3
function validateInteger(num1){
    if(Number.isInteger(num1)){
        return true;
    } else {
        return false;
    }
}



//resultados
suma(5, 7);
suma('Fifa', 26);
console.log(validateInteger(5));
console.log(validateInteger(7.9));
console.log(validateInteger('Veinte'));
suma(18.9, 3.4);