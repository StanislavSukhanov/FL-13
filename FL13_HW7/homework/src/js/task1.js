// Your code goes here
const users = [
    {name: 'Admin', pass: 'RootPass'},
    {name: 'User', pass: 'UserPass'}
]

const userName = prompt('Please, enter your user name:');

// main logic
if (inputInvalid(userName)) {
    cancelTransaction()
} else if (userName.trim().length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (userNotExist()) {
    alert('I don’t know you');
} else {
    const user = getUser();
    const passwordInput = prompt('Enter your password');
    if (inputInvalid(passwordInput)) {
        cancelTransaction();
    } else {
        if (passwordInput !== user.pass) {
            alert('Wrong password');
        } else {
            const userHours = new Date().getHours();
            const userTime = userHours < 20? 'day' : 'evening';
            alert(`Good ${userTime}, dear ${user.name}!`)
        }
    }
}

// functions
function inputInvalid(str) {
    return !str;
}

function cancelTransaction(){
    alert('Cancelled')
}

function getUser() {
    return users.find(user => user.name === userName.trim());
}

function userNotExist() {
    return !getUser();
}



