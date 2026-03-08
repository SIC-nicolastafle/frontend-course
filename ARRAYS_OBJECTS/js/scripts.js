// Arrays
lista = [1,2,3,4,5];

console.log(lista);

console.log(typeof lista);


// Propiedades
const languages = ['Python', 'JS', 'HTML', 'CSS']

console.log(languages.length);
console.log(languages['length']);


const arr = ['ax','bx','cx','dx'];

console.log(arr[0]);
console.log(arr[4]);


// Metodos
const firstNumbers = [0,1,2,3,4]
const lastNumbers = [5,6,7,8,9]

const allNumbers = firstNumbers.concat(lastNumbers)

console.log(allNumbers)

const texto = 'some text';

console.log(texto.toUpperCase());

console.log(texto.indexOf('x'));


// Classes {}
const person = {
    name: 'Nicolas',
    age: 32,
}

console.log(person.name)
console.log(person.age)

// create and delete properties
const car = {
    brand: 'VW',
    model: 'Golf',
    engine: 2.9,
    year: 2023,
};

console.log(car);

car.km = 15000;

console.log(car)

delete(car.km);

console.log(car);

// metodo Object.assign
const obj = {
    a: 'olá',
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2);

// metodos keys & entries
console.log(Object.keys(obj));
console.log(Object.keys(obj2));     // devolve chaves

console.log(Object.keys(car));

console.log(Object.entries(car));   // devolve chaves:valor

// Mutability
// b = a é uma referência e não uma copia de um objeto

const a = {
    name: 'Nico'
};

const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a);
console.log(b);

delete(b.name);

console.log(a);
console.log(b);

// loops in arrays

for (let i=0; i < languages.length; i++) {
    console.log(`A linguagem de programação ${languages[i]} está na posição ${i + 1}`);
}

// metodos push & pop em arrays
console.log(languages)

languages.push('XML')   // adiciona no final
console.log(languages)

languages.pop();        // elimina do final
console.log(languages)

const removeElement = languages.pop();
console.log(removeElement);

languages.push('XML','CSS','C+','PHP');
console.log(languages);

// metodos shift & unshift
const letters = ['a','b','c','d','e'];
console.log(letters);

const letter = letters.shift();     // remove primeiro elemento da lista
console.log(letter);

letters.unshift('p','r','q');       // adiciona no começo da lista
console.log(letters);

// indexOf & lastIndexOf
const elements = ['apple','orange','lemon','apple','lemon'];

console.log(elements.indexOf('orange'));
console.log(elements.indexOf('apple'));

console.log(elements[1]);
console.log(elements[elements.indexOf('lemon')]);

console.log(elements.lastIndexOf('lemon'));     //devolve última ocorrência de um elemento repetido num array