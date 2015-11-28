/**
 * Created by valentin on 26/11/15.
 */

    // nQ = Numéro question
    // Q = Question
    // R = Réponse réelle
    // r = Propositions
$(document).ready(function(){
    /*

    $.getJSON('./question.json', function(json){
     var nbrQuestions = Object.keys(json).length;
     for (var i = 1; i <= nbrQuestions; i++){

     console.log(json[i].nQ);

     $('<p class="question">'+ json[i].Q +'</p>').appendTo($('div'));

     console.log(json[i].R);

     var nbrReponses = Object.keys(json[i]['r']).length;

     for (var e = 0; e < nbrReponses; e++){
     $('<input type="radio" name="' + json[i].nQ + '" checked value="' + json[i].r[e] + '"> ' + json[i].r[e] + '<br />').appendTo($('div'));
     }
     }
     });

     */

});

var mettage = $('.quizz');

$.getJSON('./question.json',function(json){
    nbrQ = Object.keys(json).length;
});

function nombreAlea(min, max){
    return Math.floor(Math.random() * max + min);
}

function getQuestion(num){
    $.getJSON('./question.json', function(json){
        $('<p class="question">'+ json[num].Q +'</p>').appendTo(mettage);
    })
}

function getReponse(num){
    $.getJSON('./question.json', function(json){
        var nbrReponses = Object.keys(json[num]['r']).length;
        for (var e = 0; e < nbrReponses; e++){
            $('<input type="radio" name="' + json[num].nQ + '" value="' + json[num].nQ + json[num].r[e] + '"> ' + json[num].r[e] + '<br />').appendTo(mettage);
                                                                    //  ^ Rajout d'un identifiant sous forme de chiffre arabe unitaire non décimale propre à la question pour éviter eventuelle bug avec d'autre questions
        }
    })
}
function tirageQuestion(){
    return nombreAlea(1, nbrQ);
}

function getQR(num){
    mettage.empty();
    getQuestion(num);
    getReponse(num);
}
