const fs = require('fs');
// var is = fs.createReadStream('C:\Users\HorstWessel\Documents\GitHub\pavloulanenko.github.io\node js\Text.txt');
var is = fs.createReadStream('C%3A%5CUsers%5CHorstWessel%5CDocuments%5CGitHub%5Cpavloulanenko.github.io%5Cnode%20js%5CText.txt');
// var os = fs.createWriteStream('C:\Users\HorstWessel\Documents\GitHub\pavloulanenko.github.io\Text.txt');
var os = fs.createWriteStream('C%3A%5CUsers%5CHorstWessel%5CDocuments%5CGitHub%5Cpavloulanenko.github.io%5CText.txt');

is.pipe(os);
is.on('end',function() {
    fs.unlinkSync('C%3A%5CUsers%5CHorstWessel%5CDocuments%5CGitHub%5Cpavloulanenko.github.io%5Cnode%20js%5CText.txt');
});
