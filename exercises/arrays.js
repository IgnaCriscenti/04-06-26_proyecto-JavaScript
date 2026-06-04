//1
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarMeses5y11(arrayMeses){
    console.log(arrayMeses[4] + ' y ' + arrayMeses[10]);
}


//2
function ordenarAlfabeticamente(arrayMeses){
    console.log(arrayMeses.sort());
}


//3
arrayMeses.unshift("Messi");
arrayMeses.push("Di Maria");
console.log(arrayMeses);


//4
arrayMeses.shift();
arrayMeses.pop();
console.log(arrayMeses);


//5
function invertirArray(arrayMeses){
    console.log(arrayMeses.reverse());
}


//6
function separarPorGuion(arrayMeses){
    console.log(arrayMeses.join(' - '));
}


//7
function integracionMeses(arrayMeses){
    copiaMeses = ["Enero", "Febrero", "Marzo", 
                "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", 
                "Octubre", "Noviembre", "Diciembre"];

            
    console.log(copiaMeses.slice(4, 11));
}

//resultados
mostrarMeses5y11(arrayMeses);
ordenarAlfabeticamente(arrayMeses);
invertirArray(arrayMeses);
separarPorGuion(arrayMeses);
integracionMeses(arrayMeses);

