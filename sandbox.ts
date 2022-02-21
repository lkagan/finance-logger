// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[];
// ninjas = [10, 23];

//  JS error: ninjas hasn't been defined as an array outside of TS.
// ninjas.push('larry');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;
// uid = true;

// objects
let ninjaOne: object;
ninjaOne = {name: 'yohsi', age: 30};
// ninjaOne = 'hello';
ninjaOne = [];

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black',
    skills: []
};