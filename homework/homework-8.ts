


export function largestNameOfArray( heroesArray: string[]) {
    let maxLength = 0;
    let longestWord = '';

    for (let i = 0; i<heroes.length; i++) {
        if(heroes[i].length > maxLength) {
            maxLength = heroes[i].length;
            longestWord = heroes[i];
        }
    }
    return longestWord;
}

let heroes = ['Profesor Charles Xavier', 'Deadpool', 'Ciclope', 'Magneto'];

let hero = largestNameOfArray(heroes);
console.log(hero);

// let hero = 'Strider';
// console.log(hero.length);


