


const form = document.getElementById('form');

let error = []
form.addEventListener('submit', function (e){
    e.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');

    if (username.value.length == 0){
        document.getElementById("erreurNom").innerText="N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
        username.style.border="1px solid red";
    } else{
        document.getElementById("erreurNom").innerText=""
        //username.style.border="1px solid green"
    }
    if (email.value.length == 0){
        document.getElementById("erreurMail").innerText = "N’oubliez pas de renseigner votre email avant de commencer le Quiz";
        email.style.border="1px solid red";

    }else{
        document.getElementById("erreurMail").innerText=""
        //email.style.border="1px solid green"
    }
   
});

const buttonBegin = document.querySelector("#buttonBegin");
const quizOne = document.querySelector(".quizOne");
const sectionLogin =document.querySelector(".sectionLogin");
const quitter = document.querySelector(".quitter");
const suivant = document.querySelector(".suivant");
const end1 = document.querySelector(".end1");
const accueil = document.getElementById("accueil");


   

   buttonBegin.addEventListener('click', () => {
    if(quizOne.style.display === 'none') {
        quizOne.style.display = 'block';
        sectionLogin.style.display ='none';
       } else {
        quizOne.style.display = 'none';
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



   
