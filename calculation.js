//include logger.js
const logger = require('./logger');
const add = (a,b) => {
    logger.log('Addition');
    return a+b;
};
const sub = (a,b) => {
    logger.log("Substraction");
    return a-b;
};
const mul = (a,b) => {
    logger.log("Multiplication");
    return a*b;
};
const div = (a,b) => {
    logger.log("Division");
    return a/b;
};

//to export var or function in other files after including files
module.exports = {
    add,
    sub,
    mul,
    div
};
