/*
infix2postfix.js
leif anderson 12/18/18

Convert an infix expression to postfix and evaluate.
A basic (hardcoded) compiler.

*/

const parser = {};

parser.operands = ['+','-','*','/','(',')'];

parser.operators = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];

parser.valid_operand = (token) => {return parser.operands.includes(token);}

parser.valid_operator = (token) => {return parser.operators.includes(token);}

parser.infix_priority = (token) => { 
    let ret = -1;
    if (token == '*' || token == '/') ret = 2;
    else if (token == '+' || token == '-') ret = 1;
    else if (token == '(') ret = 3;
    else if (token == ')' || token == '#') ret = 0;
    return ret;
}

parser.stack_priority = (token) => {
    let ret = -1;
    if (token == '*' || token == '/') ret = 2;
    else if (token == '+' || token == '-') ret = 1;
    else if (token == '(') ret = 0; // dragons!
    else if (/*token == ')' || */token == '#') ret = 0; //  !!rparen undefined
    return ret;    
}

parser.convert = (expression, infix_prec=parser.infix_priority, postfix_prec=parser.stack_priority) => {
    let item, new_token = null;
    const op_stack = [];
    const queue = [];
    op_stack.push('#'); // terminal symbol
    for (let i=0; i < expression.length; i++) {
        new_token = expression[i];
        if (parser.valid_operator(new_token)) {
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
        } else if (parser.valid_operand(new_token)) {
            item = op_stack.pop();
            while (postfix_prec(item) >= infix_prec(new_token)) {
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

parser.valueOf = (token) => {
    for (let i=0; i<parser.operators.length; i++) {
        if (token == parser.operators[i]) return i;
    }
    return -1;
}

parser.eval = (a, b, oper) => {
    if (oper == '+') return (a+b);
    else if (oper == '-') return (a-b);
    else if (oper == '*') return (a*b);
    else if (oper == '/') return (a/b);
    else return -1;
}

parser.evaluate = (postfix_expression) => {
    let token = '';
    const stack = [];
    let v1, v2 = 0.0;
    for (let i=0; i<postfix_expression.length; i++) {
        token = postfix_expression[i];
        if (parser.valid_operator(token)) {
            stack.push(parser.valueOf(token));
        } else if (token == '#') {
            return stack.pop(); // solved via ugly logic
        } else {
            v2 = stack.pop();
            v1 = stack.pop();
            stack.push(parser.eval(v1, v2, token));
        }
    }
    return -1;
}

x = 'A*B+(C-D/E)#';
y = '(1+2)/3+9*(1/9)#';
z = parser.convert(x); // #iheartjs
console.log(z);

test = parser.convert(y);
console.log(test);
console.log(parser.evaluate(test));

test2 = parser.convert('(7*5)-(6/7)*(3+(6/7)-(2/3))#');
console.log(test2);
console.log(parser.evaluate(test2));

module.exports = parser;
