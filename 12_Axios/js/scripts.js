// get metodo para obter dados - recomendado utilizar try catch

// primeiro request
const getData = async() => {
    try {
        const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
        // headers
        {
            headers: {
                'Content-Type': 'application/json',
                custom: 'header',
            }
        }
        );

        console.log(response);
        return response.data

    } catch(error) {
        console.log(error)
    }
}

getData();

// extraer dados e imprimir na tela
const container = document.querySelector('#user-container');

const printData = async() => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement('div');
        const nameElement = document.createElement('h2');
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement('h4');
        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div)
    })
}

printData()

// Headers são cabeçalhos da requisição
// define caraterísticas da requisição, como tipo de dados e assim.