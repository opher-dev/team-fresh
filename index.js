
/**
 * Adds two numbers and returns a result
 * @param a  first num
 * @param b  second num
 * @author Mitch mitch@opher.co.za
 * @return number - a+b
 */
const add =(a,b) => { 
    let num = [1,6,9,2]
    // double every item in the array and return a new array
    const n2 = num.map(a=> a*2)
    return a+b
}
const members = [{
    name: "S"
}]

const People = [
    {
        name: "Sihle",
        surname: "Maphanga",
        age: 12,
        gender: "KDZL",
        email: "e.chain@gmail.com",
        add:(a,b)=> a+b
     },
     {
        name: "Nomandla",
        surname: "Khwenenyana",
        age: 32,
        gender: "KDZL",
        email: "e.chain@gmail.com",
        add:(a,b)=> a+b
     },
     {
        name: "Sapho",
        surname: "Tiki",
        age: 32,
        gender: "KDZL",
        email: "e.chain@gmail.com",
        add:(a,b)=> a+b
     } 
]

const num = [1,2, "str1", 'str2', (name)=>`Greetings ${name}`, function sub(a,b){return a-b}, (a,b)=>a*b ] // starts at index 0 
console.log(num[6](6000,3))
console.log(num[4]("Nomandla"))
console.log(People)