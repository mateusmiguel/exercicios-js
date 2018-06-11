//Função Factory
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Fender Telecaster', 4590.00))
console.log(criarProduto('Ibanez TS808', 348.95))