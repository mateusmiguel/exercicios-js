function tratarErroELancer(erro) {
    // throw new Error('...')
    // throw 10
    // throw true 
    // throw 'Mensagem' 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e){
        tratarErroELancer(e)
    }
    finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)