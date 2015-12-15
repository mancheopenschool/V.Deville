/**
 * Created by valentin on 26/11/15.
 */

    // nQ = Numéro question
    // Q = Question
    // R = Réponse réelle
    // r = Propositions
var mettageQ = $('.question');
var mettageR = $('.reponse');
var nbrQ;
var scoreTemp;
$.getJSON('./question.json',function(json){
    nbrQ = Object.keys(json).length;
});

function nombreAlea(min, max){
    return Math.floor(Math.random() * max + min);
}

function getQuestion(num){
    $.getJSON('./question.json', function(json){
        $('<p class="question">'+ json[num].Q +'</p>').appendTo(mettageQ);
    })
}

function getReponse(num){
    $.getJSON('./question.json', function(json){
        var nbrReponses = Object.keys(json[num]['r']).length;
        for (var e = 0; e < nbrReponses; e++){
            $('<input type="radio" name="' + json[num].nQ + '" value="' + json[num].nQ + json[num].r[e] + '"> ' + json[num].r[e] + '<br />').appendTo(mettageR);
                                                                    //  ^ Rajout d'un identifiant sous forme de chiffre arabe unitaire non décimale propre à la question pour éviter eventuelle bug avec d'autre questions
        }
    })
}
function getPoint(num, callback){
    $.getJSON('./question.json', function(json){
        //callback(false);
        callback(json[num].Sc);
    });
}
function checkR(num, callback){
    $.getJSON('./question.json', function(json){
        var rU = $('input[name="' + num + '"]:checked').val();

        if (rU == json[num].nQ + json[num].R){

            callback(true)

        }
        else{
           callback(false)
        }
    });
}

function tirageQuestion(){
    return nombreAlea(1, nbrQ);
}

function getQR(num){
    mettageQ.empty();
    mettageR.empty();
    getQuestion(num);
    getReponse(num);
}
