
// Création des toutes les variables
const questionAffiche = document.querySelector('#question-affiche');
const assertions = document.querySelectorAll('.assertions');
const btnSuivant = document.querySelector('#btn-suivant');
const progressBar = document.querySelector('#progressBarre');
const buttonBegin = document.querySelector("#buttonBegin");
const quizOne = document.querySelector(".quizOne");
const sectionLogin =document.querySelector(".sectionLogin");
const quitter = document.querySelector(".quitter");
const suivant = document.querySelector(".suivant");
const suivantinactif = document.querySelector(".suivant-inactif")
const end = document.querySelector(".end");
const accueil = document.getElementById('accueil');
const questionForm = document.querySelector('#questionForm');
const chargeQuiz = document.querySelector('#chargeQuiz');
const minuteur = document.querySelector('#minuteur');
const formScore = document.querySelector (".formScore");
const prenom = document.querySelector (".prenom");
const adMail = document.querySelector (".adMail");
const failed = document.querySelector('.failed');
const congrat = document.querySelector ('.congrat');
const form = document.getElementById('form');
const answer = document.querySelectorAll('.answer');
//object pour contenir les infos sur le user
let utilisateur = {
    nom: '',
    email: '',
    score: 0
}



// Validation de username et email part I

let error = []
const username = document.getElementById('username');
const email = document.getElementById('email');

email.addEventListener ('input', function(){
    if(checkEmail(email)){
        document.getElementById("erreurMail").innerText = "";
    }else{
        document.getElementById("erreurMail").innerText = "N’oubliez pas de renseigner votre email avant de commencer le Quiz";

    }
});


username.addEventListener ('input', function(){
    if(checkName(username)){
        document.getElementById("erreurNom").innerText="";
    }else{
        document.getElementById("erreurNom").innerText="N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
    }
});


// Fonction pour tester le regex pour validation de mail et username 

function checkEmail (email){
    const validEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    utilisateur.email = email.value;
    return validEmail.test(email.value); 
    
}

function checkName (username){
    const validUserName = /^([a-zA-Z]{3,20})$/;
    utilisateur.nom = username.value;
    return validUserName.test(username.value); 
    
}


// Test de validation de l'imput UserName et d'Email

function checkIdentityName(){
    if (username.value.length == 0){
        document.getElementById("erreurNom").innerText="N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
        username.style.border="1px solid red";
        return false;
    } else{
        document.getElementById("erreurNom").innerText=""
        //username.style.border="1px solid green"
        return true;
    }   
}

