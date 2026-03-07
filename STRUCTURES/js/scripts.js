// Variáveis
let nome = "Nicolas";

console.log(nome);

nome = "Nicolas G. Tafle";

console.log(nome);

const age = 32;

console.log(age);

//age = 33;  const não pode ser alterada TypeError

// Mais sobre variãveis
//let 3hole = "Inválido"     variável não pode iniciar com numeros SyntaxErrorS
//let @variavel ="Inválido"

let a = 12,
    b = 24,
    c = 'hola';

console.log(a, b, c);

// case sensitive
const nomeCompleto = "Nicolas Tafle";
const nomecompleto = "Nicolas Tafle";

console.log(nomeCompleto, nomecompleto);

let _year = 2026;

let $year = 2026;

console.log(_year, $year);


// Funções

// prompt() recebe um dado do usuário desde uma caixinha
//const x = prompt("Digite a sua idade: ");
//console.warn(x);

// alert() emite mensagem via popup, não permite avanzar ate fechar
//const y = alert("Esta é uma alerta!!");

// funções do objeto Math.x
console.log(Math.max(19, 300, 4, -23, 88));
console.log(Math.floor(25.77));     // arrendonda para baixo
console.log(Math.ceil(25.29));     // arrendonda para cima

// funções do objeto console.x
console.info("Este log é uma info");

console.warn("Este log é um warning");

console.error("Este log é um error");


// Estruturas de controle - Condições
// bloco if
const r = 10;

if (r > 8) {

    console.log(`r é maior que 8`)

};

const name = 'João';

if (name === 'João') {
    console.log('Olá João');
}

if (name === 'Maria') {
    console.log('Olá Maria');
}

// else

const loggedIn = false;

if( loggedIn ) {
    console.log('User Autenticado')
} else {
    console.warn('User Não Autenticado')
};

// else if

const userAge = 30;

if ( userAge >= 30 ) {
    console.log('User é um adulto')
} else if ( userAge >= 18 ) {
    console.log('User é um jóvem')
} else {
    console.log('User é menor de idade')
};


// Estrutura de Repetição loops
// for | while

// while atúa até a condição ser atingida

let p = 0;

while( p < 5 ) {
    console.log(`Valor p: ${p}`)
    p += 1
};
console.log('Fim do loop while');

// do while
let o = 10;

do {
    console.log(`Valor o: ${o}`);
    o--;
} while ( o > 1);

// for
for (let t = 0; t < 11; t++) {
    console.log(t)
};


// break
for (let g = 10; 0 < 1; g--) {
    console.log(`G está a disminuir`);
    if (g === 3) {
        console.log(`G é 13, saindo do loop`)
        break
    }
}

// continue
for (let w = 0; w < 10 ; w++) {
    if (w % 2 === 0) {
        console.log(`${w} é par`)
    } else {
        continue
    }
}


// switch { case - break }
const job = 'Programador'

switch ( job ) {
    case 'Programador':
        console.log('Vocé é Programagor');
        break;
    case 'Carniceiro':
        console.log('Vocé é Carneceiro');
        break
    case 'Advogado':
        console.log('Vocé é Advogado');
        break
    default:
        console.log('Profissão não encontrada');
}

