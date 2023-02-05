/* Librerie */

const sql_bddconfig = require('mssql');

/** Documentation*/
/*
https://learn.microsoft.com/fr-fr/azure/azure-sql/database/connect-query-nodejs?view=azuresql&tabs=windows
https://expressjs.com/fr/guide/database-integration.html

*/
/** Connexion Base de données*/

/*let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});*/

let sql = new sql_bddconfig.(
    // Option 
    process.env.BDD_NOM, process.env.DB_UTILISATEUR, process.env.BDD_MDP{
        host: process.env.BDD_NOM, 
        port: process.env.BDD_PORT,
        dialect: 'mysql', // ?

    }

)

/** Synchronisation */



module.exports = sql;







