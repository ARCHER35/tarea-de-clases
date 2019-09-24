//dado tres notas de un alumno,si el promedio es mayor o igual a siete mostrar el mensaje "promocionado"
//tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; 
//y luego hacer promedio =suma/3;1-10
var res = 0;
function promedio(nota1,nota2,nota3) {
    var res = nota1+nota2+nota3;
    var promedio = res/3 ;
    if (promedio <= 10) {
        console.log(promedio);
        return "Promocionado"        
    }
    else {
        return "no es promocionado"
    }
}
console.log(promedio(8,7,8));
