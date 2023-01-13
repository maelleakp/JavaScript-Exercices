var age = parseInt(prompt("Entrer votre âge :"))

switch(true){

    case (age>=1 && age<=17): alert("Pas encore majeur !");
    break;

    case (age>=18 && age<=49): alert("Majeur mais pas senior !");
    break;

    case (age>=50 && age<=59):alert("Senior mais pas retaité !");
    break;

    case (age>=60 && age<=70):alert("Retraité !")
    break;

    default: alert("Chiffre non valide");
}



