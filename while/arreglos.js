/**
 * while(condicion){
 * 
 *} 
 */
var list = ['Jose','Andre','Camila','Jhon','Rodrigo'];
var i = 0;
var encontrado = false;
while ((i < list.length) && (encontrado==false)){
    if (list[i]=='Jhon')
    {
        encontrado=true
        console.log('Jhon encontrado en la pocision :',i);
    }
    i++;
}
 var list = ['Jose','Andre','Camila','Jhon','Rodrigo'];
 var i = 0;
 var encontrado1 = false;
 while ((i < list.length) && (encontrado1==false)) {
     if (list[i]=='Rodrigo')
     {
         encontrado1=true
         console.log('Rodrigo encontrado en la pocision :',encontrado1);
     }
     i++;
 }