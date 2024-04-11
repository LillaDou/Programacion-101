

for(let i = 1; i <= 5; i++) {

    let line = '';

    for(let j = 1; j <= 5; j++) {
        line += ' ' + (j*i); // ` ${ j* i}` (esta manera es más correcta)
    }

    console.log(line);
}

//! Un doble bucle for significa que:
//* 1. Empezamos con i=1. Entramos en el segundo bucle donde la j=1.
//? line='' (es un espacio vacío)
//? line = ''(espacio vacío) + ' '(espacio) + (1x1)
//? resultado = nada + espacio + 1x1 = ' 1' (espacio 1)

//* 2. El bucle de dentro termina y vuelve al principio.
//? i=1, j= 2
//? line = ' 1' (espacio 1 del primer bucle) + ' '(espacio) + (2x1)
//? resultado = ' 1'+espacio+2 = ' 1 2'

//* 3. El bucle de j se repite hasta que se termine el límite que hemos puesto
//? de 5. Cuando eso ha terminado, dando el resultado:
//? ' 1 2 3 4 5', se comienza el bucle inical de fuera con i=2. A partir 
//? de aquí, se repite el paso 1 y 2 pero con el valor de i=2, después i=3... 

//* RECUERDA que  'line +=' es lo mismo que 'line = line +'. 
//* Significa que line es igual al mismo valor de line, seguido
//* de + ' ' + (j*i)