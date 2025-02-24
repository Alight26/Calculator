// math operator functions
function addition() {
    let add1 = prompt("enter first number ");
    add1 = +add1;
    let add2 = prompt("enter second number ");
    add2 =+add2;
    console.log(add1 + add2);
};
// addition();


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

    console.log(multi1 * multi2)
};





function divide() {
    let div1 = prompt("divide ");
    div1 = +div1;
    let div2 = prompt("divide ");
    div2 = +div2;

    console.log(div1 / div2);
};





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


