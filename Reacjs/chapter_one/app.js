async function foo() {
    await new Promise(function(resolve) {
        setTimeout(resolve, 1000)
        console.log('foo')
    })
}
async function bar() {
    await foo()
    console.log('bar')
}

bar()