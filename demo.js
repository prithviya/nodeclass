const os = require ('os');
const fs = require('fs');
console.log(os.version());
console.log(os.type());
console.log(os.homedir());
console.log(__dirname)
console.log(__filename)
global.variable = '123'
console.log(global.variable);

const path = require('path')

const filePath = path.join(__dirname, 'data', 'file.txt')
console.log(filePath)

console.log(path.basename(filePath))
console.log(path.extname(filePath))


fs.readFile(filePath, 'utf-8', (err, data)=>{
    if (err){
        return console.error(err)
    }
    console.log(data);
})

const data = fs.readFileSync(filePath, 'utf8');
console.log(data);