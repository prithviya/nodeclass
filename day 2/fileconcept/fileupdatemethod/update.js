const fs = require ('fs');
const path = require('path');

fs.appendFile('updatefile.txt', '\nAppended text hello change.', (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Data appended successfully!');
    fs.readFile('updatefile.txt', 'utf8', (err, updatedData) => {
        if (err) {
          console.error('Error reading updated file:', err);
          return;
        }
        console.log('Updated File content:', updatedData);
    })
})