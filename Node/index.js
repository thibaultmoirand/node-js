//tp 1
const fs = require('fs');
fs.readFile('fichier_text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //lire le contenue du fichier
  console.log(data);
});



//tp 2

const fs = require('fs');

const content = 'la la la';
//le text a ecrire

fs.writeFile('fichier_text.txt', content, err => {
  if (err) {
    console.error(err);
  }
// pour ecrire
});
fs.readFile('fichier_text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // pour lire le resulta
    console.log(data);
  });

  //tp 4
  
const readDir = fs.readdirSync('/test',(anError, anData)=>{ 
  // set quelle repertoir examiner 
  if (anError) {
      console.log(anError);
      return
  }

  console.log(anData);
  // affichage du resulta du repertoir examiner
})

console.log(readDir);

//tp 5
const fs = require("fs")

fs.appendFile("fichier.txt", "la la la",(err) => { 
  //appedFile crrée le ficher et ecris dedant
    if (err) throw err;
    console.log('création fini');
  });

  //tp 6
  const os = require ("os")

console.log(os.homedir()) // affiche home de l'utilisateur

//tp 7
const exec = require('child_process').exec;  
exec('ipconfig', (err, stdout, stderr) => { 
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  

//tp 8
const path = require('path');
