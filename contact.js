/* This is the code that I wrote for the Javascropt 1 CA for the from validation part. 
I have taken that code and used it as a base for this assignment.*/

const contactForm = document.querySelector("#contactForm");
const formError = document.querySelectorAll(".formError");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValue = name.value;
    const emailValue = email.value;
    const messageValue = message.value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError")
    const invalidEmail = document.getElementById("invalidEmailError");
    const validMessageError = document.getElementById("validMessageError");

    if (notEmptyValue(nameValue) === false){
        nameError.style.display = "block";
    }
    else {
        nameError.style.display = "none"
    }

    if (notEmptyValue(emailValue) === false){
        emailError.style.display = "block";
    }
    else{
        emailError.style.display = "none";
    }

    if (notEmptyValue(messageValue) === false){
        messageError.style.display = "block";
    }
    else{
        messageError.style.display = "none";
    }

    if (validateEmailFormat(emailValue) === false){
        
        invalidEmail.style.display = "block";
    }
    else{
        invalidEmail.style.display = "none";
    }

    if (validMessageLength(messageValue) === false){
        
        validMessageError.style.display = "block";
    }
    else {
        validMessageError.style.display = "none";
    }

});

function notEmptyValue(value){
    const trimmedValue = value.trim();
    if (trimmedValue.length > 0 ) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmailFormat (email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function validMessageLength (value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= 10){
        return true;
    }
    else {
        return false;
    }
}