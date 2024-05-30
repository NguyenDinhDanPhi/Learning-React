var user = [

    {
        id: 1,
        name: ' Kien Dang',

    }, 
    {
        id: 2,
        name: 'SON Dang'
    },

    {
        id: 3,
        name: 'Hung Dang'
    }
]

var comments = [
    {
        id: 1,
        userId: 1,
        content: 'Ra video moi chua ad'
    },
    {
        id: 2,
        userId: 2,
        content: 'vua ra video xong em oi'
    }
]

function getComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(comments)
        }, 1000);
    })
}

function getUserByUserId(userId) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            var result = user.filter(function(user) {
                return userId.includes(user.id)
            })
            resolve(result)
        }, 1000);
    })
}

getComments() 
    .then((comments) => {
        var userIds = comments.map(function(comment) {
            return comment.userId
        })
        return getUserByUserId(userIds)
        .then((users) => {
            return {
                user: user,
                comments: comments
            } 
        })
    })
    .then((data) => {
        var commentBlock = document.getElementById('comment-block')
        var html = ``
        data.comments.forEach(function(comment) {
            
            var userDisplay = data.user.find(function(user) {
               // console.log(comments.content)
                return user.id === comment.userId
            })
            html += ` <li>${userDisplay.name}  ${comment.content}</li>` 
        });
         commentBlock.innerHTML = html
    })

