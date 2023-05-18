const num = [34, 56, 65,23];

// num.map((value,index)=>db(value,index));
num.map(db);


// // named external fn- this his hoisted
function db(value,index) {
    console.log(index,value , 'Doubled =', value*2)
}

// arrow functions are not hoisted. 
const workFN = (value) =>{
    if(value%2) {
        console.log(value)
    }
}
num.map(workFN);



