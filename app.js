// https://jsonplaceholder.typicode.com/posts

let log = console.log.bind(console) ;
document.getElementById('getPosts').addEventListener('click', getPosts) ;
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>'
        data.forEach(function(post){
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                <hr>
            `;
        })
        document.getElementById('output').innerHTML = output ;
    })
}