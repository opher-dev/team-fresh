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
        name: "", location: "", students: 400, headTeach: "Malema", passRate: 30, teachers: 10
    },
    {
        name: "", location: "", students: 300, headTeacher: "Molefe", passRate: 80, teachers: 20
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
console.log(southAfrica.kzn.hospitals[1].stats());


// let h = (3,4,5,2) // set

// country, region / state/province, manicipality, city, suburb, township

// // gauteng
// // mpumalanga
// // sapho eastern cape
// // South Africa, Azania, Sud Afrique.

// let Azania
