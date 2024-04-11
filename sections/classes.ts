//* Diferencia entre interface de objetos y clases:
//* Principalmente, las clases crean una nueva instancia de algo,
//* mientras que las interfaces no sirven para ello. 
//* Una interfaz es solo para ver cómo luce un objeto mientras que las clases
//* pueden alterar el comportamiento de los objetos.


export class Car {

    static className = 'Cochecito';
    // Podemos llamarlo solo llamando la clase junto con un punto
    // y el className. Ver ejemplo al final.
    //? Static: Podemos usar las propiedades y métodos simplemente llamando la clase

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;
    //? Public permite usar las propiedades/métodos fuera de la clase
    //? Private permite usar las propiedades/métodos únicamente dentro de la clase
    //? Readonly permite solo la lectura para proteger de cambios las propiedades.
    //? Solo en el constructor se podrá cambiar información protegida por el readonly

    //EL nombre de los argumentos es lo que está escrito dentro de this.brand/type.
    //Por ejemplo, ver type2
    constructor (brand: string, type2: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type2;

        this.createdAt = 123456789;
    }

    turnOn() {
        if (this.isRunning ) {
            console.log('El coche ya estaba encendido... se ha dañado el motor');
            return;
        }

        if (this.fuelTank <= 0) {
            console.log('El coche no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El coche está encendido');
    }

    fillTank( gas: number ) {
        if (gas <= 0) {
            console.log('El gas debe estar en positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100) {
            this.fuelTank = 100;
        } else {
            this.fuelTank = newFuelTank;
        }
    /* Tarea:
    gas:number -- gas es la gasolina que le echamos nosotros
    gas > 100, this.fuelTank = 100
    gas solo en positivo
    si ya está lleno, no sobre llenar
    si el tanque es 50 y añado 20, fuelTank es 70
    si fuelTank es 90 y añado 50, fuelTank es 100 */
    }
}

let myMazda = new Car('Mazda','Sedan'); // Esto es una instancia

console.log(myMazda)
myMazda.fillTank(50);
myMazda.fillTank(20);
myMazda.turnOn();
console.log(myMazda);

console.log(Car.className); //* Static!