function Sum(a, b) {
    return a + b;
}
// es6
var Sum1 = function (a, b) {
    return a + b;
};
// with data type 
var Sum2 = function (a, b) {
    return a + b;
};
Sum2(2, 6);
// lambda 
var Sum3 = function (a, b) { return a + b; };
// rest parameter  : passing to multiple number of paramet 
function Sum4() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var i = nums_1[_a];
        sum += i;
    }
    console.log(sum);
}
Sum4(1, 2);
Sum4(1, 2, 3);
// defualt value 
function Sum5(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(Sum5(1));
function Sum6(a, b) {
    if (a === void 0) { a = 0; }
    return a + b;
}
console.log(Sum6(1));
