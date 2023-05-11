const root = document.getElementById("root")

root.setAttribute("height", 500)
root.setAttribute("width", 500)
root.setAttribute("class", "container")

root.style.minHeight = "20vh"

// create an element

const h1 = document.createElement("h1")
h1.innerText = "My Application"
h1.setAttribute("id", "appTitle")
h1.style.color = "white"
/// add h1 to the root

root.appendChild(h1)

const p = document.createElement("p")
p.innerText = "Lorem ipksnxc dgiscddbsan xsdcdehdfuyws xwdjhdbvws dhwd wdjwsq"

const black = document.createElement("div")
black.style.backgroundColor ="black"
black.minHeight ='40vh'
black.setAttribute("height", 400)
const bh1 = document.createElement("h1")
bh1.innerText="Sample test of my text"
black.appendChild(bh1)
black.appendChild(p)
black.style.color="white"

const green = document.createElement("div")
green.style.backgroundColor ="green"
green.minHeight ='40vh'
green.setAttribute("height", 400)
green.appendChild(h1)
green.appendChild(p)

const purple = document.createElement("div")
purple.style.backgroundColor ="purple"
purple.minHeight ='20vh'
purple.setAttribute("height", 400)
purple.appendChild(h1)
purple.appendChild(p)


root.appendChild(black)
root.appendChild(green)
root.appendChild(purple)

console.log(root)

// Practice creating the following tags using javascript: h1, p, a, article, section, ul,li, div

