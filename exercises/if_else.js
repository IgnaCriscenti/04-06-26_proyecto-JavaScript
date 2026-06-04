//1
var numAleatorio = Math.random();
if(numAleatorio > 0.5){
    console.log("Greater than 0.5.");
} else{console.log("Lower than 0.5");}


//2
var Age = (Math.random() * 101);
if(Age < 2)
    { console.log('Es un bebé.');}
else if(Age >= 2 && Age <= 12)
    { console.log('Es un niño.');}
else if(Age >= 13 && Age <= 19)
    { console.log('Es un adolescente.');}
else if(Age >= 20 && Age <= 30)
    { console.log('Es un joven.');}
else if(Age >= 31 && Age <= 60)
    { console.log('Es un adulto.');}
else if(Age >= 61 && Age <= 75)
    { console.log('Es un mayor.');}
else if(Age > 75)
    { console.log('Es un anciano.');}