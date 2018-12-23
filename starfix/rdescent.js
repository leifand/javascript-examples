/*
rdescent.js
leif anderson 12/22/18

A basic recursive descent parser to verify infix expressions.

*/

const rparser = {};

rparser.operators = ['+','-','*','/','(',')'];

rparser.operands = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];

rparser.valid_operand = (token) => {return parser.operands.includes(token);}

rparser.valid_operator = (token) => {return parser.operators.includes(token);}

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
    if (!syntax_error) verify_add_factor(expression, token, syntax_error);
}

rparser.verify_primary = (expression, token, syntax_error) => {
    if (rparser.valid_operand(token)) {
        





        if (expression) {
            token = expression.shift();
            rparser.verify_expression(expression, token, syntax_error);
        }
        else {
            syntax_error = true;
        }
        if (!syntax_error) {
            if (token != ')') {
                syntax_error = true;
            } else if (expression) {
                token = expression.shift();
            }
        }
    }
}