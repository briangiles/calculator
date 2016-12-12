//add
var add = function(number1, number2) {
	return number1 + number2;
};

//parseInt converts users inputed text from a String and converts it to a number
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

//subtract
var subtract = function(number1, number2) {
  return number1 - number2;
};

//multiply
var multiply = function(number1, number2) {
  return number1 * number2;
};

//divide
var divide = function(number1, number2) {
  return number1 / number2;
};

//Result (add, subtract, multiply, divide)
//var result = add(number1, number2); //add
//var result = subtract(number1, number2);
//var result = multiply(number1, number2);
var result = divide(number1, number2);
alert(result);
