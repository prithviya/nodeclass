const fs = require('fs')
const path = require('path');

fs.rename('example.txt', 'renamed_example.txt', (err) => {
    if (err) {
      console.error('Error renaming file:', err);
      return;
    }
    console.log('File renamed successfully!');
})