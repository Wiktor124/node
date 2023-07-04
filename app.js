const { readFile } = require('./files')

const value = process.argv.slice(2);
readFile('palabras.txt', value)
