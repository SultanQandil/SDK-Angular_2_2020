import { Component, OnInit } from '@angular/core';


interface employee{
  name :string ;
  salary : number ;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  isVslid :boolean = true; 
  username :string  ="";
  msg :string ="anngular ";
  num : number = 5;
  imgUrl = "https://via.placeholder.com/150"; // prop Biding
  hide : boolean = true;
  say(){ // event Biding
      alert("hii") ;
  }
  sayHi(name :string){ // event Biding
      alert("hii"+name) ;
  }

 
 emp : Array<employee> ;
 constructor (){
     this.emp = [
         {name: "sultan " , salary : 600} ,
         {name: "fares " , salary : 61100}
     ]
 }

reload(){
  this.emp = [
      {name: "sultan " , salary : 600} ,
      {name: "fares " , salary : 61100},
    {name: "malak " , salary : 61100},
    

  ]
}

track (index:number ,emp:employee){
  return emp.name
}

color =["red","green","black"];
n:string="";
// reload1(){
//     this.emp = [
//         {name: "sultan " , salary : 600} ,
//         {name: "fares " , salary : 61100},
//       {name: "malak " , salary : 61100},
//       {name: "malak " , salary : 61100},

    

//     ]
// }


  ngOnInit(): void {
  }

}
