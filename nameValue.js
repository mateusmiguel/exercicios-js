const saudacao = 'opa' //contexto léxico 1

function exec() { 
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao
}

//Ojbetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua tal',
        numero: 123,
        bairro: 'Cohab II'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)