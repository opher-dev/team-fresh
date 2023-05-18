# Funcions 

why do you need functions in your application
in its simplest term a function is a custom complex type you can create on your own to:
- add custom functionlity
- create a new tye of data
- manipulate data
- group related functionalities

__example__:

```javascript 
    let a=2,
        b= 3

    const sum = a+b
    console.log(sum) // 5 
    
    // introduce a function:
    function add(a,b){
        return a+b
    }

    console.log(add(4,5)) // 9
    console.log(add(7,5)) // 12
    console.log(add(17,5)) // 22
```

## Types of function

### named functions 

they have the keyword `function` in most cases, and they are hoisted by default.
they can be used before being defined

```javascript
add(500,600,809)
function add(a,b,c){
    console.log(a+b+c);
}
```
__variadic__: they take arguments 
```javascript 
function add(a,b,c){
    console.log(a+b+c)
} // a variadic function that takes 3 arguments - a,b,c
```
__non variadic__: they do not take arguments
```javascript
function add(){
    let a,b,c = 3,4,6
    console.log(a+b+c)
}
```

### Anonymous functions ( Arrow functions)
you cannot use them before definition







