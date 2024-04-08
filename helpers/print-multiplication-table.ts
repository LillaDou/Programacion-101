export function printMultiplicationTable (base: number, limit: number = 10) {
    // if ( limit <= 0 ) {
    //     throw new Error ('El límite debe de ser mayor a cero')
    // }
    
    // if (limit <= 0) {
    //     limit = 10;
    // } 
    //* Estos dos ejemplos son validaciones en caso de que el número
    //* del límite sea negativo. Así, podemos indicar al lector qué sucede o 
    //* qué hemos decidido que pase en caso de que sea negativo. 

    let i = 1;
    do {
        console.log(base, ' x ', i, ' = ', base*i);

        i++;
    } while(i <= limit)

}
