/*
infix2postfix.js
leif anderson 12/18/18

Convert an infix expression to postfix and evaluate.

*/

// define valid tokens

const tokenizer = {};
tokenizer.operands = ['+','-','*','/'];

tokenizer.valid_operator = (token) => {
    return (token in operands);
}

tokenizer.valid_operand = (token) => {
    return true;
}

tokenizer.infix_priority = (token) => { // rank operands from higest to lowest
    let pos = 0;
    for (let i=0;i < operands.length; i++) {
        if (token == operands[i]) pos = i;
    }
    return 5 - pos;
}

tokenizer.stack_priority = (token) => {
    return infix_priority(token); // ha ha, this might have consequences
}

const infix2postfix = {};

infix2postfix.evaluate = (expression) => {
    let item, new_token = null;
    const stack = [];
    const queue = [];
    queue.concat('#');
    for (let i=0; i < expression.length; i++) {
        new_token = expression[i];
        if (tokenizer.valid_operand(new_token)) {
            queue.concat(new_token);
        } else if (new_token = '(') {
            item = stack.pop();
            while (item != ')') {
                queue.concat(item);
                item = statck.pop();
            } // end while
        } else if (new_token = '#') {
            while (stack.length > 0) {
                item = stack.pop();
                queue.concat(item);
            } // end while
        } else if (tokenizer.valid_operator(new_token)) {
            item = stack.pop();
            while (tokenizer.stack_priority(item) >= tokenizer.infix_priority(new_token)) {
                queue.concat(item);
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

module.exports = infix2postfix;