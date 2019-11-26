//Version 0.1, Objectif : Bouton fonctionel et chrono fonctionel
//Version 0.2, Objectif : Ajout de task( non sauvegardée) et mise en place d'une alerte
//Version 0.3, Objectif : AJout serveur et login
//Version 0.4, Objectif : Adaptation du front du site

const time = 0;
//Fonction de remise a zero du counter
function start_O(time){
time = 0;
document.getElementById("count").value = time;
return time;
}
//Fonction de transformation du temp en millisecondes en trois valeurs (heures,minutes et secondes)
function tf_time (time){
    let heure = Math.trunc(((time / 1000)/ 60) /60)
    let min = Math.trunc((((time - (heure * 1000 *60* 60))) / 1000) / 60 ); 
    let sec = Math.trunc(((((time- (heure * 1000 *60* 60)-(min *1000*60)) / 1000)))); 
    console.log(heure,min,sec)
    return (heure,min,sec)
}
//Recuperation des Valeurs du chrono
//On transforme tous en millisecondes pour mieux l'utiliser plus tard
document.getElementById("start").addEventListener("click", () =>{
    let t_hour = document.getElementById("hour").value;
    let t_min = document.getElementById("min").value;
    let t_sec = document.getElementById("sec").value;
    let r_sec = t_sec * 1000;
    let r_min = t_min * 60 * 1000;
    let r_hour = t_hour * 60 * 60 *1000;
    let r_total = r_sec + r_min + r_hour ;
    console.log(r_sec)
    console.log(r_min)
    console.log(r_hour)
    console.log(r_total)
    tf_time(r_total);
    document.getElementById("count").innerHTML = r_total;
})
