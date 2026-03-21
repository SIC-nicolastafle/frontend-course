//Custom Instance semelhante a global instance
// como por exemplo baseURL

const postFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'MYNEWTOKEN'
    }
})
// agora o postFetch reempraza o axios no código, é como que criou outra 'axios'

// não é recomendado utilizar GLOBAL e CUSTOM ao mesmo tempo.