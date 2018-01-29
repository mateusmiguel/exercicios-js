const nome = 'Jessica'
const concatenacao = 'Olá' + nome + '!'
const template =  `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

// Template String - ecma 2015
// É possível chamar funções dentro do template string

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)