
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log( objectString);
    }
}
//*El this es para mencionar 'person' dentro de las propiedades
// console.log(person.name);
// person.toString();

let car = {
    brand: 'Chevrolet',
    color: 'blue',
    doors: 5,
    year: 2023,
}

let smartTv = {
    sizeInches: 90,
    brand: 'Samsung',
    color: 'black',
    year: 2015
}

let youtubeVideo = {
    theme: 'Coding',
    channelName: 'DevTalles',
    videoNumber: 10,
    lengthMin: 1.5,
    likes: 1500
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);