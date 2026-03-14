/*// setTimeout
console.log('Ainda não executo')

setTimeout(function() {
    console.log('Função Assíncrona')
}, 2000);       // o numero é o tempo em segundo até correr

console.log('Ainda não executo 2')


// setInterval
// função que é semelhante a setTimeout pero não para de correr.
console.log('Ainda não começou')

*//*
setInterval(function() {
    console.log('Ativada setIntervalo')
}, 1500);
*//*

console.log('Ainda não começou')

// Promise
// Execuções assincronas, prmesa de u  valor que pode chegar em um ponto futuro
const promessa = Promise.resolve(5 + 5);    // Promise objeto que cria cria as promisse
                                            // resolve é o metodo inicial que resolve as promisses
console.log('Um código')

// .then vai levando o promisse adiante durante o código
promessa.then((value) => {
    console.log('A soma é = '+ value)
    return value
})
.then((value) => {value - 1})
.then((value) => console.log('O valor agora é ' + value));

console.log('Um código')

// Falha na promise
Promise.resolve(4 * 'ola')
.then((n) => {
    if (Number.isNan(n)) {
        throw new Error('Valores invalidos')
    }
}).catch((error) => {console.log('ERROR DO PROMISE')})*/


// Rejeição
function checkNumber(n) {
    return new Promise((resolve,reject) => {
        if (n > 10) {
            resolve('O numero maior que 10');
        } else {
            reject('O numero muito baixo');
        };
    });
};

const a = checkNumber(50);
const b = checkNumber(3);

//console.log(a, b);

a.then((v) => {
    console.log(`O Valor do Promise é: ${v}`)
})
.catch((error) => {
    console.log(`O Reject do Promise é: ${error}`)
})

b.then((v) => {
    console.log(`O Valor do Promise é: ${v}`)
})
.catch((error) => {
    console.log(`O Reject do Promise é: ${error}`)
})


// Resolver várias promises
// Promise.all([]).then(() => {}) devolve todas as promise ao mesmo tempo, bom quando certas informações tem de chegar juntas

const prom1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 2000)
});

const prom2 = Promise.resolve(2+2);

const prom3 = new Promise((resolve,reject) => {
    if (30 > 15) {
        resolve(30);
    } else {
        reject('Error')
    };
});

Promise.all([prom1, prom2, prom3]).then((values) => {console.log(values)});


// async functions
// funções que é ejecutada depois das functions syncronas.
// funções mais utilizadas

async function somarComDelay(a,b) {
    return a + b
};

somarComDelay(5,90).then((value) => {
    console.log(`O valor da somaComDelay é: ${value}`)
});

console.log('Código depois da async function')


// async await
// serve para aguardar o resultado de uma async function
// await SEMPRE com func async

function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolveu a Promise')
        }, 2500);
    });
};

async function chamadaAsync() {
    console.log('Chamad a Promise, e esperando resuado');
    const resuult = await resolveComDelay();
    console.log('Resolveu a Promise');
};

chamadaAsync();


// generators
// pode ser utilizada em diferentes momentos do codigo este generator, não são muito utilizados

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

