
export let grade:number = 75;

if ( grade >= 90 ) {
    console.log('El alumno ha aprobado: A');
} else if ( grade >= 80 ) {
    console.log('El alumno ha aprobado: B');
} else if ( grade >= 70 ) {
    console.log('El alumno ha aprobado: C');
} else if ( grade >= 60 ) {
    console.log('El alumno ha aprobado: D');
} else {
    console.log('El alumno ha suspendido: F')
}