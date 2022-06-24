// BASIC SYNTAX
// Selectors: 
// let elementName = document.querySelector("#elementId")
// Functions
// function functionName() {
// do something here

// }
// Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let btnName = document.querySelector("#btnName")
let myName = document.querySelector("#myName")
// Function
// do something here
// Call the event
btnName.onclick = () => {
  myName.value = 'Yue'
}

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
const imageOff = document.querySelector("#imageOff")
// Function
// do something here
// Call the 
imageOff.onmouseover = () => {
  imageOff.src = "images/lighton.png"
  imageOff.onmouseout = () => {
    imageOff.src = 'images/lightoff.png'
  }
}

// 3. Double click button to display content
// Selectors
let doubleClickButton = document.querySelector("#btndbName")
let display = document.querySelector("#displayPara")
function displayContent() {
  // some code here
  display.innerText = "you double clicked me"
  display.style.color = 'red'
  // create a new img element
  let node = document.createElement('img')
  node.src = 'images/smileyface.png'
  node.classList.add('img-fluid')
  console.log(node)
  display.appendChild(node)
}

// Call the event
doubleClickButton.addEventListener("dblclick", displayContent);
// 4. Traffic Lights
// Selectors
let stopButton = document.querySelector("#btnStop")
let readyButton = document.querySelector("#btnReady")
let goButton = document.querySelector("#btnGo")
let stopLight = document.querySelector("#stopDiv")
let readyLight = document.querySelector("#readyDiv")
let goLight = document.querySelector("#goDiv")
// Function 1
// Function 2
// Function 3

// Call the events
stopButton.onclick = () => {
  stopLight.style.backgroundColor = 'red'
}
readyButton.onclick = () => {
  readyLight.style.backgroundColor = 'yellow'
}
goButton.onclick = () => {
  goLight.style.backgroundColor = 'green'
}
// 5. Change textbox border colours
// Selectors
let changeBorderButton = document.querySelector("#btn2Name")
let firstNameBorder = document.querySelector("#firstName")
let lastNameBorder = document.querySelector("#lastName")
// Function

// Call the event
changeBorderButton.onclick = () => {
  console.log(firstNameBorder)
  firstNameBorder.style.borderColor = 'red'
  lastNameBorder.style.borderColor = 'blue'
}
// 6. Validate the input [length should be more than 5 characters]
// Selectors
let errMsg = document.querySelector("#errMsg")
let validateInput = document.querySelector("#myName2")
let submitButton = document.querySelector("#btnSub2")
/*Function {
  //if statement
}*/

// Call the event
submitButton.onclick = () => {
  if (validateInput.value === '') {
    errMsg.innerText = 'please input value'
  } else if (validateInput.value.length < 8) {
    errMsg.innerText = 'less than 8 characters'
  } else {
    errMsg.innerHTML = ''
  }
}
// 7.create a list of hobbies
// Selectors
let btnHobbies = document.querySelector("#btnHobbies")
let displayHobbies = document.querySelector("#hobbies")
btnHobbies.onclick = () => {
  for (let i = 0; i < 3; i++) {
    let hobby = prompt(`input 3 hobbies, this is the ${i + 1} hobby`)
    let node = document.createElement('li')
    node.innerText = hobby
    displayHobbies.appendChild(node)
  }
}
/*Function {
  //for loop
}*/

// Call the event

// 8. Display a profile card from an object
//Object
let profile = { img: 'images/face.jpg', name: "Yue", title: "developer", contact: "333333" }
// Selectors
let btnProfile = document.querySelector("#btnProfile")
let displayCard = document.querySelector("#displayCard")
/*Function {
    //for loop
      //if statement
  }*/
btnProfile.onclick = () => {
  for (let elem in profile) {
    let node
    if (elem === 'img') {
      node = document.createElement('img')
      node.classList.add('img-fluid')
      node.src = profile[elem]
    } else if (elem === 'name') {
      node = document.createElement('h4')
      node.innerText = `${elem} : ${profile[elem]}`
    } else {
      node = document.createElement('p')
      node.innerText = `${elem} : ${profile[elem]}`
    }
    displayCard.appendChild(node)
  }
}

