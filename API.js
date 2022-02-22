function LoadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => a(data))
};

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
};

function a(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name}// email: ${user.email}`;
        ul.appendChild(li);
        console.log(user.name)
    }

}