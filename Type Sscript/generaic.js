function getArr(items) {
    return new Array().concat(items);
}
var numArr = getArr([1, 2, 3]);
var strArr = getArr(["a", "b"]);
numArr.push("kj");
console.log(numArr);
