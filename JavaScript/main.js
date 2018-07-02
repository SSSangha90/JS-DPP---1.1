
/*
console.log("Web page is linked"); // checking the console to see the webpage is linked. 

var nameOfVariable; // Declaration, key word and naming the variable. 

nameOfVariable = 'Hello World!'; //initialising
//  data type is assigned. 

var test = "Hello"; // better practice. 

console.log(test);

test = 'goodbye'; 

console.log(test); 

*/

// makesure the naming convent doesn't match a function. If you really need to, use an underscore (_) before it. 
// do not start a variable with a number. 
// avoid naming variables with the same name, including on sepearate JS scripts

/* DATA types
Number
Boolean
String
undefined
Object
null */


//----------FUNCTIONS-----------//

// declares our function


/* function nameOfFunction(){
    
    var text; // this is a local variable 
    // can carry the same name as the global without conflict
    
    text = "This is JavaScript week"; 
    
    console.log(text);
}

function secondFunction(){
    
    text;
}

nameOfFunction(); // runs our function

alert("How are you?");

alert(nameOfFunction);

*/

/*

function _basicMath(){
    var a = 2;
    var b = 5; 
    var c = (a + b);
    console.log(c);
}

_basicMath();

*/ 

/*

function newMath(a, b){
    var c = a * b; 
    
    return("The answer is " + c);
}

console.log(newMath(6, 4)); 
*/

// applying JavaScript to HTML // 

// exercice one //

/*

var _eventListener = document.getElementById("userButton").addEventListener('click',addSums);

function addSums(){
    
    // first math equation, adding 1st and 2nd input // 
    
    console.log("Function is working"); 
    
    var userInput = 
    document.getElementById("ourUserInput").value;
    
    console.log(userInput); 
    
    var secondInput = 
    document.getElementById("secondUserInput").value;
    
    console.log(secondInput);
    
    var thirdInput = 
    document.getElementById("thirdUserInput").value;
    
    console.log(thirdInput);
    
    var output = parseInt(userInput) + parseInt(secondInput) + parseInt(thirdInput);
    
    alert(output);
    
    
    // second math equation, adding first, second and third input, and then multiplying by the third input //
    
    
    console.log("Function is working"); 
    
    var userInput = 
    document.getElementById("ourUserInput").value;
    
    console.log(userInput); 
    
    var secondInput = 
    document.getElementById("secondUserInput").value;
    
    console.log(secondInput);
    
    var thirdInput = 
    document.getElementById("thirdUserInput").value;
    
    console.log(thirdInput);
    
    var secondOutput = (parseInt(userInput) + parseInt(secondInput) + parseInt(thirdInput)) * parseInt(thirdInput);
    
    alert(secondOutput);
    
    document.getElementById("displayResult").innerHTML =  output;
    
    
    // third math equation is calculating the difference between the second answer and the first answer //
    
    console.log("Function is working"); 
    
    var userInput = 
    document.getElementById("ourUserInput").value;
    
    console.log(userInput); 
    
    var secondInput = 
    document.getElementById("secondUserInput").value;
    
    console.log(secondInput);
    
    var thirdInput = 
    document.getElementById("thirdUserInput").value;
    
    console.log(thirdInput);
    
    var thirdOutput = ((parseInt(userInput) + parseInt(secondInput) + parseInt(thirdInput)) * parseInt(thirdInput)) - output;
    
    alert(thirdOutput);
    
    document.getElementById("displayResult").innerHTML =  output;
    
}

*/

// the above is adding to integer values using HTML input and JavaScript

// 2.2 - create a function that accepts 3 variables being passed into it, add them up and return the sum. Display the sum back to the DOM. 

/*

function randomMath(a, b, c){
    return(a + b + c);    
}

document.write(randomMath(10, 20, 30));

*/


// 2.3 - Scope: declare the same variable inside a function (local) and outside (global), giving it different values. Display the two values. 

/* 
var bestTeam = "Man United";

function scouseScum(){
    
    var bestTeam = "Liverpool";
    
    document.write(bestTeam);
    document.write(this.bestTeam);
    
}

scouseScum();
*/ 

//----Exercice 1.5: Collect 2 user inputs and display in text whether they are the same or different. 

/*

var sameOrDifferent = document.getElementById("userButton").addEventListener('click', checkText);

function checkText(){
    
     var firstText = 
    document.getElementById("firstInput").value;
    
    var secondText = 
    document.getElementById("secondInput").value;
    
    if (firstText == secondText){
        document.write("Both inputs are the same!")
    }
    else{
        document.write("Text is different, continue!")
    }
}

*/

var dateOfBirth = 











