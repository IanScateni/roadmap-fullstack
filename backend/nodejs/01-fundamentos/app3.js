const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ').length;

const reactWordCount = content.match(/react/gi ?? []).length; 

console.log('Palabras:', wordCount); 
console.log('Palabras react:', reactWordCount); 
