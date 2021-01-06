// inteface create
interface IEmployee{
    name : string ,
    Id  : number,
    getSalary() : number 
        
    }
// intaerface as type
let e1 : IEmployee = {name:"hmad" ,Id :23, getSalary : function  () { return 500 } }
        
console.log(e1.getSalary())  

// class : propaties , methd , constructor
class employee {
    emId : number ;
    empName : string ;
    constructor (id :number , name : string )
    {
       this.emId  = id 
       this.empName = name 
    }
    info (){
        return `name : ${this.empName}   id : ${this.emId}`
    }
}

let emp = new employee(123, "malak")
console.log(emp.info())

// inhertance 

class person {
    protected name : string ; 
    constructor (name : string )
    {
        this.name = name 
    }
}
class C {
    constructor()
    {
console.log("hi")
    }
}
class employe1 extends person  {
 empId : number ;
 constructor (id : number , name : string )
 {
   super(name)
   this.empId = id 

 }
 
  display () {
     console.log (`name : ${this.name} id : ${this.empId}`)
 }
}

let obj = new employe1(5265,"amal" )
obj.display()



// class implent interfaces 
interface Iperson{
    name : string ;
    display ()  : void ;
} 

interface Iemployee{
    
    id   : number ;
} 

class employee2 implements Iperson , Iemployee{
     id  : number  ;
     name : string ;
     constructor( ID : number , name : string )
     {
        this.id = ID ;
        this.name = name ;
     }

     display (){
         console.log("hi")
     }

}
let em = new employee2(556,"ali")
em.display()

class A {
   constructor (private name : string ,private Age : number) 
   {
       console.log(this.name)
   }
}
let obj1 = new A("hjm",156)
