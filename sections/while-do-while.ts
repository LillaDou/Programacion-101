// Ciclo While - siempre va a verificar la condición antes de ejecutar
// el resto
// let gasTank:number = 0;

// while ( gasTank > 0 ) {
//     console.log('Gasolina restante', gasTank );

//     gasTank--;
// }

// console.log('Ya no tiene gasolina');



// Ciclo Do While - siempre se garantiza que la parte del do se 
// ejecutará al menos una vez
export let gasTank:number = 0;

do {
    console.log('Gasolina restante', gasTank );

    gasTank--;
} while ( gasTank > 0 );

console.log('Ya no tiene gasolina');
