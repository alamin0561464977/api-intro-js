function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
};
loadPosts();

function displayPosts(posts) {
    const section = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        section.appendChild(div);
        console.log(post);
    }
}
