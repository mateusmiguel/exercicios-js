//contexto lexico - arrow function não muda o 'this'
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa