// Functions - sempre declarar a palavra function

function sum ( a,b ) {
    console.log(`${a} + ${b} = ${a+b}`)
}

sum (13, 89)

const sumVariable = function ( a,b ) {
    console.log(`${a} + ${b} = ${a+b}`)
}

sumVariable(34,55)


// return

function resta( a, b ) {
    return a - b;
}

const result = resta(10,6);

console.log(result)


// escopo da função
let y = 15;

function testEscopo() {
    let y = 57;
    console.log(`Y dentro da função: ${y}`)
};
testEscopo();
console.log(`Y fora da função ${y}`);
testEscopo();


// escopo aninhado
let m = 50;

function escopoAninhado() {
    let m = 20
}


// arrow funcitons =>
const divition = ( a,b ) => {
    return a / b;
}

console.log(divition(50,4));


const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(5));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));


// parâmetros opcionais

const mutiplication = function(m,n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(mutiplication(4));
console.log(mutiplication(4, 3));

const greeting = (name) => {
    if (!name) {
        console.log('Olá');
        return;
    }
    console.log(`Olá ${name}`);
};

greeting()
greeting('Nico')


// valor dafault
const customGreeting = (name, greet = 'Olã') => {
    console.log(`${greet} ${name}`);
}

customGreeting('Nicolas');
customGreeting('Nicolas', 'Buenos dias');

const repeatText = (text, repeatTimes = 1) => {
    for (let t = 0; t < repeatTimes; t++ ) {
        console.log(text);
    };
};

repeatText('Sem repeat');
repeatText('Com repeat', 6);


// Recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log('A função parou');
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(120, 8);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x -1);
    };
}

const num = 7

const res = factorial(num)

console.log(`Factorial do num ${num} é ${res}`)