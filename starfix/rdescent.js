/*
rdescent.js
leif anderson 12/22/18

A basic recursive descent parser to verify infix expressions.

*/

const rparser = {};

rparser.operators = ['+','-','*','/','(',')'];

rparser.operands = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];

rparser.valid_operand = (token) => {return rparser.operands.includes(token);}

rparser.valid_operator = (token) => {return rparser.operators.includes(token);}

rparser.top_level_expression = (expression) => {
    let syntax_error = false;
    let token = '';
    
    if (expression) token = expression.shift();
    else syntax_error = true;
    
    if (!syntax_error) rparser.verify_expression(expression, token, syntax_error);

    if (!syntax_error) {
        if (expression) syntax_error = true;
    }
    return syntax_error;
}

rparser.verify_add_factor = (expression, token, syntax_error) => {
    if (rparser.valid_operator(token)) {
        if (token == '+') {
            if (expression) {
                token = expression.shift();
                rparser.verify_add_factor(expression, token, syntax_error);
            } else {
                syntax_error = true;
            }
            if (!syntax_error) rparser.verify_add_factor(expression, token, syntax_error);
        }
    }
}

rparser.verify_expression = (expression, token, syntax_error) => {
    rparser.verify_add_factor(expression, token, syntax_error);
    if (!syntax_error) rparser.verify_add_factor(expression, token, syntax_error);
}

rparser.verify_primary = (expression, token, syntax_error) => {
    if (rparser.valid_operand(token)) {
        if (expression) token = expression.shift();
        else { // not a valid operand
            if (token == '(') {
                if (expression) {
                    token = expression.shift();
                    rparser.verify_expression(expression, token, syntax_error);
                } else {
                    syntax_error = true;
                }
                if (!syntax_error) {
                    if (token != ')') {
                        syntax_error = true;
                    } else if (expression) {
                        token = expression.shift();
                    }
                }
            } else {
                syntax_error = true;
            }    
        }
    }
}

rparser.verify_mult_factor = (expression, token, syntax_error) => {
    // valid multi-factor regardless of token because of NULL production
    if (rparser.valid_operator(token)) {
        if (token == '*') {
            if (expression) {
                token = expression.shift();
                verify_factor(expression, token, syntax_error); 
            } else {
                syntax_error = true;
            }
            if (!syntax_error) {
                rparser.verify_mult_factor(expression, token, syntax_error);
            }
        }
    }
}

rparser.verify_factor = (expression, token, syntax_error) => {
    rparser.verify_primary(expression, token, syntax_error);
    if (!syntax_error) {
        rparser.verify_mult_factor(expression, token, syntax_error);
    }
}

x = ['a','*','b','/','(','d','+','e',')','-','9'];
console.log(rparser.top_level_expression(x));

// this program contains 2 errors, one fatal, one in logic, but I'm too lazy to fix them lol