/**
 * Created by Valentin on 19/10/15.
 */
var tempsEntreChangement = 5000; //En milli secondes
var tempsDuChangement = 300; //En milli secondes
var images = [];
images[0] = "ressources/images/1.JPG";
images[1] = "ressources/images/2.JPG";
images[2] = "ressources/images/3.JPG";
images[3] = "ressources/images/4.JPG";

var i = 0;
var BGChangeur = setInterval(fadeBGChangeur, tempsEntreChangement);

function fadeBGChangeur() {
    $('#header-img').fadeOut(tempsDuChangement, function(){
        $(this).css('background-image', 'url(' + images[i] + ')').fadeIn(tempsDuChangement);
    });
    if(i <= 2){
        i++;
        //console.log(i);
    }
    else{
        i = 0;
        //console.log(i);
    }
}
function startBG(){
    BGChangeur = setInterval(fadeBGChangeur, tempsEntreChangement);
}
function stopBG(){
    clearInterval(BGChangeur);
}