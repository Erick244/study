function tratarErro(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Final, volte sempre!')
    }
}

const obj = {
    name: 'Roberto'
}
imprimirNomeGritando(obj);