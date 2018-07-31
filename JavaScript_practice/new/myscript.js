function addNum(num1, num2){
  if (isNaN(Number(num1)) || isNaN(Number(num2))){
    console.log("The arguments should be number.");
  } else {
    var result = Number(num1) + Number(num2);
    console.log("The result is: " + result);
  }
}
// var num1 = prompt("Give the first number:");
// var num2 = prompt("Give the second number:");
// addNum(num1,num2);
