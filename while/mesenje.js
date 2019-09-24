/**
 * recibir un numero que inicia con 9 y termina con 9 
 * tal que sus digitos intermedios son 0,1,2 o 3 por medio del cual se representa
 * un mensaje encriptado, tal que retorne una tira con el mensaje correspondiente 
 * suponga que 0 = maria, 1= no, 2=esta, 3=feliz.
 * por ejemplo para 90239 retorna " maria esta feliz ", 
 * para 91109 retorna "no no maria". 
 */
mensaje(90239);
function start9(n) {
    var res= parseInt(n/10);
    while (res>10) {
        res = parseInt(res/10)
    }
    return res == 9;
}
function end9(n) {
    var modulo = n%10
    return modulo ==9;
}


function mensaje(numero) {
    if (start9(numero)) {
    if (end9(numero)) {
        console.log("verificado que empiezaen 9 y termina en 9");
        var codigo = ['Maria ','no ','esta ','feliz '];
        numero = parseInt(numero / 10);
        var cadena = "";
        while (numero >10) {
            var modulo = numero %10;
            cadena = codigo[modulo] +""+ cadena;
            numero = parseInt(numero/10);
        }
        console.log(cadena);
    }
    else {
        console.log("no termina en 9");
    }
 } else {
    console.log("no empieza en 9");  
}
}
mensaje(901239);