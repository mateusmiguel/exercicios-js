//comparando valor
console.log('01)',  '1' == 1)
//estritamente igual, valor e tipo
console.log('02)',  '1' === 1)

// é diferente? false, são iguais
console.log('03)',  '3' != 3)

//estritamente diferente
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

// reforna false, compara as ref. de memória
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

// retorna true, compara o number (data em ms)
console.log('11)', d1.getTime() === d2.getTime())

// retorna true.. são a mesma coisa (intuitivamente)
console.log('12)', undefined == null)

// retorna false, não são idênticos
console.log('12)', undefined === null)