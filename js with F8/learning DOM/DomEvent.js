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
// 2. Assign even using the element node