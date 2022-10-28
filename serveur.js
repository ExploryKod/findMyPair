// Intall via npm: express, cjs, nodemon
// Initialisation et préparation du serveur : npm init-y et ajout dans package.json de start
// Récupérer le module express
const express = require("express")
const path = require('path')
// Lancer le serveur
const app = express()
// Définir le moteur de template qui sera utilisé (on peux aussi le faire plus tard):
// permet de sous-entendre l'extension ejs
app.set('view engine', 'ejs')
// Express Middleware for serving static files

app.use('/static', express.static(path.join(__dirname, 'public')))
// Permettre au serveur de renvoyer une page: 
// Via l'url (donc en get), dés que le serveur reçois la demande '/' via l'url (demande par l'utilisateur cad demande la page d'accueil à la racine du site)
// Il va lancer la fonction anonyme qui permet de renvoyer le fichier index
// Il faudra un dossier views pour que express le sache 
// On peux créer la propriété d'un objet qui sera réutilisé dans la vue
// Les autres routes sont aussi créé via ces fonctions - array possible sans autre chose à faire
app.get(['/', '/index'], function(req, res) {
    let monObjet = {
        pseudo: "toto", 
        age: 23,
    }
    res.render('index',monObjet);
})

app.get('/personnages', function(req, res) { 
    res.render('personnages');
})

// Indiquer sur quel port le serveur va écouter (permet : localhost:<num du port>)
// Mon serveur est prêt à recevoir des info du client une fois que cela marche
app.listen(9090, function(){
    // Une fonction anonyme en callback (exécuté une fois que la fonction est appelé)
    console.log('Mon serveur écoute sur le port 9090')
})


