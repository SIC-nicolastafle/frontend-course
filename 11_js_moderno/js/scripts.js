// var, let e const
var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}
console.log(a)

function logName() {
    const name = 'Pedro';
    console.log(name)
}

const name = 'Nico';

logName();

console.log(name);

// Arrow Function
const sum = function(a,b) {
    return a + b;
}

const arrowSum = (a,b) => a + b;

console.log(sum(1,3))
console.log(arrowSum(1,3))

const greeting = (name) => {
    if (name) {
        return `Hello ${name}`
    } else {
        return 'Hello'
    }
};

console.log(greeting('Nico'));
console.log(greeting());

/*const user = {
    name: 'Theo',
    sayUserName() {
        setTimeout(function() {
            console.log(this)       // this em fuction normal, devolve o pai geral 'Window'
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);      // o this no arrowFunction devole o pai direto neste caso o user Theo
            console.log(`Username: ${this.name}`)
        }, 1000)
    }
}

user.sayUserName();
user.sayUserNameArrow();*/

// FIlter
const arr = [1,2,3,4,5,6,7,8,9,10]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n;
    }
})

console.log(highNumbers)

const users = [
    {name: 'Anita', available: true},
    {name: 'Nico', available: true},
    {name: 'joão', available: false},
    {name: 'Jose', available: false},
    {name: 'Loana', available: true},
]

const availableUser = users.filter((u) => {
    if (u.available) {
        console.log(`Username: ${u.name}`)
    }
})

// map          utilizado par amudar valores de um array
const products = [
    {name:'Camisa', price: 10.9, category:'Roupa'},
    {name:'Maminha', price: 51.2, category:'Carne'},
    {name:'calça', price: 21.3, category:'Roupa'},
    {name:'Yahama', price: 13599, category:'Mota'},
]

products.map((product) => {
    if(product.category === 'Roupa') {
        product.onSale = true;
    }
})

console.log(products)

// destructuring
const fruits = ['Maça', 'Mamão','Laranja']

const [f1, f2, f3] = fruits

console.log(f1, f3);

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periférico',
    color: ' Cinza',
}

const {name: productName, price, category, color} = productDetails;

console.log(`O nome do produto é ${productName}, custa ${price} e temos da cor ${color}`)

// spread operator      permite atribuir todos os atributos de um array para outro

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a3, 10]

console.log(a4)

const carModel = {model: 'Gol'}
const carBrand = {brand: 'Volskwagen'}
const carInfo = {km: 15000, price: 29800}

const car = {...carModel, ...carBrand, ...carInfo}

console.log(car)

// classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100- discount) / 100);
    }
}

const shirt = new Product('shirt', 25);

console.log(shirt)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(25))

// Herança de classes   extends
class ProductWithAttr extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:');
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttr('Hat', 34.99, ['brown', 'white','blue'])

console.log(hat)