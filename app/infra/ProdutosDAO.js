function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from livros', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into livros set ?', produto, callback);
    // this._connection.query('insert into livros (titulo, preco, descricao) values (?, ?, ?)', [produto.titulo, produto.preco, produto.descricao], callback);
}

module.exports = function() {
    return ProdutosDAO;
}

// module.exports = function() {

//     return function(connection) {

//         this.lista = function(callback) {
//             connection.query('select * from livros', callback);
//         }

//         console.log(this);
//         return this;

//     }

// }