// decorator  : runTime

// function sealed(targe)
// {
//     do something with target 
// }
// @name 

// function decorator (constructor : Function ) {
//     console.log("functon : " , constructor)
    
// }


// @decorator
// class classDectator {
//     name  : string ;
//    constructor (n : string) {
//        this.name = n
//        console.log(this.name)
//    }
// }


// add parameter 
function num(constructor : Function) {
    constructor.prototype.num = 100
    
}
@num
class C {
    name  : string ;
   constructor (name : string) {
       this.name = name
   }
   display (){
       console.log(`the num from dec : ${this.num}`)

   }
} 
new C("nn").display()