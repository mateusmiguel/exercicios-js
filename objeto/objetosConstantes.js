// Pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 <- { new obj }
// pessoa = { nome: 'Ana'}

//Congela o objeto pessoa  - torna o obj uma constante.
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)

//Cria o objeto constante.
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)
