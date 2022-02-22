
let greet: Function;

greet = () => {
    console.log('hello, world');
}

// greet = 'hello';

const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number): number => {
    return a + b;
}

let results = minus(10, 7);
