var list = ["lines","martes","miercoles","jueves","viernes","sabado","domingo"];
var i = 0;
var x = 1;
function dias(x) {
    dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    if(x<=7 && x >=1){
    return dias[x-1];
    }
}
console.log(dias(x));
var m = 1;
function meses(m) {
    meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    if(m<=12 && m >=1){
        return meses[m+10];
    }
}
console.log(meses(m));
