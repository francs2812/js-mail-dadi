//genera numero da 1 a 6
var numeroPc = Math.floor(Math.random() * 6) + 1;
console.log(numeroPc);

//chiedere all'utente un numero da 1 a 6
var numeroUtente = parseInt(prompt("scegli un numero compreso tra 1 e 6"));
console.log(numeroUtente);

// verificare qual'è il numero più grande

if (numeroUtente > numeroPc){
    alert("hai vinto!")
}else if(numeroUtente == numeroPc){
    alert("pareggio")
}else {
    alert("hai perso!")
}