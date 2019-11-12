validateQuery = (param) => {
    console.log(param);
    let status = 0;
    if (param == "" || param == "today" || param == "tomorrow") {
        status = 200;
    } else {
        status = 400;
    }
    return status;
};


module.exports = { validateQuery: validateQuery };