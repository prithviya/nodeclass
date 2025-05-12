const fs = require ('fs');
const path = require('path');

fs.writeFile('writefile.txt', 'Hello, Nodes.js!', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written successfully!');
})