const fs = require('fs');

const content = 'la la la';

fs.writeFile('fichier_text.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // fichier écrit avec succès
});
fs.readFile('fichier_text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });