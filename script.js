/*
Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, 
prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli 
scritti al punto precedente.
Bonus:
Aggiungere alla pagina un campo di input testuale e un pulsante “aggiungi”: l’utente inserisce nell’input un prodotto da acquistare 
e quando clicca sul pulsante, il testo viene aggiunto alla lista.
Super Bonus:
Aggiungere a fianco ad ogni elemento della lista un pulsante “elimina”: quando l’utente clicca su uno di questi pulsanti, 
l’elemento corrispondente viene rimosso dalla lista */

//apro una array

let arrayListaDellaSpesa = ["Insalata", "Pomodori", "Zucchine", "Arancia", "Mandarini", "Mele", "Banane", "Tonno", "Uova",
    "Latte", "Yougurt"];

//stampo gli elementi in html con for

let spesaLen = arrayListaDellaSpesa.length;

let text = "<ul>";
for (let i = 0; i < spesaLen; i++) {
    text += "<li>" + arrayListaDellaSpesa[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;


//chiedo al utente di inserire un nuovo elemento nella lista della spesa

let testoUtente = "<ul>";
function myFunction () {
    let utente = prompt ("Inserisci un elemento nella spesa");
    let nuovaListaSpesa= testoUtente +"<li>" + utente + "</li>" ;
    testoUtente = "</ul>";
    document.getElementById("demo").innerHTML += nuovaListaSpesa;

    arrayListaDellaSpesa.push(utente);





}


//stampo la array in console con while 
let i = 0;
while (i < spesaLen) {
   
    console.log(arrayListaDellaSpesa[i]);
    i++; }






