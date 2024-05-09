// HTML DOM

//1. Element: get qua ID, Class, tag ,CSS seletor, HTML collection
var heddingNode = document.getElementById('headding')
console.log(heddingNode)
var querySelectos = document.querySelector('.headding-2')
console.log(querySelectos)
var querySelectorChildLast = document.querySelector('.box .headding-2:nth-child(2)')
console.log(querySelectorChildLast)

var box1 = document.querySelector('.box-1')
var li = box1.querySelectorAll('li')
console.log(li)
// innerHTML vs outerHTML
box1.innerHTML = "<span>Test InnerHTML</span>"


//2 Attributw
var headingElement = document.querySelector('h1')
headingElement.className = "heading"
headingElement.style = 'color: red'
console.log(headingElement)
//3.Text
// -InnerText & textContent Propert
console.log(headingElement.innerText)
// DOM style
var styleDom = document.querySelector('.styless')
styleDom.style.width = '100px'
styleDom.style.height = '200px'
styleDom.style.backgroundColor = 'red'
// Or
var styleDom2 = document.querySelector('.styles2')
Object.assign(styleDom2.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'yellow'
})
