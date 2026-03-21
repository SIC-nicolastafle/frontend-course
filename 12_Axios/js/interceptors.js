// Request
postFetch.interceptors.request.use(
    function(config) {
        console.log(`Antes do Request...`);
        console.log(config)
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)


// Response
postFetch.interceptors.response.use(
    function(response) {
        console.log(`Antes da Resposta...`);
        console.log(response)
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)