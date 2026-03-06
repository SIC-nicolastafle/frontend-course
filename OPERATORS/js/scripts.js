// Numbers

console.log(typeof 2);
console.log(typeof 67.09);
console.log(typeof -12);
console.log(typeof "12");


// Aritmetics ops
console.log( 12 + 50);
console.log( 5 - 532);
console.log( 100 / 5 );
console.log( 100 % 5 ); // Resto
console.log( 2 ** 5 );  // Potẽncias


// 3 Special Number
console.log(typeof Infinity);
console.log(typeof infinity);

console.log(typeof -Infinity);

console.log( 2 * "hello");
console.log( typeof NaN);   // Sendo not a number o typeof é number


// Strings (", ', `)
console.log("Text");
console.log('Another Text');
console.log(`Text`);

console.log('Text in \nTwo lines');
console.log('Tab \t space');


// Concatenation
console.log("First frase " + "Second frase");

console.log('Aspas ' + 'simples');


// Interpolation
name = "Nicolas"
age = 32
console.log(`Hello my name is ${name} and I have ${age} years`);


// Booleans
console.log(typeof true);
console.log(`typeof false: ${typeof false}`);


// Compare
console.log(25 > 5);
console.log(25 <= 5);
console.log(5 != 5);
console.log(5 == 5);
console.log(5 == 9);


// Identic Cemparation
console.log(9 == '9');  // mesmo valor mas diferente tipo

console.log(9 === "9"); // não são idénticos

console.log(23 != "23");

console.log(23 !== "23");


// Logical Operators && - || - !
console.log('Logical Operators');
console.log(false && true);
console.log(false && false);
console.log(true && true);

console.log(true || true);
console.log(false || false);
console.log(false|| true);

console.log(!true);
console.log(!false);
console.log(!true && true);

console.log(3<5 && 0 === 0);
console.log(3<5 || 0 === 0);


// Empty Values  undefined - null
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);


// Silence Types Changes
console.log(5 * null);

console.log("teste" * "ups");

console.log('10' + 1);

console.log('10' - 1);