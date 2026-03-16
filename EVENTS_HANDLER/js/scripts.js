// adicionar evento
// addEventListener permite adicionar logica num evento
const btn = document.querySelector('#my-button');

btn.addEventListener('click', function() {
    console.log('Clicou no botão!!!');
})

// Remover evento
const secondBtn = document.querySelector('#btn');

function printMessage() {
    console.log('Testing event');
}

secondBtn.addEventListener('click', printMessage)

const thirdBtn = document.querySelector('#btn-second');

thirdBtn.addEventListener('click', () => {
    console.log('Event Removed');
    secondBtn.removeEventListener('click', printMessage())      // remove e evento
})

// Argumento do evento
// todo evento possui um argumento especial geralmente chamado de event ou e
const title = document.querySelector('#my-title')

title.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);      //
    console.log(event.offsetX);
    console.log(event.offsetY);
    console.log(event.pointerType);
})

// Propagation /Propagação
// stopPropagation()
const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector('#div-btn');

containerBtn.addEventListener('click', () => {
    console.log('Event 1');
})

/* sem definir stopPropagation() ao clicar no botão vai ativar o evento da div
btnInsideContainer.addEventListener('click', () => {
    console.log('Evento 2');
}) */

btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Evento 2 sem propagação');
})


// Remover eventos padrão de elementos HTML
const a = document.querySelector('a');

a.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Não redirecionou para Google');
})


// Eventos de teclas
// keyup -> ativa quando a tecla é solta
// keydown -> quando a tecla é pressionada

document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Apertou a teclaa ${e.key}`)
})

// Eventos de mousse
// mousedown -> pressiona botão do mouse
// mouseup -> soltou o botão do mouse
// dblclick -> doble click do mouse
const mouse = document.querySelector('#mouse')

mouse.addEventListener('mousedown', () => {
    console.log('Botão do mouse presionado')
})

mouse.addEventListener('mouseup', () => {
    console.log('Botão do mouse soltado')
})

mouse.addEventListener('dblclick', () => {
    console.log('DobleClick do mouse')
})

// eventos a partir do movimento do mouse
/*document.addEventListener('mousemove', (e) => {
    console.log(`No eixo x: ${e.x}`);
    console.log('No eixo y:' + e.y);
})*/

// Eventos a partir do scroll
// refere para o elemento window porque o scroll ẽ um evento da janela, e não apenas do documento
window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 200) {
        console.log('Passou dos 200px!');
    }
})

// Evento de focus & blur
// focus quando o usuario entra num elemento ou foca nele
// blur quando acontece o contrario, poe exemplo sái de um input
const input = document.querySelector('#focus');

input.addEventListener('focus', (e) => {
    console.log('Focus no Input')
})

input.addEventListener('blur', (e) => {
    console.log('Saiu do Input')
})

// Evento de carregamento de página
// load -> quando usuario entra na página
// beforeunload -> quando usuario quer sair da página NÃO RECOMENDADO UTILIZAR, apenas para prevenir perder informação num formulário ou algo assim
window.addEventListener('load', () => {
    console.log('A página carregou');
})


// Técnica debounce para fazer um evento disparar menos vezes, isso poupa memória do usuário
// o metodo debounce é definido quase sempre da mesma forma, depois é aplicado no addEventListener
const debounce = (f, delay) => {
    let timeout
    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);     // com apply invoco a função com os argumentos obtidos no return
        }, delay)
    }
}

/* Assim executa a toda hora sem delay
window.addEventListener('mousemove', () => {
    console.log('Executando evento!')
})*/

window.addEventListener('mousemove', debounce(() => {
    console.log('Executando cada 400ms')
},400))



























