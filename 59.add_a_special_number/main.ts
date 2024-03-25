function
createAdder(customNumber:number){
    return function adder(number:number){
        return customNumber + number;
    };
}

let myAdder = createAdder(6)
console.log(myAdder(30))