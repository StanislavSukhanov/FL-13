// Your code goes here
function convert() {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            result.push(parseInt(arguments[i]));
        } else {
            result.push(arguments[i].toString())
        }
    }
    return result;
}

function executeforEach(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}

function mapArray(arr, callback) {
    let result = [];
    executeforEach(arr, (el) => {
        if (typeof el === 'string'){
            result.push(callback(parseInt(el)))
        } else {
            result.push(callback(el))
        }
    });
    return result;
}

function filterArray(arr, callback) {
    let result = [];
    executeforEach(arr, function (el) {
        if (callback(el)) {
            result.push(el);
        }
    })
    return result;
}

function containsValue(arr, item){
    let result = false;
    executeforEach(arr, el => {
        if (el === item) {
            result = true;
        }
    })
    return result;
}

function flipOver(str){
    const strArr = []
    let resultString = '';
    for (let letter of str) {
        strArr.push(letter);
    }
    for (let i = strArr.length -1; i >= 0; i--){
        resultString += strArr[i];
    }
    return resultString;
}

function makeListFromRange(arr) {
    let result = [];
    for(let i = arr[0]; i <= arr[1]; i++){
        result.push(i)
    }
    return result;
}

// getArrayOfKeys(fruits, ‘name’);
// returns [‘apple’, ‘pineapple’]

function getArrayOfKeys(arr, name) {
    let result = [];
    executeforEach(arr, function (item) {
        result.push(item[name]);
    })
    return result;
}

function substitute(arr) {
    const min = 10;
    const max = 20;
    return mapArray(arr, el => {
        if(el > min && el < max){
            return '*';
        } else {
            return el;
        }
    } )
}

function getPastDay(d, days=0){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let result = new Date(d.getTime());
    result.setDate(result.getDate() - days);
    return `${result.getDay()} ${months[result.getMonth()]} ${result.getFullYear()}`
}

function formatDate(date){
    return `${date.toLocaleString('en-GB')}`
}
