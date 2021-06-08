const person = {
    name: 'Petras',
    age: 99
}
let car = 'Tesla';
person.car = car;

console.log(person);


// car = 'UFO lekste';
const extendedPerson = {
    ...person,
    car
}
console.log(extendedPerson);


console.log('#################');
console.log('#################');

const dog = {
    voice: 'au'
};
dog.name = 'Rexas';
dog.fur = 'brown';
dog.voice = 'Au au';

console.log(dog);

console.log('#################');
console.log('#################');

const colors = {
    blue: true,
    red: false,
    green: true
}
const animals = {
    dog: true,
    cat: false
}
const buildings = {
    little: 5,
    big: 20
}

const megaInformationObject = {
    ...colors,
    ...buildings,
    ...animals
}
console.log(megaInformationObject);