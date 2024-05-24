//Promise
//  + sync

//  + async
// có những thằng bất đồng bộ, setTimeout, setInterval...

var promise = new Promise( 
    //Executor
    function(resolve, reject) {
        //logic
        // neu thanh cong: resolve()
        //that bai: reject()
        resolve(
            [{
                id: 1,
                name: 'Javascript'
            }]
        )
    }
)

promise
    .then(function(courses) {
        console.log(courses)
    })
    .catch(function() {
        console.log('thhat bai')
    })
    .finally(function() {
        console.log('xong')
    })
// Promise chain

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

sleep(1000) 
    .then(function () {
        console.log(1)
        return sleep(1000)
    })
    .then(function () {
        console.log(2)
        return new Promise(function(resolve, reject) {
           reject('co loi') 
        })
    })
    .then(function () {
        console.log(3)
        return sleep(1000)
    })
    .catch((err) => {
        console.log(err)
    })

// promise.resolve
//promise.reject
// promise.all
// truong hop chac chac resolve, lam tuong tu voi truong hop reject
var promise1 = Promise.resolve('success!')

promise1
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

// chay 2 promosie song song nhung muon ket qua tra ve work voi nhu=au

var promiseA = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve([1])
    }, 2000);
})

var promiseB = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3])
    }, 5000);
})

Promise.all([promiseA, promiseB])
        .then((result) => {
            console.log(result)
        })