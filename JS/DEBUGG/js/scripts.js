


// Tratamento de dados

function checkNumber(num) {
    const result = typeof num;

    console.log('typeof = ' + result)

    if (result !== 'number')  {
        console.log(`${num} is not a number`);
    } else {
        console.log(`${num} is a number`)
    }
};

checkNumber(12);
checkNumber('ola');
checkNumber('78');

// exception
const t = 23;

/*
if (t > 15) {
 /*
    throw new Error('This is an error!!')
}*/

// try & catch
try {
    console.loga('ola' * 'text')
} catch (error) {
    console.log(`Error: ${error}`)
}

// try & catch & finally
try {
    console.logi('error de escrita')
} catch (error) {
    console.log(`Error capturado no catch\n${error}`)
} finally {
    console.log('Lógica continua e finaliza!!')
}

// assertions

