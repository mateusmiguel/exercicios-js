let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //a forma prefixida tem precedencia maior
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)
