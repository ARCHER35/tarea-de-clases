var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 3;
var res = 0;
var list = [x1,y1][x2,y2];
function puntoMedio(list,res) {
    const puntMedio = Math.floor( list.length / 2);
    if(list[puntMedio]===res){
            return list[puntMedio];
    }
    if (list[puntMedio]< res && list.length > 1) {
        return puntoMedio(list.slice(puntMedio),res);
    }
    if (list[puntMedio]> res && list.length > 1){
        return puntoMedio(list.slice(0,puntMedio),res);
    }
    return puntoMedio;
}
console.log(puntoMedio(list,res));
