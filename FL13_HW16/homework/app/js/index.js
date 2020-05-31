const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// Your code goes here
const loading = false;
let users = [];
const firstNameInput = document.createElement('input');
const userNameInput = document.createElement('input');
const submitBtn = document.createElement('button');
firstNameInput.id = 'firstName';
userNameInput.id = 'userName';
submitBtn.id = 'submitBtn';
submitBtn.innerText = 'Add new user';
appContainer.appendChild(firstNameInput);
appContainer.appendChild(userNameInput);
appContainer.appendChild(submitBtn);
// console.log(document.getElementById('firstName'));

const userList = document.createElement('ul');
appContainer.appendChild(userList);


submitBtn.addEventListener('click', () => {
        const data = {
            name: firstNameInput.value,
            username: userNameInput.value
        }
        console.log('adding user', data);
        addUser(data);
    }
);

getUsers();

function getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}/users`);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            alert(`Ooops! Something went wrong ${xhr.status}`)
        } else {
            // console.log(JSON.parse(xhr.response));
            users = JSON.parse(xhr.response);
            console.log(users);
            userList.innerHTML = '';
            fillUserList();
        }
    }
}

function addUser(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${baseUrl}/users`);
    // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
        if (xhr.status !== 201) {
            alert(`Ooops! Something went wrong ${xhr.status}`)
        } else {
            getUsers()
        }
    }
}

function updateUser(id, data) {
    console.log(id, data);
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `${baseUrl}/:id${id}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('Authorization', 'admin');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
        if (xhr.status !== 204) {
            alert(`Ooops! Something went wrong ${xhr.status}`)
        } else {
            console.log(xhr.response)
        }
    }
}

function deleteUser(id) {
    console.log(id);
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${baseUrl}/:id${id}`);
    // xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 204) {
            alert(`Ooops! Something went wrong ${xhr.status}`)
        } else {
            console.log(xhr.response)
        }
    }
}



function createListItem(user) {
    const li = document.createElement('li');
    li.id = user.id;
    const firstName = createNameInput(user);
    const userName = createUserNameInput(user);
    const updateUserButton = createUpdateButton(user);
    const deleteUserButton = createDeleteButton(user);
    li.appendChild(firstName);
    li.appendChild(userName);
    li.appendChild(updateUserButton);
    li.appendChild(deleteUserButton);
    return li;
}

function fillUserList() {
    users.forEach(user => userList.appendChild(createListItem(user)));
}

function createNameInput(user) {
    const firstName = document.createElement('input');
    firstName.id = `firstName${user.id}`;
    firstName.value = user.name;
    return firstName;
}

function createUserNameInput(user) {
    const userName = document.createElement('input');
    userName.id = `userName${user.id}`;
    userName.value = user.username;
    return userName;
}

function createUpdateButton(user) {
    const updateUserButton = document.createElement("button");
    updateUserButton.id = user.id;
    updateUserButton.textContent = 'Update';
    updateUserButton.addEventListener('click', () => {
        const id = user.id;
        const data = {
            name: document.getElementById(`firstName${id}`).value,
            username: document.getElementById(`userName${id}`).value
        }
        updateUser(user.id, data);
    })
    return updateUserButton;
}

function createDeleteButton(user) {
    const deleteUserButton = document.createElement('button');
    deleteUserButton.textContent = 'Delete';
    deleteUserButton.addEventListener('click', () => {
        const id = user.id;
        console.log('deleting ', id);
        deleteUser(id);
    });
    return deleteUserButton;
}






