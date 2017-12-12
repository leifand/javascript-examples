/*

post2in-eval.js
leif anderson 12/12/17

Pre, Post and Infix parsing is a fun subject. Here is a straightforward
method of evaluating a postfix expression and converting it to infix.

Initially chose arrays to track sytmbols, not clear if this was a good choice!

*/

// operands and operators
//
const validOperands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const validOperators = ['+', '-', '*', '/', ' '];
const validOther = [' '];
const strStack = [];
const intStack = [];

function isOperand(char) {
    for(let i = 0; i < validOperands.length; i++) {
        if(char == validOperands[i]) {
            return true;
        }
    }
    return false;
}

function isOperator(char) {
    for(let i = 0; i < validOperators.length; i++) {
        if(char == validOperators[i]) {
            return true;
        }
    }
    return false;
}

function isOther(char) {
    for(let i = 0; i < validOther.length; i++) {
        if(char == validOther[i]) {
            return true;
        }
    }
    return false;
}

function isValid(char) {
    if(isOperand(char)) return true;
    if (isOperator(char)) return true;
    if (isOther(char)) return true;
    return false;
}

function emptyStacks() {
    strStack = [];
    intStack = [];
}

// validate the input string for postfix notation, defaults to false
//
function noError(postfixStr) {
    let pass = true;
    let position = 0;
    let operands = 0;
    let operators = 0;

    if(postfixStr.length == 0) return false;

    for(let i = 0; i < postfixStr.length; i++) {
        if(!isValid(postfixStr[i])) return false;
    }

    while(position < postfixStr.length) {
        if(isOperand(postfixStr[position])) {
            operands++;
        }
        else if(isOperator(postfixStr[position])) {
            operators++;
        }
        
        if(operands <= operators) {
            console.log("ERROR: too many operators");
            console.log(postfixStr);
            return false;
        }
        position++;
    }

    if(operands >= operators + 2) {
        console.log("ERROR: too many operands");
        console.log(postfixStr);
        return false;
    }

    return true;
}

// combine 2 operand expressions with an operator in the middle 
// between parenthesis to create an infix expression.
//
function parenthesis(exp1, exp2, operator) {
    let pstr = [];
    
    pstr.push('(');
    for(let i = 0; i < exp1.length; i++) {
        pstr.push(exp1[i]);
    }
    pstr.push(operator);
    for(let j = 0; j < exp2.length; j++) {
        pstr.push(exp2[j]);
    }
    pstr.push(')');

    return pstr;
} 


var x = ['3', '2', '+'];
console.log(isValid(x[0]));
console.log(noError(x));
console.log(parenthesis(['(','1', '+', '3', ')'], '2', '*'));