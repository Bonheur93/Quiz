


const form = document.getElementById('form');

var error = []
form.addEventListener('submit', function (e){
    e.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');

    if (username.value.length == 0){
        document.getElementById("erreurNom").innerText="N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
        username.style.border="1px solid red";
    } else{
        document.getElementById("erreurNom").innerText=""
        username.style.border="1px solid green"
    }
    if (email.value.length == 0){
        document.getElementById("erreurMail").innerText = "N’oubliez pas de renseigner votre email avant de commencer le Quiz";
        email.style.border="1px solid red";

    }else{
        document.getElementById("erreurMail").innerText=""
        email.style.border="1px solid green"
    }

    

});
