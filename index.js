
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
const end1 = document.querySelector(".end1");
const accueil = document.getElementById("accueil");

const form = document.getElementById('form');

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
    return validEmail.test(email.value); 
}

function checkName (username){
    const validUserName = /^([a-z A-Z]{3,20})$/;
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
        return false
    }else{
        const mailok = checkEmail(email)
        document.getElementById("erreurMail").innerText=""
        //email.style.border="1px solid green"
        return mailok;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////





buttonBegin.addEventListener('click', (e) => {
    e.preventDefault()
    if (  checkIdentityName()==true && checkIdentityMail()==true) {
        sectionLogin.style.display ='none';
        quizOne.style.display = 'block';
        chargeQuestion(questionActif.index);
    } else {
        console.log("non");
    }
    
   });

   quitter.addEventListener('click', () => {    
    if(end1.style.display === 'none') {
        end1.style.display ='block';
    quizOne.style.display ='none';
    }else{
        end1.style.display ='none';
    }
   });

   accueil.addEventListener('click', () => {
    if(sectionLogin.style.display === 'none') {
        sectionLogin.style.display ='block';
        end1.style.display ='none';
    }
   });

   // variable 
let questionActif = {
    index: 0
}
// création d'objet pour les question, assertions, réponses 
   let question = [
    {
        TitreQuestion : "Quel est le type d'un fichier javascrip?",
        assertion :[".ts", ".jsx", ".js", ".j"],
        Reponse : 2,
    },

    {
        TitreQuestion : "Qui est le chef de la famille?",
        assertion :["Enfent", "Papa", "Maman", "Tente"],
        Reponse : 1,
    },

    {
        TitreQuestion : "Quel est la capitale de la RDC?",
        assertion :["Kisangani", "Goma", "Beni", "Kinshasa"],
        Reponse : 3,
    },

    {
        TitreQuestion : "Comment s'appelle l'animal qui mange les verdures?",
        assertion :["Herbivor", "Carnivor", "Insectivor", "Omnivor"],
        Reponse : 0,
    },

    {
        TitreQuestion : "La poule est de quelle classe d'animaux?",
        assertion :["Batracien", "Volaille", "Rappasse", "Reptile"],
        Reponse : 1,
    },

    {
        TitreQuestion : "Comment s'appelle l'enfant d'un lion?",
        assertion :["Chaton", "Poussin", "Lionçaux", "Dinde"],
        Reponse : 2,
    },

    {
        TitreQuestion : "L'informatique c'est la science de?",
        assertion :["Corp humain", "De l'eau", "De la Sagesse", "Traitement de données"],
        Reponse : 3,
    },

    {
        TitreQuestion : "Quel est le pays le plus peuplé de l'Afrique?",
        assertion :["RDcongo", "Nigeria", "Maroc", "Tente"],
        Reponse : 1,
    },

    {
        TitreQuestion : "Comment s'appelle l'objet approprié pour boire de l'eau?",
        assertion :["Une Assiette", "Un Gobellet", "Une fourchette", "Une Couilleur"],
        Reponse : 1,
    },

    {
        TitreQuestion : "COmment s'appelle l'arbre de l'avoca?",
        assertion :["Le manguier", "L'avocatier", "Le citronier", "Le cotonier"],
        Reponse : 1,
    },

    {
        TitreQuestion : "COmment s'appelle l'arbre de la mangue?",
        assertion :["Le manguier", "L'avocatier", "Le citronier", "Le cotonier"],
        Reponse : 0,
    },

    {
        TitreQuestion : "La chèvre est ?",
        assertion :["Carnivor", "Herbivor", "Insectivor", "Omnivor"],
        Reponse : 1,
    },

    {
        TitreQuestion : "Quelle est le fleuve le plus long de l'afrique?",
        assertion :["Le fleuve nil", "Le fleuve Congo", "Le fleuve Zambeze", "Fleuve Missisipi"],
        Reponse : 1,
    },

    {
        TitreQuestion : "Quelle un organe de sens pour écouter?",
        assertion :["l'Ouie", "les Narines", "Le Gou", "Le touché"],
        Reponse : 0,
    },

    {
        TitreQuestion : "Que signifie Falacieux?",
        assertion :["Menteur", "Prometteur", "Verité", "Droit"],
        Reponse : 0,
    },
   ]
//Changer le page quand on appuie sur suivant
btnSuivant.addEventListener('click', () => {
    questionActif.index += 1;
    chargeQuestion(questionActif.index);
});   
// function pour charger toutes les questions
function chargeQuestion(indexQuestion) {
    if(indexQuestion < question.length) {
        //Charger les questions sur la forme
        questionAffiche.textContent = question[indexQuestion].TitreQuestion;
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
    if(miniterie >= 0 && quizOne.style.display == 'block'){
        minuteur.innerText=miniterie;
        miniterie --;
    }
 }, 1000);


   
