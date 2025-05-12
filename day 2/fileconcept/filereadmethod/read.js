const fs = require ('fs');
const path = require ('path');

fs.readFile('readfile.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
})