var mysql = require('mysql');

function createDBConnection() {

    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });

    }

    if (process.env.NODE_ENV == 'test') {

        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs_test'
        });
    }

    if (process.env.NODE_ENV == 'production') {
        //mysql://bd7e3f3c10380d:aa91407f@us-cdbr-iron-east-05.cleardb.net/heroku_cc187a5c1febd89?reconnect=true
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/)



        return mysql.createConnection({
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }

}

module.exports = function() {
    console.log('carregamento do modulo createDBConnection');
    return createDBConnection;
}