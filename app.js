let log = console.log.bind(console) ;
document.getElementById('getText').addEventListener('click', getText) ;
document.getElementById('getUsers').addEventListener('click', getUsers); 

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        // log(data) ;
        let output = '<h2>Users</h2>'
        data.forEach(function(user){
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>    
                <hr>  
            `;
        }) ;
        document.getElementById('output').innerHTML = output  ;
    })
}
  

function getText(){
    // fetch('sample.txt')
    // .then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
    //     log(data); 
    // })

    // Using Arrow Funcs
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerText = data ;
    })
    .catch(err => log(err)) ;
}
