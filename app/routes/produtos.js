module.exports = function(app) {
    app.get('/produtos', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, resultados) {
            res.format({
                html: function() {
                    res.render('produtos/lista', { lista: resultados });
                },
                json: function() {
                    res.json(resultados);
                }
            })
        });

        connection.end();

    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form', { errosValidacao: {}, produto: {} })
    });

    app.post('/produtos', function(req, res) {

        var produto = req.body;
        // console.log(produto);

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();

        if (erros) {
            console.log(erros);
            res.status(400);
            res.format({
                html: function() {
                    res.render('produtos/form', { errosValidacao: erros, produto: produto });
                },
                json: function() {
                    res.json(erros);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(erros, resultados) {
            console.log(erros);
            res.redirect('/produtos');
        })


    });
}