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

