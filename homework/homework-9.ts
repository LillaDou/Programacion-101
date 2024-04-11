

export function heroesThatStartsWith ( nameList: string[], letter: string) {

    let newNamesList: string[] = [];

    for(let i = 0; i<nameList.length; i++) {
        if(nameList[i].startsWith(letter)) {
            newNamesList.push(nameList[i]);
        }
    }

    return newNamesList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(heroesWithLetterS);

// El .push inserta elementos dentro del arreglo

//? Otra respuesta de Fernando:
// for(let name of nameList) {
//     if(name.startsWith(letter)) {
//         newNameList.push(name);
//     }
// }