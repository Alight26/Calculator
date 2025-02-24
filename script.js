// math operator functions
function addition() {
    let a = prompt("enter first number ");
    a = +a;
    let b = prompt("enter second number ");
    b =+b;
    console.log(a + b);
};
// addition();


function subtract(a, b) {
    return a - b;
};

/* let sub1 = prompt("sub1 ");
sub1 = +sub1;
let sub2 = prompt("sub2 ");
sub2 = +sub2;


console.log(subtract(sub1, sub2)); */

function multiply(a, b) {
    return a * b;
};

/* let multi1 = prompt("multiply ");
multi1 = +multi1;
let multi2 = prompt("multiply ");
multi2 = +multi2;

console.log(multiply(multi1, multi2)); */

function divide(a, b) {
    return a / b;
};

/* let div1 = prompt("divide ");
div1 = +div1;
let div2 = prompt("divide ");
div2 = +div2;

console.log(divide(div1, div2)); */

function operate() {
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


