
/** Documment
 
  https://www.youtube.com/watch?v=o90EC5seLpg&list=PLwJWw4Pbl4w_oHjPIjkdVtwLeQECK08jv&index=2 
 
 */

/* Importation modules */

const express = require('express');
const cors = require('cors');

/**/

/** Import BDD*/

let BDD = require('./BDD_Config'); // importation des informations BDD
const { error } = require('console');




/* Variable */

var port = 8080;


//** Initialisation du serveur **//
const serveur = express();

serveur.use(cors());
serveur.use(express.json());
serveur.use(express.urlencoded());

//** Mise en place du routage **//

serveur.get('/', (req, res)=>res.send(' Serveur en ligne'));//Validation connexion

serveur.get('*', (req, res) => res.status(501).send('Erreur'));//erreur


//** Démarrage serveur **//

BDD.connect((error) => {

    if (error) {
        console.log('Erreur de connexion BDD');
        return;
    } else {
            console.log('Connexion etablie');
            }
});





serveur.listen(process.env.SERVEUR_PORT, () => {
    console.log(`Démarrage du serveur sur le port${process.env.SERVEUR_PORT }`);
})






