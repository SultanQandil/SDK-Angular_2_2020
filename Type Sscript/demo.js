//var age  = 30 
// if (age >20)
// {
//     var msg = "adult" // global
// }
// console.log(msg)
var _a;
// if (age >20)
// {
//     let msg1 = "adult" // local
// }
// console.log(msg1)
// let varName : dataType 
var age = 15;
var Isyouth = true;
var Name = "ahmad";
var info = "name : " + Name + ("age : " + age);
// swaping variabl
var x = 5;
var y = 6;
_a = [y, x], x = _a[0], y = _a[1];
// array 
// way one 
var arrNumb = [1, 23];
var arrnme = ["fares", "sultan"];
// way tow 
var arrnum = [1, 2, 3];
var a = arrnum[0], b = arrnum[1], c = arrnum[2];
// tuple : array with diifearance data type & spacific element 
var t;
t = [5, "five", true];
// enum : give numaric names 
var letter;
(function (letter) {
    letter[letter["a"] = 6] = "a";
    letter[letter["b"] = 10] = "b";
    letter[letter["c"] = 2] = "c";
    letter[letter["d"] = 3] = "d";
})(letter || (letter = {}));
console.log(letter.d);
var m;
var s;
s = m;
// type assertion 
var v;
v;
v;
console.log(typeof (v));
