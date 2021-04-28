//genera numero da 1 a 6
var numeroPc = Math.floor(Math.random() * 6) + 1;
console.log(numeroPc);

//chiedere all'utente un numero da 1 a 6
var numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroUtente);

//scrivi risultati 
document.getElementById("dado_utente").innerHTML = numeroUtente;
document.getElementById("dado_pc").innerHTML = numeroPc;
// verificare qual'è il numero più grande

if (numeroUtente > numeroPc){
    document.getElementById("risultato").innerHTML = "hai vinto!";
}else if(numeroUtente == numeroPc){
    document.getElementById("risultato").innerHTML = "pareggio";
    
}else {
    document.getElementById("risultato").innerHTML = "hai perso!";
}