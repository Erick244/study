module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send('usuario > salvar > ' + texto);
    }
    
    function obter(req, res) {
        res.send('usuario > obter > ' + texto);
    }
    
    app.post('/produto', salvar);
    app.get('/produto', obter);

    return { salvar, obter }
}