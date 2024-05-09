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
//2 Attributw
var headingElement = document.querySelector('h1')
headingElement.className = "heading"
console.log(headingElement)
//3.Text