const log = (mesg) => {
    console.log(mesg);
};
const errorlog = (errorMsg) => {
    console.log(errorMsg);
};

//to export var or fun in other files after including files
module.exports = {
    log,
    errorlog
};


