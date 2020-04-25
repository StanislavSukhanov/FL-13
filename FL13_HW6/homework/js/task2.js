// Your code goes here
const word = prompt('Please, enter a word');

if ( invalidInput() ) {
    alert('Invalid value');
} else if ( wordIsEven() ) {
    const index = getIndex();
    alert(word.slice( index - 1, index + 1 ));
} else {
    const index = getIndex();
    alert(word.slice( index, index + 1 ));
}

function invalidInput() {
    return !word || word.trim().length === 0;
}

function wordIsEven() {
    return word.length % 2 === 0;
}

function getIndex() {
    return Math.floor(word.trim().length / 2);
}
