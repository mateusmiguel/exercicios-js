const a = 1
const b = 2
const c = 3

//Before ES6
const obj1 = {a: a, b: b, c: c}
//After ES6
const obj2 = {teste: a, b, c}

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAtrr = 7.87

//Criação do obj literal
const obj3 = {}
obj3[nomeAttr] = valorAtrr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAtrr}
console.log(obj4)

const obj5 = {
    //Before
    funcao1: function() {},
    //after ES6
    funcao2() {}
}
console.log(obj5)