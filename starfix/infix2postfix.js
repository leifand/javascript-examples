/*
infix2postfix.js
leif anderson 12/18/18

Convert an infix expression to postfix and evaluate.
A basic (hardcoded) compiler.

*/

const infix2postfix = {};

infix2postfix.operands = ['+','-','*','/','(',')'];

infix2postfix.operators = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];

infix2postfix.valid_operator = (token) => {return infix2postfix.operands.includes(token);}

infix2postfix.valid_operand = (token) => {return infix2postfix.operators.includes(token);}

infix2postfix.infix_priority = (token) => { 
    let ret = -1;
    if (token == '*' || token == '/') ret = 2;
    else if (token == '+' || token == '-') ret = 1;
    else if (token == '(') ret = 3;
    else if (token == ')' || token == '#') ret = 0;
    return ret;
}

infix2postfix.stack_priority = (token) => {
    let ret = -1;
    if (token == '*' || token == '/') ret = 2;
    else if (token == '+' || token == '-') ret = 1;
    else if (token == '(') ret = 0; // dragons!
    else if (/*token == ')' || */token == '#') ret = 0; //  !!rparen undefined
    return ret;    
}

infix2postfix.convert = (expression) => {
    let item, new_token = null;
    const op_stack = [];
    const queue = [];
    op_stack.push('#'); // terminal symbol
    for (let i=0; i < expression.length; i++) {
        new_token = expression[i];
        if (infix2postfix.valid_operand(new_token)) {
            queue.push(new_token);
        } else if (new_token == ')') {
            item = op_stack.pop();
            while (item != '(') {
                queue.push(item);
                item = op_stack.pop();
            } // end while
        } else if (new_token == '#') {
            while (op_stack.length > 0) {
                item = op_stack.pop();
                queue.push(item);
            } // end while
        } else if (infix2postfix.valid_operator(new_token)) {
            item = op_stack.pop();
            while (infix2postfix.stack_priority(item) >= infix2postfix.infix_priority(new_token)) {
                queue.push(item);
                item = op_stack.pop();
            } // end while
            op_stack.push(item);
            op_stack.push(new_token);
        } else {
            console.log("ERROR: INVALID TOKEN: " + new_token);
        }
    } 
    return queue; // *magic*
}

infix2postfix.valueOf = (token) => {
    for (let i=0; i<infix2postfix.operators.length; i++) {
        if (token == infix2postfix.operators[i]) return i;
    }
    return -1;
}

infix2postfix.eval = (a, b, oper) => {
    if (oper == '+') return (a+b);
    else if (oper == '-') return (a-b);
    else if (oper == '*') return (a*b);
    else if (oper == '/') return (a/b);
    else return -1;
}

infix2postfix.evaluate = (postfix_expression) => {
    let token = '';
    const stack = [];
    let v1, v2, top = 0.0;
    for (let i=0; i<postfix_expression.length; i++) {
        token = postfix_expression[i];
        if (infix2postfix.valid_operand(token)) {
            stack.push(infix2postfix.valueOf(token));
        } else if (token == '#') {
            return stack.pop();
        } else {
            v2 = stack.pop();
            v1 = stack.pop();
            stack.push(infix2postfix.eval(v1, v2, token));
        }
    }
    return -1;
}

x = 'A*B+(C-D/E)#';
y = '(1+2)/3+9*(1/9)#';
z = infix2postfix.convert(x); // #iheartjs
console.log(z);

test = infix2postfix.convert(y);
console.log(test);
console.log(infix2postfix.evaluate(test));

test2 = infix2postfix.convert('(7*5)-(6/7)*(3+(6/7)-(2/3))#');
console.log(test2);
console.log(infix2postfix.evaluate(test2));

module.exports = infix2postfix;
