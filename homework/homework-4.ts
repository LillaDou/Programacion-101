
export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let highestNumber = -9999;

for (let i = 0; i < numbers.length; i++) { 

    if (numbers[i]>highestNumber) {
        highestNumber = numbers[i];
    }

    // Solución Stefan:
    // if (i === numbers.length - 1) {
    //     console.log(highestNumber);
    // }
}
console.log('El número mayor es:', highestNumber)