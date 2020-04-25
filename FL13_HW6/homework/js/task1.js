// Your code goes here
const checkNumber = prompt('Your check number, please');
const tipsPercentage = prompt('Please, enter the percentage of tips');

const inputInvalid = !validateInput(checkNumber, tipsPercentage);
if (inputInvalid) {
    alert('Invalid input data.')
} else {
    const check = Number(checkNumber);
    const tips = Number(tipsPercentage);
    const tipsAmount = roundIfNeeded(tips * check / 100);
    const totalSum = roundIfNeeded(check + tipsAmount);
    alert(`Check number: ${check} \nTip: ${tips}% \nTip amount: ${tipsAmount} \nTotal sum: ${totalSum}`)
}

console.log(checkNumber, tipsPercentage);
console.log(typeof checkNumber, typeof tipsPercentage);

function roundIfNeeded(number) {
    if (number > Math.floor(number)){
        return Number((number*1).toFixed(2));
    } else {
        return number;
    }
}

function validateInput(checkNumber, tipsPercentage) {
    const check = Number(checkNumber);
    const tips = Number(tipsPercentage);
    if (isNaN(check) || isNaN(tips)) {
        return false;
    } else if (check <= 0 || (tips < 0 || tips > 100)) {
        return false;
    } else {
        return true;
    }
}
