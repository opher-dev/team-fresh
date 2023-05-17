// Data types and variables
// int number = 3
let a = 4// numbers 
let b = "greeting" // string
let c = [2,4,5,7] // array of numers

let d = ["nmae", "off", "email",8,9,{}, ()=>{}] //array of strings
let e = {email: "sapho@email.com", name: "Sapho", age:8} // object - key:value
let f = 87.90 * 6 // float
let g = {
    school: {
        name: "Laezonia",
        students: 500,
        location: "Pretoria"

    },
    teachers: [
        {
            name:"Sihle",
            schoole: "Laezonia"
        }
    ],
    country: "Azania",

}

let isActive = false | true |0 |1| "on"| "off" // boolean - has only two values
let isRegistered = "yes" | "No" // 

// opreands
// let a= &

if(a===b && c !=d) {
    // == and ===
    // !== and !=

    [3,4,"8"] === ["3",4,8] // false
    // && || 
    // != 
    // !== 
    400 != 400.00 // false

    // arithmetic operators
    // +, -, *, / , %
    // 3+8 - 10 * 11 /7 = 1.57 *10 = 11- 157 = -146
    // 20%11 =9
    // factorial 2! = 2x2= 4
                // 3!= 3*3*3 =27
    // log23
    // BEDMAS = Bracket Exponent Division Multiplication Addition Subtration

}

// complex data types 
// getters and setters 
function add (){
    let a = 400 // int
    let b = 400.00 //float
    let sum = a+b // float
    // return sum; // float
console.log(sum)

}
// add()

// namespaces
// adding members to an object : dot notation, index or bracket notation
const africa = {} // namespace
africa.azania = {
    population: 56000000,
    landArea: 76000,
    languages: ["Zulu", "Pedi", "Xhosa", "Afrikaans", "Tshwana", "Sutu", "English", "SL"],
    geoPos: "Southern Africa",
    politics: "",
    leadership:"President",
    rullingParty: "ANC"
}

africa["zambia"] = {
    population: 3000000,
    landArea: 43000,
    languages: ["Bemba", "Nyanja", "English", "Zulu"],
    rullingParty: "",
}

const southAfrica = {} // namespace
southAfrica.kzn = {
    districts: [],
    townships: [],
    leadership: '',
    landArea: 400.890,
    population: 50000

}

southAfrica['kzn']['schools'] = [
    {
        name: "Laezonia", location: "laezonia", students: 400, headTeach: "Malema", passRate: 30, teachers: 10
    },
    {
        name: "Soweto", location: "soweto", students: 300, headTeacher: "Molefe", passRate: 80, teachers: 20
    },
    {
        name: "Diepsloot", location: "pretoria", students: 300, headTeacher: "Sihle", passRate: 10, teachers: 8
    }
]

southAfrica.kzn.courts = [

]

southAfrica.kzn['roads'] = []
southAfrica.kzn.farms = {
    livestock: [],
    crops: [],
    aquaponics: [{
        name: "", fishType: "", vegetableType: ""
    }]
}
southAfrica.kzn.hospitals = [
{
    location: "Maguduman Hospital", name: "", doctors: 100, labs: 40, nurses: 20, wards: 120, patientsPermMonth: 3000
},
{
    location: "Bara", name: "", doctors: 800, labs: 40, nurses: 1000, wards: 400, patientsPermMonth: 12000
},
{
    location: "Juqweta", name: "", doctors: 500, labs: 40, nurses: 40, wards: 100, patientsPermMonth: 2000
},
{
    location: "Bhelethe", name: "", doctors: 600, labs: 40, nurses: 100, wards: 300, patientsPermMonth: 6000
}
]
southAfrica.kzn.hospitals[0].fn = (doctors,nurses,patientsPermMonth,wards) => {
    // Doctor top atient ratio
    const docPratio=  patientsPermMonth/doctors

    // nurse to patient ratio
    const nuersePratio = patientsPermMonth/nurses
    // wards to pateints
    const wardsPration = patientsPermMonth/wards
    // additional data.
    return {
        docPratio,
        nuersePratio,
        wardsPration
    }
}

