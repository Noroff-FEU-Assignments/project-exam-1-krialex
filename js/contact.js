const form = document.querySelector("form");
const userName = document.getElementById("name");
const errorName = document.getElementById("name-error");
const email = document.getElementById("email");
const errorEmail = document.getElementById("email-error");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subject-error");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");
const button = document.querySelector(".cta");

function validateForm(event) {
    let errorAccured = false;

    if(!checkLength(userName.value, 5)) {
        errorName.style.display = "block";
        errorAccured = true;
    } else {
        errorName.style.display = "none";
    }
    if(!validateEmail(email.value)) {
        errorEmail.style.display = "block";
        errorAccured = true;
    } else {
        errorEmail.style.display = "none";
    }
    if(!checkLength(subject.value, 15)) {
        subjectError.style.display = "block";
        errorAccured = true;
    } else {
        subjectError.style.display = "none";
    }
    if(!checkLength(message.value, 25)) {
        messageError.style.display = "block";
        errorAccured = true;
    } else {
        messageError.style.display = "none";
    }

    if(errorAccured) {
        event.preventDefault();
    } else {
        event.preventDefault();
        form.reset();
    }
    console.log("funker");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}