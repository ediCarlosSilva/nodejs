var mysql = require('mysql');

function createDBConnection() {
    console.log('fazendo a conexao com o banco.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    })
}

module.exports = function() {
    console.log('carregamento do modulo createDBConnection');
    return createDBConnection;
}