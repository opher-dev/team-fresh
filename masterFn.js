const superFetchFunction = async (endpoint)=> {
    const url = `https://jsonplaceholder.typicode.com/${endpoint}`;
    const data = await fetch(url);
    const fdata = await data.json()
    return fdata
}

const createDom =(data, div,endpoint) =>{
    const anoth = (key,value)=>{
        console.log(key,value)
    }
    switch(endpoint){
        case 'users':
            Object.entries(data).map(([key,value])=> {
                // value is an object then create a div tag
                if(typeof value !=='object') {
                    const p = document.createElement("p");
                    p.setAttribute('class', key)
                    p.textContent = value;
                    div.appendChild(p)
                    anoth(key,value)
                } else {
                    anoth(key,value)
                }
            })
            break;
    }
}

const superRenderToDOMFunction =async (endpoint)=>{
    const data = await superFetchFunction(endpoint);
    const body = document.querySelector('body');
    const div = document.createElement("div");
    body.appendChild(div);
    data.map(a=>createDom(a,div, endpoint));
}