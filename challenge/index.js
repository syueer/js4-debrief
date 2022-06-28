/*
 1- Create an event listener in the button (add new item) that allows the user to add new items to the list and highlight each item when clicking on them.
 2- The heading <h2> should change the text accordingly to the highlighted list item. 
 */

// Selectors
const headline = document.querySelector('#headline')
const button = document.querySelector('#button')
const list = document.querySelector('#list')
let items = list.getElementsByTagName('li')
let length = items.length
// Iterate the ul items

// Event Listener - Click the item change the heading
document.body.onclick = (e) => {
  if (e.target.tagName === 'LI') {
    headline.innerText = e.target.innerHTML
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText === headline.innerText) {
      items[i].style.backgroundColor = 'yellow'
    } else {
      items[i].style.backgroundColor = ''
    }
  }
}
// Event Listener - Click the button add a new item
button.onclick = () => {
  let node = document.createElement('li')
  let inputValue = prompt('add new item')
  node.innerText = inputValue
  node.classList.add('border-bottom')
  node.classList.add('m-3')
  list.appendChild(node)
}
