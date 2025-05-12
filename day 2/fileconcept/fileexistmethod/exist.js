const fs = require ('fs');
const path = require('path');


if (fs.existsSync('example.txt')) {
    console.log('File exists!');
} else {
    console.log('File does not exist!');
}
