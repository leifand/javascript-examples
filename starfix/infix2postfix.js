/*
infix2postfix.js
leif anderson 12/18/18

Convert an infix expression to postfix and evaluate.

*/

const infix2postfix = {};

infix2postfix.operands = ['+','-','*','/'];

infix2postfix.valid_operator = (token) => {
    return (token in operands);
}

infix2postfix.valid_operand = (token) => {
    return true;
}

infix2postfix.infix_priority = (token) => { // rank operands from higest to lowest
    let pos = 0;
    for (let i=0;i < operands.length; i++) {
        if (token == operands[i]) pos = i;
    }
    return 5 - pos;
}

infix2postfix.stack_priority = (token) => {
    return this.infix_priority(token); // ha ha, this might have consequences
}

infix2postfix.evaluate = (expression) => {
    let item, new_token = null;
    const stack = [];
    const queue = [];
    queue.push('#');
    for (let i=0; i < expression.length; i++) {
        new_token = expression[i];
        console.log(new_token);
        if (infix2postfix.valid_operand(new_token)) {
            queue.push(new_token);
        } else if (new_token = '(') {
            item = stack.pop();
            while (item != ')') {
                queue.push(item);
                item = stack.pop();
            } // end while
        } else if (new_token = '#') {
            while (stack.length > 0) {
                item = stack.pop();
                queue.push(item);
            } // end while
        } else if (infix2postfix.valid_operator(new_token)) {
            item = stack.pop();
            while (infix2postfix.stack_priority(item) >= infix2postfix.infix_priority(new_token)) {
                queue.push(item);
                item = stack.pop();
            } // end while
            stack.push(item);
            stack.push(new_token);
        } else {
            console.log("ERROR: INVALID TOKEN: " + new_token);
        }
    } 
    return queue; // *magic*
}

x = ['a','+','44444444444','b']; // confidence has not been instilled ....
console.log(infix2postfix.evaluate(x));
y = '(1+2)/3+9*(1/9)';
z = infix2postfix.evaluate(y); // #iheartjs
console.log(z.shift());
console.log(z.shift());
console.log(z);

module.exports = infix2postfix;