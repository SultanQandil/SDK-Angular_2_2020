function Sum (a,b)
{
    return a+b
}
// es6
let Sum1 = function(a,b)
{
    return a+b

}
// with data type 
let Sum2 = function(a :number,b :number) :number
{
return a+b

}
Sum2(2,6) 

// lambda 
var Sum3 = (a :number,b :number) :number => {return a+b}

// rest parameter  : passing to multiple number of paramet 
function Sum4 (...nums){
   let  sum =0 
   for( var i  of nums)
   {
      sum+=i
   }
   console.log(sum)
}
Sum4(1,2)
Sum4(1,2,3)


// defualt value 

function Sum5 (a : number = 0 ,b :number = 0){
    return a+b
}
console.log(Sum5( 1))
// ptional parameter
function Sum6 (a : number = 0 , b?:number ){
    return a
}
console.log(Sum6( 1))
