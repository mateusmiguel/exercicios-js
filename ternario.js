// const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// var resultado = function resultado(nota) {
//     return nota >= 7 ? 'Aprovado' : 'Reprovado'
// }

// console.log(resultado(6))

// Using normal functions
// function checkPrice(isMember) {
//     // Ternary operator (it's aways a anonymous function)
//     return isMember ? '$5.99' : '$8.99'
// }

// Using arrow function

price = 39.90

const checkPrice = isMember => isMember ? (price = (price - price * 15 / 100).toFixed(2)) : price

console.log('The price is ' + checkPrice(0))