// const users = fetch('https://jso???nplaceholder.typicode.com/users');

// promise 
const p = new Promise((resolve, reject)=>{
try {
   return resolve({name:"jean avenue"})
} catch (error) {
   return reject(error)
}
})

p.then(r=>{
console.log(r)
});
// GET
// HTTP METHODS  read on this
// GET : fetch data from api
// POST : send data to the API
// DELETE: delete data from api 
// PUT: update
// PATCH: update

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

const renderData = (userData)=> {
    userData.map(user=>{
        const ucard = document.createElement('div');
        const h1= document.createElement("h1")
        h1.textContent = `${user.name} ${user.username}`
        const p1= document.createElement("p")
        p1.textContent = user.email
        const p2= document.createElement("p")
        p2.textContent = user.phone
        ucard.appendChild(h1)
        ucard.appendChild(p1)
        ucard.appendChild(p2)
        document.querySelector("body").appendChild(ucard)
    })
}
const users = fetch('https://jsonplaceholder.typicode.com/users');
users.then(async userList=> {
    const fNamd = await userList.json()
    renderData(fNamd)
});




