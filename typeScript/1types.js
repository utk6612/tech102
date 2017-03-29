var Designations;
(function (Designations) {
    Designations[Designations["Developer"] = 0] = "Developer";
    Designations[Designations["Tester"] = 1] = "Tester";
    Designations[Designations["Architect"] = 2] = "Architect";
    Designations[Designations["NetworkEngineer"] = 3] = "NetworkEngineer";
})(Designations || (Designations = {}));
var myDesign;
myDesign = Designations.Tester;
console.log(myDesign);
console.log(Designations[myDesign]);
var cars = ['Hyundai', 'Honda', 'BMW'];
var arrayOfStrings;
var anyArray = [1, 'i20', 200, true];
