module.exports = function() {
    console.log('carregando o modulo produtosBanco');
    this.lista = function(connection, callback) {
        connection.query('select * from livros', callback);
    }
    console.log('retornando o this de produtosBanco')
    return this;
}