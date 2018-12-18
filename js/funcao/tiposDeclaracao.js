//Forma tradicional - function declaration

//O Interpretrador do JS carrega todas as funções antes. Works.
console.log(soma(3, 4))

function soma(x, y) {
    return x + y
}

//function expression
//util para organização talvez. Not work.

console.log(sub(3, 4))

const sub = function (x, y) {
    return x - y    
}

//named function expression - válido para debugar apenas...
const mult = function mult(x, y) {
    return x * y
}