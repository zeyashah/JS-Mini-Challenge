//Exercise1
// script with two variables, each holding a number; output the addition of the numbers to the console.
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);

// script with two variables, each holding a string; output the combination of two strings to the console-
var fname = "Zeya";
var lname = "Shah";
console.log(fname + " " + lname);


//Exercise 2
// a multidimensional array where 2 items are output in sub-arrays to the console.

var shapes = ["round","long"]; //single or 1D array
var colors = ["green","yellow", "red"];	//single or 1D array
var fruits = ["apple", "pear", "banana", "grapes"]; //single or 1D array

var shapesAndColors = [shapes, colors, fruits]; // multi-dimensional array

// to access data in multidimensional array, calling name of the multidimensional array, and in multiple 
// square brackets pass in 2 indices- 1st index will be the position of the 1D array and the 2nd index 
// is the positon of the value we are trying to get, from that 1D array
console.log(shapesAndColors[0][0]); // print round
console.log(shapesAndColors[2][1]); // print pear

// to output a combination of data, using multiple values from the multidimensional array...
console.log(shapesAndColors[0][0] + " " + shapesAndColors[1][0] + " " + shapesAndColors[2][0]); // print 'round green apple'
console.log(shapes[1] + " " + colors[1] + " " + fruits[2]); // print 'long yellow banana'


// Exercise 3
// Conditional that checks if a variable is less than 100. If it is, alert user that their variable is 
//less than 100. If it is not, let user know what the variable was and that it was greater than 10.

var x = 10

if (x < 100) {
	alert("your variable is less than 100");
} else {
	alert("your variable is " + x + " and it is greater than 100");
}

// Running the script with different values for the variable
var x = 120;

if (x < 100) {
	alert("your variable is less than 100");
} else {
	alert("your variable is " + x + " and it is greater than 100");
}


// Exercise 4
// Declare and run a function that takes a name as an argument and tells the user what name they've entered. 

function alertName(Name){
	return alert("You have entered your name as " + Name);
}

alertName("Zeya");
alertName("Zoe");
//does not need console.log, because the function itself is already creating the alert, on the screen


// Exercise 5

// Declare a function that receives an input of door 1, 2 or 3. 
// Depending upon which virtual "door" was entered, the function will tell the user they've received a different "prize" in an alert. 
// Try running it after it has been declared a few times with each door option.

function enterDoor(doorNumber) {

	if (doorNumber === 1) {
		return alert ("You have selected door 1 and your prize is a Motorola Z-force droid phone");
	}	else if (doorNumber === 2) {
		return alert ("You have selected door 2 and your prize is a Dell Inspiron 15 laptop");
	}	else if (doorNumber === 3) {
		return alert ("You have selected door 3 and your prize is a 60-inch Samsung UNE52360 Smart TV");
	}	else if (doorNumber === 4) {
		return alert ("You have selected door 4 and your prize is an all expenses paid vacation to Hawaii");
	}	else if (doorNumber === 5) {
		return alert ("You have selected door 5 and your prize is a 2017 SILVERADO CHEVY SUV");
	}
}

enterDoor(2) // dont need console.log as the function is already alerting
enterDoor(3)

enterDoor(7) // doesnt not run.... 
// it would work if instead of the last 'else if' we use an 'else' to end the function, then any number 
// (other than 1 thru 4) would meet the last condition.
