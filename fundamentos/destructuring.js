// novo recurso do ES2015

const pessoa = {
    nome: 'Jessica',
    idade: 28,
    endereco: {
        logradouro: 'Rua Professor Flávio Wustemberg',
        numero: 1086
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)