var list = [10,3,100,8,34,23,56,35,200];
var i = 0;
var array = 0;
for (var i=0; i < list.length; i++) {
    for (var j=i+1;j<list.length;j++){
        if (list[i]>list[j]) {
            var aux = list[i]
            list[i] = list[j]        
            list[j] = aux
        }   
    }
}
console.log(list);
var array = list.reverse();
console.log('reversed',list);


