// Notação Literal de Objetos
const obj1 = {}
// console.log(obj1)

// Object em JS - o Object é uma function, que quando invocada cria um objeto
// console.log(typeof Object, typeof new Object)
const obj2 = new Object
// console.log(obj2)

//Função construtora

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Fender Twin Reverb', 14000, 0.15)
const p2 = new Produto('Fulltone OCD', 800, 0.10)

console.log(p1.getPrecoComDesconto())

//Função Factory - Factory é um padrão de projeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        },
    }
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1.getSalario())

// READ LATER:
// https://tableless.com.br/javascript-objetos-literais-vs-funcoes-construtoras/