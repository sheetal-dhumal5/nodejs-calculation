//include files calculation.js & logger.js
const calculation = require('./calculation');
const logger = require('./logger');
console.log('logger== ', logger);

//call functions
let a=20, b=10;
logger.log(calculation.add(a,b));
logger.log(calculation.sub(a,b));
logger.log(calculation.mul(a,b));
logger.log(calculation.div(a,b));