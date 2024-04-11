

export function max (a: number, b: number, c: number) {
    let maxNumber = a;

    if (maxNumber < b) {
        maxNumber = b;
    }

    if (maxNumber < c) {
        maxNumber = c
    }

    return maxNumber;
}

let maxValue = max (55, 22, 66);
console.log(maxValue); 

//? Respuesta de Fernando:

// function max (a: number, b: number, c: number) {

//     if ( a>b) {
//         return (a>c) ? a : c; 
//         Condicional TERNARIO: la interrogación 'pregunta' si la condición
//         anterior se cumple (a>c). En caso de que si, el resultado es a.
//         Si no, es c
//     }

//     if (b>c) {
//         return b;
//     }

//     return (a>c) ? a : c;
// }

// let maxValue = max (55, 22, 66);
// console.log(maxValue); 