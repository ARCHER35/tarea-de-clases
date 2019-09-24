var numero = [];
var i = 1;
var sumatoria = 0;
while (i <= 20) {
    var numeros = Math.floor(Math.random()*(20 - 1))-1;
    numero.push(numeros);
    console.log(numeros);
    i = i +1;
    if (numeros % 2 == 0) {
    sumatoria = sumatoria + numeros;
    }
}
console.log('La sumatoria es: ',i); 
console.log('el promedio de los inpares es: ',sumatoria/20);
