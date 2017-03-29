var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    //In contructor overloading we have define arguments as optional in default constructor
    //But the theld,theName and theSpeed are not optional. It is only for definition.
    function Car(theld, theName, theSpeed) {
        this.id = theld; //initailization
        this.name = theName;
        this.speed = theSpeed;
    }
    Car.prototype.Accelerate = function () {
        console.log("The car " + this.name + " is running @ " + this.speed + " kmph");
    };
    return Car;
}());
var c = new Car();
//console.log(c.Accelerate);
var Car2 = (function () {
    function Car2(id, name) {
        this.id = id;
        this.name = name;
    }
    return Car2;
}());
var Car3 = (function () {
    function Car3(theld, theName, theSpeed) {
        this.id = theld;
        this.name = theName;
        this.speed = theSpeed;
        console.log("Within Car3");
    }
    return Car3;
}());
var JamesBondCar = (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(theld, theName, theSpeed, useNitro) {
        var _this = _super.call(this, theld, theName, theSpeed) || this;
        _this.useNitro = useNitro;
        console.log("Within James Bond");
        return _this;
    }
    return JamesBondCar;
}(Car3));
var James = new JamesBondCar(1, "Lambo", 235, true);
//both parent and derived class should have constructor if one them has.
//otherwise both should not have. 
