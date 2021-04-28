//email reggistate 
var emailList = [ "giulio@gmail.com", "marco@gmail.com" , "fabio@gmail.com" ];

//richiesta email
var emailUtente = prompt("Email");
// verifica che l'email sia corretta
var login=0;
var i;
for (i = 0; i < emailList.length; i++) {
     if (emailUtente == emailList[i]){
        login=1;
     }
}
console.log(login)
if(login == 1) {
    alert("Email corretta");
}else {
    alert("Email errata");
}