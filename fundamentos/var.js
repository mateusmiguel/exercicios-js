// ESCOPO:
// Em outras linguagens, a variável ficaria visivel apenas no bloco
// Todas as variáveis globais vão parar em window (no browser)
// Fuja do escopo global!

{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
    
}

teste()

console.log(local)