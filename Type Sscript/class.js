var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// intaerface as type
var e1 = { name: "hmad", Id: 23, getSalary: function () { return 500; } };
console.log(e1.getSalary());
// class : propaties , methd , constructor
var employee = /** @class */ (function () {
    function employee(id, name) {
        this.emId = id;
        this.empName = name;
    }
    employee.prototype.info = function () {
        return "name : " + this.empName + "   id : " + this.emId;
    };
    return employee;
}());
var emp = new employee(123, "malak");
console.log(emp.info());
// inhertance 
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var C = /** @class */ (function () {
    function C() {
        console.log("hi");
    }
    return C;
}());
var employe1 = /** @class */ (function (_super) {
    __extends(employe1, _super);
    function employe1(id, name) {
        var _this = _super.call(this, name) || this;
        _this.empId = id;
        return _this;
    }
    employe1.prototype.display = function () {
        console.log("name : " + this.name + " id : " + this.empId);
    };
    return employe1;
}(person));
var obj = new employe1(5265, "amal");
obj.display();
var employee2 = /** @class */ (function () {
    function employee2(ID, name) {
        this.id = ID;
        this.name = name;
    }
    employee2.prototype.display = function () {
        console.log("hi");
    };
    return employee2;
}());
var em = new employee2(556, "ali");
em.display();
var A = /** @class */ (function () {
    function A(name, Age) {
        this.name = name;
        this.Age = Age;
        console.log(this.name);
    }
    return A;
}());
var obj1 = new A("hjm", 156);
