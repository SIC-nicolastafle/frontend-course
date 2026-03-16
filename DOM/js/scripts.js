// Movendo pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[0]);

// selecionar elementos por Tag
// mediante funções JS
const listItems = document.getElementsByTagName('li');

console.log(listItems)

// seleciona elemento por Id
const title = document.getElementById('title');

console.log(title);

// selecionar elementos por Class
const products = document.getElementsByClassName('product');

console.log(products);

// selecionar elementos por CSS
const productQuery = document.querySelectorAll('.product');

console.log(productQuery);

const mainContainer = document.querySelector('#main-container');

console.log(mainContainer);


// Alterar HTML desde JS
// insertBefore
const p = document.createElement('p');

const header = title.parentElement;
console.log('parentElement do title:')
console.log(header);

header.insertBefore(p, title);      // adiciona o paragrapho criado antes do elemento title

// appendChild  adiciona um elemento dentro do outro
const navLinks = document.querySelector('nav ul');

const li = document.createElement('li');

navLinks.appendChild(li);       // adiciona um elemento li dentro do elemento nav ul

// replaceChild
const h2 = document.createElement('h2');

h2.textContent = 'New Title';       // adicionar texto no elemento

header.replaceChild(h2, title);     // coloca novo elemento h2 no lugar do elemento title

// createTextNode
// considera o texto como um elemtno que posso colocar dentro de outro elemento
const myText = document.createTextNode('Este es um elemento texto adicionado com appendChild');

console.log(myText);

const h3 = document.createElement('h3');

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3)

// Trabalhando com atributos
const firstLink = navLinks.querySelector('a');      // pega só o primeiro elemento a

console.log(firstLink)

firstLink.setAttribute('href', 'https://google.com')

firstLink.setAttribute('target', '_blank')

// Valores altura e largura
const footer = document.querySelector('footer')

// offsetWidth & offsetHeight   valor com borda
console.log(footer.offsetWidth);
console.log(footer.offsetHeight)

console.log()

// clientWidth clientHeight     valor sem borda
console.log(footer.clientWidth)
console.log(footer.clientHeight)

// getBoundingClientRect
// permite trazer os atributos de um elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect())

const productLeftPosition = product1.getBoundingClientRect().left   // chego até o atributo left

console.log(productLeftPosition)


// CSS com JS
mainContainer.style.color = 'green';
mainContainer.style.backgroundColor = 'grey';
mainContainer.style.padding = '15px';

// HTML collections para alterar varios elementos de uma vez

for (const li of listItems) {
    li.style.backgroundColor = 'black';
    li.style.color = 'white';
}





































