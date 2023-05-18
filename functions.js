const num = [34, 56, 65,23];
const body = document.querySelector("body");
const ul1 = document.createElement("ul")
const ul2 = document.createElement("ul")

body.appendChild(ul1);
body.appendChild(ul2);
const createLi = (value,ul,option)=> {
    const li = document.createElement("li");
    // li.textContent = option==="double"? `${value} Doubled ${value*2}`: `${value%2 && value}`;
    if(option ==="double") {
        li.textContent= `${value} Doubled ${value*2}`
    } else {
        if (value%2) {
            li.textContent = value
        }
    }
    ul.appendChild(li)
}
// num.map((value,index)=>db(value,index));
num.map(db);


// // named external fn- tis his hoisted
function db(value) {
    createLi(value,ul1, 'double')
}

// arrow functions are not hoisted. 
const workFN = (value) =>{
    createLi(value,ul2, 'other')
}
num.map(workFN);

// tenary operators
// condition ? true result : false result
(a+b ===100) ? console.log("This is indeed 100") : console.log("This isn't 100")
if(a+b==100){console.log("This is indeed 100") }else{ console.log("This isn't 100")}
