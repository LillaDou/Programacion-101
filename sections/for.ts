
// 1. definicion de la variable de control 
// 2. condición para salir del ciclo 
// 3. cómo queremos que el i vaya aumentando
for( let i = 0; i <= 10; i++ ) {

    if ( i === 5 ) {
        continue;
    }
    
    console.log('let i:', i);

    if ( i === 5) {
        break;
    }
}

console.log('Fin de programa');