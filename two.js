var myObj = [5, [22], [[14]], [[4]],[5,6]];
var array=[].concat.apply([],myObj);
console.log(array);
var array1=[].concat.apply([],array)
console.log(array1);
