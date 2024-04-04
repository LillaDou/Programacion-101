// Strings - cadena de caracteres/datos
export let firstName: string = 'Fernando'; //Valores tipo caracteres
let lastName: string  = 'Herrera';

// console.log( firstName, lastName );
let fullName: string = firstName + ' ' + lastName;
console.log(fullName);

let number1: number = 10.5; //valores tipo números
let number2: number = 20.3;

console.log( number1 + number2 );


//Buleanos - almacenar datos de verdadero y falso
let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

isActive = !!isActive; //La exclamación hace que el valor cambie.
//E.g. isActive es true. Al poner !isActive, se vuelve negativo

console.log('isActive', isActive );
console.log('isRunning', isRunning );
console.log('hasKids', hasKids ); 