function checkIdentityMail() {
    if (email.value.length == 0){
        document.getElementById("erreurMail").innerText = "N’oubliez pas de renseigner votre email avant de commencer le Quiz";
        email.style.border="1px solid red";
        return false;
    }else{
        const mailok = checkEmail(email)
        document.getElementById("erreurMail").innerText=""
        //email.style.border="1px solid green"
        return mailok;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

// Changement de form x à y

buttonBegin.addEventListener('click', (e) => {
    e.preventDefault()
    if (  checkIdentityName()==true && checkIdentityMail()==true) {
        sectionLogin.style.display ='none';
        quizOne.style.display = 'block';
        chargeQuestion(questionActif.index);
        prenom.innerText= utilisateur.nom;
        adMail.innerText= utilisateur.email ;
    } else {

        checkIdentityName();
        checkIdentityMail();
    }
    
   });

   quitter.addEventListener('click', () => {    
    if(end.style.display = 'none') {
        end.style.display ='block';
        imgFaled()
    const score = document.querySelector(".score");
    score.textContent = utilisateur.score + "/15" ;
    quizOne.style.display ='none';
    }else{
        end.style.display ='none';
    }
   });

   accueil.addEventListener('click', () => {
    if(sectionLogin.style.display == 'none') {
        sectionLogin.style.display ='block';
        end.style.display ='none';
    }
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////

   // Compteur question active 
let questionActif = {
    index: 0
}
// création d'objet pour les question, assertions, réponses 
   let question = [
    {
        TitreQuestion : "Quel est le type d'un fichier javascrip?",
        assertion :[".ts", ".jsx", ".js", ".j"],
        Reponse : '.js',
    },

    {
        TitreQuestion : "Qui est le chef de la famille?",
        assertion :["Enfent", "Papa", "Maman", "Tente"],
        Reponse : 'Papa',
    },

    {
        TitreQuestion : "Quel est la capitale de la RDC?",
        assertion :["Kisangani", "Goma", "Beni", "Kinshasa"],
        Reponse : 'Kinshasa',
    },

    {
        TitreQuestion : "Comment s'appelle l'animal qui mange les verdures?",
        assertion :["Herbivor", "Carnivor", "Insectivor", "Omnivor"],
        Reponse : 'Herbivor',
    },

    {
        TitreQuestion : "La poule est de quelle classe d'animaux?",
        assertion :["Batracien", "Volaille", "Rappasse", "Reptile"],
        Reponse : 'Volaille',
    },

    {
        TitreQuestion : "Comment s'appelle l'enfant d'un lion?",
        assertion :["Chaton", "Poussin", "Lionçaux", "Dinde"],
        Reponse : 'Lionçaux',
    },

    {
        TitreQuestion : "Traduisez \"\Salut !\"\ en Englais?",
        assertion :["You", "How is it", "Wake-up", "Hello!"],
        Reponse : 'Hello!',
    },

    {
        TitreQuestion : "Quel est le pays le plus peuplé de l'Afrique?",
        assertion :["RDcongo", "Nigeria", "Maroc", "Tente"],
        Reponse : 'Nigeria',
    },

    {
        TitreQuestion : "Comment s'appelle l'objet approprié pour boire de l'eau?",
        assertion :["Une Assiette", "Un Gobellet", "Une fourchette", "Une Couilleur"],
        Reponse : 'Un Gobellet',
    },

    {
        TitreQuestion : "Comment s'appelle l'arbre de l'avocat?",
        assertion :["Le manguier", "L'avocatier", "Le citronier", "Le cotonier"],
        Reponse : 'L\'\avocatier',
    },

    {
        TitreQuestion : "Comment s'appelle l'arbre de la mangue?",
        assertion :["Le manguier", "L'avocatier", "Le citronier", "Le cotonier"],
        Reponse : 'Le manguier',
    },

    {
        TitreQuestion : "La chèvre est ?",
        assertion :["Carnivor", "Herbivor", "Insectivor", "Omnivor"],
        Reponse : 'Herbivor',
    },

    {
        TitreQuestion : "Quelle est le fleuve le plus long de l'afrique?",
        assertion :["fleuve nil", "fleuve Congo", "fleuve Zambeze", "Fleuve Missisipi"],
        Reponse : 'fleuve nil',
    },

    {
        TitreQuestion : "Quelle un organe de sens pour écouter?",
        assertion :["Ouie", "les Narines", "Le Gou", "Le touché"],
        Reponse : 'Ouie',
    },

    {
        TitreQuestion : "Que signifie Falacieux?",
        assertion :["Menteur", "Prometteur", "Verité", "Droit"],
        Reponse : 'Menteur',
    },
   ]

// function pour charger toutes les questions
function chargeQuestion(indexQuestion) {
    if(indexQuestion < question.length) {
        //Charger les questions sur la forme
        questionAffiche.textContent = question[indexQuestion].TitreQuestion;
        let nbrQuest = parseInt(indexQuestion) + 1
        chargeQuiz.innerText = 'Question ' + '' + nbrQuest + '/' + question.length; 
        for(let i = 0; i < question[indexQuestion].assertion.length; i++) {
            assertions[i].value = question[indexQuestion].assertion[i];
            // afficher les assertion sur la forme 
            assertions[i].nextSibling.textContent = question[indexQuestion].assertion[i];
        }       
    }
};

// minteur du progressBarre
let minute = 100;
 setInterval(() => {
    if (minute >=0 && quizOne.style.display == 'block'){
        document.getElementById("progressBarr").style.width = minute + "%";
        minute--; 
    }
 }, 600);

 // minuteur de la séconde 
 let miniterie = 60;
 setInterval(() => {
    if(miniterie > 0  && quizOne.style.display == 'block'){
        minuteur.innerText=miniterie;
        miniterie --;
       
    } else if(miniterie==0){
         pageSuivante(this); 
         miniterie = 60;
         minute = 100;
    }
       
 }, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction pour parcourrir et checcker la page actuelle avant de passer à la  suivante suivante
 const pageSuivante = function (){
    for (let i = 0; i < assertions.length; i++) { // La boucle pour parcourir les assertions 
        if(assertions[i].checked || (miniterie==0) ) {
            assertions[i].value +' = '+question[questionActif.index].Reponse;
           
    // Activation du boutton Suivant 
            
//////////////////////////////////////////////////////////////////////////////////////////////////

// Si l'assertion n'est pas cochée
            chargeQuestion(questionActif.index);
            document.querySelector('#questionForm').reset();
            miniterie = 60;
            minute = 100;
//////////////////////////////////////////////////////////////////////////////////////////////////

// Si la question ainsi que son index est égale à l'assertion ainsi que sa réponse alors le compteur sauve pour le score final
            if(assertions[i].value == question[questionActif.index].Reponse) {
                //alert('reussite');
                utilisateur.score += 1;

                
                //alert('nom: ' +utilisateur.nom+' email: ' + utilisateur.email+' score:' + utilisateur.score);
            }
            // else {
            //     //alert('echec');
            //    // alert('nom: ' +utilisateur.nom+' email: ' + utilisateur.email+' score:' + utilisateur.score);
                
            // }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Compteur pour afficher la page suivante 
            questionActif.index += 1;
            chargeQuestion(questionActif.index);
            btnSuivant.disabled = true;
            btnSuivant.style.cursor="not-allowed";
            btnSuivant.style.backgroundColor="rgb(123, 233, 173)";
            document.querySelector('#questionForm').reset();
            //console.log(utilisateur.score);    
            //break;
            
        }
        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // vérifier la longueur de la question et le compteur avec l'index de la question sont égales pour afin passer à la dernière section
         if(questionActif.index == (question.length)){
            quizOne.style.display = 'none';
            end.style.display = 'block';
            imgFaled()
            const score = document.querySelector(".score");
            score.textContent = utilisateur.score + "/15" ;
            
             
        }
       
       } 

 }
      function imgFaled(){
    if ( utilisateur.score < 8){
        svgFaled.innerHTML = '<svg class="failed" width="174" height="100" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/><path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/></svg>';
    } 
 
 }

 //Changer le page quand on appuie sur suivant et enregistrement des réponses
btnSuivant.addEventListener('click', function(){

    pageSuivante(this); 
    miniterie = 60;
    minute = 100;

}) ;

// Desactiver le boutton avant de cocher l'assertion
answer.forEach((el) => {
    el.addEventListener('click', function(){
    btnSuivant.disabled = false;
    btnSuivant.style.background="green";
    btnSuivant.style.cursor="pointer";
})
}); 






   
