const fs = require('fs')
const path = require('path');

fs.rename('example.txt', 'renamed_example.txt', (err) => {
    if (err) {
      console.error('Error renaming file:', err);
      return;
    }
    console.log('File renamed successfully!');
    fs.unlink('renamed_example.txt', (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log('File deleted successfully!');
    });
})