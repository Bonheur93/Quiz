const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {

    e.preventDefault();

    validateImputs();
});

const setError = (element, message) => {

const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');


errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success')


}
 const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

 };
 const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase()));
 }

const validateImputs = () => {
     const username = username.value.trim();
     const emailValue = email.value.trim();

     if (usernameValue === '') {
        setError(username, 'renseignez votre nom');
      } else {
        setSuccess(username);

      }
      if(emailValue === '') {
         setError(email, 'Email réquis');
    
      } else if (!isValidEmail(emailValue)){
        setError(email, 'Saisir une bonne adresse mail');

      } else{
        setSuccess(email);
      }
};