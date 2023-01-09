
//tp server (3)


const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) { 
    //la requete
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html"); 
        //quelle type de fichier ouvrir
        res.writeHead(200);
        res.end(contents);
    })
};

const server = http.createServer(requestListener);  
//on crée le server http
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
    //affichage du resulta
});