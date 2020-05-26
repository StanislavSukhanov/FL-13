// TODO: Your code goes here
function assign() {
    const result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                result[key] = arguments[i][key];
            }
        }
    }
    return result;
}

