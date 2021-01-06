var age  = 30 
if (age >20)
{
    var msg = "adult" // global
}
console.log(msg)

if (age >20)
{
    let msg1 = "adult" // local
}
console.log(msg1)


// let varName : dataType 

let Age :number  = 15
let Isyouth : boolean = true
let Name : string = "ahmad"
let info : string = `name : ${Name}` + `age : ${age}`

// swaping variabl
var x = 5 ;
var y = 6 ;
[x,y] = [y,x]

// array 
// way one 
let arrNumb : number[] = [1,23]
let arrnme : string[] = ["fares","sultan"]
// way tow 
let arrnum : Array<number> =  [1,2,3]
let [a,b,c] = arrnum

// tuple : array with diifearance data type & spacific element 
let t :[number , string , boolean] ;
t = [5,"five",true]
t[0]

// enum : give numaric names 

enum letter 
{
a =6,
b =10,
c=2,
d
}
console.log(letter.d)

let m:any ;
let s :number ;
s= m

let m1:unknown ;
let s1 :number ;
s1= m1

// type assertion 
let v : any ;

(v as string );
(<string> v);
console.log(typeof(v))