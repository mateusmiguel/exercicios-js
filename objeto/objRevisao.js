//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome  = 'Cadeira'
produto['Marca do Produto'] = 'Genérica'//também é possivel assim.
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)

delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mateus',
        idade: 26, 
        endereco: {
            logradouro: 'Rua Professor Flávio Wustemberg',
            numero: 1086
        }
    },
    condutores: [{
        nome: 'Geovani',
        idade: 10
    }, {
        nome: 'Jessica',
        idade: 29
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.lenght)

