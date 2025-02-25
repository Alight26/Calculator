//numArray
let firstNumber;
let firstNumArr = [];
//number button logic
function start(){
    let numbers = document.querySelectorAll('#buttonNumbers button');
     
    numbers.forEach((button) => {
        button.addEventListener("click", () => {
            firstNumArr.push(button.textContent);
            

            let wholeNumber = firstNumArr.join('');
            
            firstNumber = parseInt(wholeNumber);
            console.log(firstNumber);
            
        }); 
    })
    let operatorBtn = document.querySelectorAll('#buttonOperators button');
    operatorBtn.forEach((button) => {
        button.addEventListener("click", (event) => {     // operator buttons 
            let operatorId = event.target.id;

            if (operatorId === 'divide') {
                divide(firstNumber);
            } else if (operatorId === 'multiply') {
                multiply(firstNumber);
            } else if (operatorId === 'add') {
                addition(firstNumber);
                console.log("+");
            } else if (operatorId === 'subtract') {
                subtract(firstNumber);
            } else if (operatorId === 'equal') {
                equal(firstNumber);
            }
            
        })
    });

};

start();



function addition(firstNumber) {
    secondNumber();
    
};

let nextNumber;
let nextNumArr = [];

function secondNumber(){
    let newNumbers = document.querySelectorAll('#buttonNumbers button');

    newNumbers.forEach((button) => {
        button.addEventListener("click", () => {
            nextNumArr.push(button.textContent);
            console.log(nextNumArr);

            nextNumber = nextNumArr.join('');
            
            nextNumber = parseInt(nextNumArr);
            console.log(nextNumber);
            return nextNumber
            

            
        }); 
    });
};


function subtract(firstNum) {
    let sub1 = prompt("sub1 ");
    sub1 = +sub1;
    let sub2 = prompt("sub2 ");
    sub2 = +sub2;

    console.log(sub1 - sub2);
};

function multiply(firstNum) {
    let multi1 = prompt("multiply ");
    multi1 = +multi1;
    let multi2 = prompt("multiply ");
    multi2 = +multi2;

    console.log(multi1 * multi2);
};

function divide(firstNum) {
    let div1 = prompt("divide ");
    div1 = +div1;
    let div2 = prompt("divide ");
    div2 = +div2;

    console.log(div1 / div2);
};


 








/* 
enter first set of numbers in the calculator
if an operator button is selected call that operator function with the numbers as an argument/parameter
in that operator function user enters another number 
if another operator function is selected the numbers will perform the first operator and call the next operator function
if the operator is = it will execute and print the final number.



if operator put numbers argument into parameter.
 in the function make person put in more numbers.
 if another operator is selected it will do the operation and move on to the other operator functions
 if the operator selected is equals end the execution and display the answer.







// calls the math operator functions to perform the specific operation
/* function operate() {
let operator = prompt("boop ");

    if(operator == "+") {
        return addition();
    } else if (operator == "-") {
        return subtract();
    } else if (operator == "/") {
        return divide();
    } else if (operator == "*") {
        return multiply();
    };
}

operate();

// math operator functions
function addition() {
    let add1 = prompt("enter first number ");
    add1 = +add1;
    let add2 = prompt("enter second number ");
    add2 =+add2;
    console.log(add1 + add2);
};

function subtract() {
    let sub1 = prompt("sub1 ");
    sub1 = +sub1;
    let sub2 = prompt("sub2 ");
    sub2 = +sub2;

    console.log(sub1 - sub2);
};

function multiply() {
    let multi1 = prompt("multiply ");
    multi1 = +multi1;
    let multi2 = prompt("multiply ");
    multi2 = +multi2;

    console.log(multi1 * multi2);
};

function divide() {
    let div1 = prompt("divide ");
    div1 = +div1;
    let div2 = prompt("divide ");
    div2 = +div2;

    console.log(div1 / div2);
};




*/
