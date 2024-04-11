

export let kilometers: number = 10;

let miles: number = kilometers * 0.62;

console.log('10 kilómetros son ', miles, 'millas');


//* Otra forma de hacerlo con una función:
// function kilometersToMiles (kilometers: number) {
//     let miles: number = 0.62;
//     let conversion = kilometers * miles;

//     console.log(kilometers, 'Km equivale a', conversion, 'millas');
// }

// kilometersToMiles (10);