southAfrica.kzn.hospitals.map(h=> {
    h['stats'] = ()=>{
        return {
            docPratio: h.patientsPermMonth/h.doctors,
            nuersePratio: h.patientsPermMonth/h.nurses,
            wardsPration: h.patientsPermMonth/h.wards,
            name: h.location

        }
    }
})

// console.log(southAfrica.kzn.hospitals[0].fn(300,30,50000,120));
// console.log(southAfrica.kzn.hospitals[0].stats());
// console.log(southAfrica.kzn.hospitals[1].stats());


// let h = (3,4,5,2) // set

// country, region / state/province, manicipality, city, suburb, township

// // gauteng
// // mpumalanga
// // sapho eastern cape
// // South Africa, Azania, Sud Afrique.

// let Azania

// control flow
// if statements, switch statements
a= [100,200,300,400,500];
b= [200,400,800,1600,3200,6400]; // b[0]=200, b[1]=400, b[2]=800, b[3]=1600, b[4]=3200

// if(a[0]==b[0]) {
//     console.log(a[0],'=', b[0]  )
// } else if (a[0]<b[0]) {
//     console.log(a[0],'<', b[0]  )

// }else {
//     console.log(a[0])
// }

// if(a.length == b.length) {
//     console.log("A is the same  in legth to B")
// }

// if(a[1]-a[0] == b[1]-b[0]) {
//     console.log("The diferences between the numbers are the same:", )
// } else if (a[1]-a[0] != b[1]-b[0]) {
//     console.log("The diferences between the numbers are not the same:", a[1]-a[0],'!=',b[1]-b[0])
// }

const myname = 'Mitch Chanza'
// string - split, lenth, charAt
// console.log(myname.length)
// Dom manipulation

const today = "Wednesday";
// switch(today) {
//     case 'Monday':
//         console.log("Today id my favourite day")
//         break;
//     case 'Tuesday':
//         console.log("This coresponds to my Birthday");
//         break;
//     case 'Wednesday':
//         console.log('This is wednesday')
//         break;
//     default:
//         console.log("I have not found any match")
//         break;
// };

const namesofchurches=["palm","Grace","WordofFaith","Pentacostal","Amazing","HolySpirit","ChristAmbassy","UpperRoom"];

const body = document.querySelector("body");
const ul= document.createElement("ol");
for(let church of namesofchurches) {
    const li = document.createElement("li");
    li.innerText= church
    ul.appendChild(li)
}

const table = document.createElement("table");

southAfrica.kzn.schools.map((school,index)=>{
  if(index===0) {
    Object.keys(school).map(h=>{
        const th= document.createElement("th");
        th.textContent= h
        table.appendChild(th)
    
    })
  }
  Object.values(school).map(s=>{
    const tr = document.createElement("tr");
    const td= document.createElement('td');
    td.textContent=s
    tr.appendChild(td)
    table.appendChild(tr);
  })
})
body.appendChild(table);
body.appendChild(ul)
// for(let s=0; s<namesofchurches.length; s++) {
//     // console.log(s, namesofchurches[s])
//     switch(namesofchurches[s]) {
//         case 'Grace':
//             // console.log("This is my Church");
//             break;
//         default:
//             // console.log("This is not my church");
//             break;
//     }
// }

// for(let a in namesofchurches) {
//     // console.log(a)
// }

// for (let x of namesofchurches) {
//     // console.log(x);
// }

// namesofchurches.forEach(c=> console.log(c))

// namesofchurches.map(church=>{})
// namesofchurches.map((church)=> {
//     // console.log(church)
// })
// namesofchurches.map(function(church){})

// Object.entries(southAfrica.kzn).map(([key, value])=>{
//     // console.log(key, value)
// })

// Object.keys(southAfrica.kzn).map(key=>console.log(key));
// Object.values(southAfrica.kzn).map(value=>console.log(value));



// for loops //
// looping through objects
// looping through arrays





