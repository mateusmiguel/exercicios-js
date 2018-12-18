// Funções
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

function buzina(){
    return 'beeep'
}

// Uma forma de usar uma função dentro de um objeto é adicionando o método da função dentro do objeto em questão:
const carro = {
    nome: 'Renault Logan',
    preco: 16800,
    desc: 0.12,
    getPreco,
    buzina
}

// ... e assim invocar a partir do objeto.
console.log(carro.getPreco(), carro.buzina())

// Caso eu passasse só o objeto para o console.log, iria retornar todos os atributos
// console.log(carro)

// Também é possível usar um método sem adiciona-lo dentro do objeto:
const moto = {
    nome: 'Honda CG 150 Titan',
    preco: 10000,
    desc: 0.5
}

console.log(getPreco.call(moto))

// Call e Apply:
// A diferença entre Call e Apply é exatamente a forma como são passados os parametros na hora de invocar o método.

// Call: No Call, é passado parametro por parametro. Sendo o primeiro o contexto, e depois os demais parametros.
console.log(getPreco.call(moto, 0.5, 'U$$'))


//Apply: Com o apply os parâmetros devem ser passados dentro de um array:
console.log(getPreco.apply(moto, [0.5, 'U$$']), buzina.apply())