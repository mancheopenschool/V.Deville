/**
 * Created by Valentin on 19/10/15.
 */
var tempsEntreChangement = 1000; //En milli secondes
var tempsDuChangement = 300; //En milli secondes
var images = [];
images[0] = "http://i.huffpost.com/gen/1166209/images/o-BIERE-ARTISANALES-facebook.jpg";
images[1] = "http://waquid.com/wp-content/uploads/2015/07/bi%C3%A8re1.jpg";
images[2] = "http://fr.cdn.v5.futura-sciences.com/builds/images/thumbs/7/782e449ea7_biere-bulles_wakala-deviantart.com-cc-by-30.jpg";
images[3] = "http://preprod-img.medisite.fr/files/images/article/5/6/0/504065/1614847-inline.jpg";

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