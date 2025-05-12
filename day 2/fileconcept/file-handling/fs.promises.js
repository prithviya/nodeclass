const fs = require('fs').promises;
const path = require('path');

// 1. Write to a file (Asynchronous with Promises)
async function writeAndReadFile() {
  try {
    // Write to the file
    await fs.writeFile('example.txt', 'Hello, Node.js!');
    console.log('File written successfully!');

    // 2. Read the file (Asynchronous with Promises)
    let data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);

    // 3. Append to the file (Asynchronous with Promises)
    await fs.appendFile('example.txt', '\nAppended text.');
    console.log('Data appended successfully!');

    // Read the file after appending
    data = await fs.readFile('example.txt', 'utf8');
    console.log('Updated File content:', data);

    // 4. Check if the file exists (Synchronous with Promises)
    try {
      await fs.access('example.txt'); // This throws if file doesn't exist
      console.log('File exists!');
    } catch (err) {
      console.log('File does not exist!');
    }

    // 5. Rename the file (Asynchronous with Promises)
    await fs.rename('example.txt', 'renamed_example.txt');
    console.log('File renamed successfully!');

    // 6. Delete the file (Asynchronous with Promises)
    await fs.unlink('renamed_example.txt');
    console.log('File deleted successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Run the async function
writeAndReadFile();

// 7. Create a new directory (Asynchronous with Promises)
async function createAndManageDirectory() {
  try {
    await fs.mkdir('newFolder');
    console.log('Directory created successfully!');

    // 8. Read the contents of the directory (Asynchronous with Promises)
    const files = await fs.readdir('newFolder');
    console.log('Directory contents:', files);

    // 9. Delete the directory (Asynchronous with Promises)
    await fs.rmdir('newFolder');
    console.log('Directory removed successfully!');
  } catch (err) {
    console.error('Error with directory:', err);
  }
}

// Run directory management function
createAndManageDirectory();

// 10. Check if a file exists (Asynchronous with Promises)
async function checkFileExists() {
  try {
    await fs.access('non_existent_file.txt');
    console.log('File exists!');
  } catch (err) {
    console.log('File does not exist!');
  }
}

// Run file existence check
checkFileExists();
