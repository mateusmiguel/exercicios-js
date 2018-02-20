function student(name, age, note) {
    this.name = name
    this.age = age
    this.note = note
}

let mateus = new student("Mateus Miguel", 26, 6)
let jessica = new student("Jessica Medeiros", 29, 10)

function y({age, note}){
    return ((new Date().getFullYear()) - idade)
}

console.log(y(mateus), y(jessica))
