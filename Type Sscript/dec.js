// decorator  : runTime
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function num(constructor) {
    constructor.prototype.num = 100;
}
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    C.prototype.display = function () {
        console.log("the num from dec : " + this.num);
    };
    C = __decorate([
        num
    ], C);
    return C;
}());
new C("nn").display();
