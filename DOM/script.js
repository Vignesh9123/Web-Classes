function changeColor (){
    document.getElementById("main-heading").style.color = "black";
}


function changeBGColor(){
    document.querySelector(".info-text")
}

function changeText(){
    document.getElementById("change-text").innerText = "Hi";
}

function addH1TagAfterHello(){
    const h1tag2 = document.createElement("h1")
    h1tag2.innerText = "Added"
    document.getElementById('change-text').after(h1tag2)
}

// Some DOM code in the meet:

const h1tag = document.createElement("h1")
h1tag.innerText = "Added from DOM"
document.getElementsByTagName('body')[0].appendChild(h1tag)


document.getElementsByTagName('h1')[1].remove()


// Event listeners discussed in meet

const btn = document.getElementById("change-text-btn")


// adding an event listener 
btn.addEventListener('click', ()=> console.log("clicked"))

// a complex event listener
btn.addEventListener('click', ()=> document.getElementsByTagName("body")[0].append(document.createElement("h1").innerText = "Clicked"))


// Wrong way of adding event listeners if you need to remove them further (Reason of why it is wrong is discussed in class)
const listenr = btn.addEventListener('click', ()=> document.getElementsByTagName("body")[0].prepend(document.createElement("h1").innerText = "Clicked\n"))

btn.removeEventListener('click',()=> document.getElementsByTagName("body")[0].prepend(document.createElement("h1").innerText = "Clicked\n") )


// Right way:

function cb(){
 document.getElementsByTagName("body")[0].append(document.createElement("h1").innerText = "Clicked\n")
}


btn.addEventListener('click', cb)

btn.removeEventListener('click', cb)


// Some code in the meet 2:

const inputBox =  document.getElementById("name-input")
inputBox.addEventListener("input", (event)=>{console.log("Event", event)}) // Observe e.target and e.target.value here

const btn2 = document.getElementById("change-text-btn")
btn2.addEventListener("click", (e)=>{console.log("Clicked", e)}) // Observe e.target here too


// Event Propagation:
const ptag = document.getElementsByClassName("child-paragraph")[0] // child
ptag.addEventListener("click", ()=>console.log("Clicked p"))

const container = document.getElementById("container") // parent
container.addEventListener("click", ()=>console.log("Clicked container"))
// Click on paragraph inside container and notice console logs

// Stopping event propagation

ptag.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log("Clicked p")
})

// Now click the para and notice the logs

document.addEventListener("keydown", (e)=>console.log(e)) // Just click on the page somewhere and notice e.key, e.altKey, e.shiftKey, e.ctrlKey for different set of key combinations


function formSubmitted(e){
    e.preventDefault()
    alert("Form submitted")
    console.log("name is ", e.target.name.value)
    console.log("email is ", e.target.email.value)
}

