//  Na função tradicional não é possível ocultar o bloco

// função de foma literal
function fun1() { }

//armazenar em variável - função anonima e atribui  a const
const fun2 = function () {}

// armazenar em array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenamento em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

//Passar função como param 
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

//uma função pode conter outra função
function soma (a, b) {
    return function(c) {
        console.log(a + b  + c)
    }
}

soma (2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)