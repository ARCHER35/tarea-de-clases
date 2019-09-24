var numero = 79177798;
var inv = 0;
var i = 0;
var residuo = 0;
while (numero>0) {
    inv = numero%10;
    residuo=residuo*10+inv;
    numero=parseInt(numero/10)
}
console.log(residuo);
