// Global Instance permte alterar config do Axios diretamente
// como por exemplo o header

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'MEUTOKENAPI'

// não é recomendado utilizar GLOBAL e CUSTOM ao mesmo tempo.

