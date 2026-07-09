const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const drink = {
    name: 'milkshake',
    price: 250,
    isAvailable: true,

    orderShake: function(){
        console.log("shake not ready");
    }
}

console.log(Object.getOwnPropertyDescriptor(drink, "name"));

Object.defineProperty(drink, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(drink, "name"));

for (let [key, value] of Object.entries(drink)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}