var numero = 79177798;
var i = 0;
var cantDig =0;
while (numero>0) {
    let res = parseInt(numero/10);
    numero=res
    cantDig++
}
console.log(cantDig);
