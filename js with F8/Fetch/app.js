var postApi = 'https://jsonplaceholder.typicode.com/posts'
//stream
fetch(postApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(post) {
       var htmls = post.map(function(post) {
            return `<li>
                   <h2> ${post.title} </h2>
                   <p> ${post.body} </p>
                
                </li>`
       })
       htmls.join('')
       document.getElementById('coment-block').innerHTML = htmls
    })
    .catch(err => console.log(`loi ne ba ${err}`))