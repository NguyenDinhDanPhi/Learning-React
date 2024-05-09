// DOM Event
// 1.Attribute events
var h1Element = document.querySelector('h1')
h1Element.onclick = (e) => {
    console.log(e)
}
var h1Element2 = document.querySelectorAll('h1')
for(i = 0; i < h1Element2.length; i++) {
    h1Element2[i].onclick = (e) => {
        console.log(e.target)
    }
}
// 1.1 Input/Select
var inputElement = document.querySelector('input[type="text"]')
inputElement.oninput = (e) => {
    console.log(e.target.value)
}

var inputElement2 = document.querySelector('input[type="checkbox"]')
inputElement2.onchange = (e) => {
    console.log(e.target.checked)
}
// 1.2 Key up/down
inputElement.onkeydown = (e) => {
    console.log(e.target)
}