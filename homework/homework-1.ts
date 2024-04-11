
export let pound: number = 150;

function poundsToKilos ( pound: number ) {
    let kgConversion: number = 0.453592;

    let valor = pound * kgConversion;

    console.log(pound, 'libras es igual a :', valor, 'Kg.');
}

poundsToKilos(150);

// let total: number = poundsToKilos (pound);
// console.log('150 libras es igual a kgs:' + ' ' + total);

//? Fernando ejemplo:
//* let pounds = 150;

//* let kgs = pounds * 0.453592;
//* console.log('150 libras es igual a kgs: ', kgs);