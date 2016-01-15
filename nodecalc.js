var readlineSync = require('readline-sync');

var num1 = readlineSync.question('Enter a number :');
var num2 = readlineSync.question('Enter another number :');
operators = ['Add','Subtract','Multiply','Divide'];
var index = readlineSync.keyInSelect(operators, 'Please choose an operator');

function add(num1, num2){
    var answer = num1 + num2;
    console.log(answer);
}
function sub(num1, num2){
    var answer = num1 - num2;
    console.log(answer);
}
function div(num1, num2){
    var answer = num1 / num2;
    console.log(answer);
}
function multi(num1, num2){
    var answer = num1 * num2;
    console.log(answer);
}

function statements(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if (operators[index] == "Add"){
        add(num1,num2);
    }
    else if (operators[index] == "Subtract"){
      sub(num1,num2);  
    }
        else if (operators[index] == "Multiply"){
        multi(num1,num2);
    }
    else if (operators[index] == "Divide"){
        div(num1,num2);
    }    
}
statements();