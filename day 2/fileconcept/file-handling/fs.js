const fs = require('fs')
const path = require('path');

// 1. Write to a file (Asynchronous)
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');

  // 2. Read the file (Asynchronous)
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);

    // 3. Append to the file (Asynchronous)
    fs.appendFile('example.txt', '\nAppended text.', (err) => {
      if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Data appended successfully!');

      // Read the file after appending
      fs.readFile('example.txt', 'utf8', (err, updatedData) => {
        if (err) {
          console.error('Error reading updated file:', err);
          return;
        }
        console.log('Updated File content:', updatedData);

        // 4. Check if the file exists (Synchronous)
        if (fs.existsSync('example.txt')) {
          console.log('File exists!');
        } else {
          console.log('File does not exist!');
        }

        // 5. Rename the file (Asynchronous)
        fs.rename('example.txt', 'renamed_example.txt', (err) => {
          if (err) {
            console.error('Error renaming file:', err);
            return;
          }
          console.log('File renamed successfully!');

          // 6. Delete the file (Asynchronous)
          fs.unlink('renamed_example.txt', (err) => {
            if (err) {
              console.error('Error deleting file:', err);
              return;
            }
            console.log('File deleted successfully!');
          });
        });
      });
    });
  });
});

// 7. Create a new directory (Asynchronous)
fs.mkdir('newFolder', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created successfully!');

  // 8. Read the contents of the directory (Asynchronous)
  fs.readdir('newFolder', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    console.log('Directory contents:', files);

    // 9. Delete the directory (Asynchronous)
    fs.rmdir('newFolder', (err) => {
      if (err) {
        console.error('Error removing directory:', err);
        return;
      }
      console.log('Directory removed successfully!');
    });
  });
});

// 10. Check if a file exists using `fs.existsSync()` (Synchronous)
if (fs.existsSync('non_existent_file.txt')) {
  console.log('File exists!');
} else {
  console.log('File does not exist!');
}
