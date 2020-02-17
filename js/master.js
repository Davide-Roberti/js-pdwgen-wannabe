var nome = prompt('Scrivi il tuo nome');
var cognome = prompt('Scrivi il tuo cognome');
var colore = prompt('Scrivi il tuo colore preferito');
document.getElementById('password').innerHTML = nome + cognome + colore + 20;

var data = new Date();
var annoCorrente = data.getFullYear();
//prima variazione con anno corrente
// document.getElementById('password').innerHTML = nome + cognome + colore + annoCorrente;

//seconda variazione con punto e virgola
// document.getElementById('password').innerHTML = nome + ';' + cognome + ';' + colore + ';' + annoCorrente;

var decennio = annoCorrente - 2000;

//terza variazione con decennio
// document.getElementById('password').innerHTML = nome + ';' + cognome + ';' + colore + ';' + decennio;
