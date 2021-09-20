
// Create Account Button 


// Validation for the sign up form and the fields

const fc = document.getElementsByClassName("form-control");
console.log(fc);
const nameValidation = () => {

    const nameVal = document.querySelector(".name").value.trim();
    // const name = document.querySelector(".name");
    if (nameVal == "") {
        fc.classList = "form-control error";
        return false;
    } else if (nameVal.length < 3) {
        fc.classList = "form-control error";
        return false;
    } else {
        fc.classList = "form-control success";
        return true;
    }
}

const emailValD = (emailVal) => {
    var atSym = emailVal.indexOf("@");
    if(atSym < 1){
        return false;
    }
    var dot = emailVal.indexOf(".");
    if(dot <= atSym + 2){
        return false;
    }if(dot === emailVal.length-1){
        return false;
    }else{
        return true;
    }
}

const emailValidation = () => {
    const mailVal = document.querySelector(".email").value.trim();
    console.log(mailVal);
    if (mailVal == "" || mailVal.length < 5) {
        fc.classList = "form-control error";
        return false;
    }
    else if (!emailValD(mailVal)) {
        fc.classList = "form-control error";
        return false;
    }
    else {
        fc.classList = "form-control success";
        return true;
    }
}
const pass = document.querySelector(".pass");
const passValidation = () => {

    const passVal = pass.value.trim();
    if (passVal == "") {
        fc.classList = "form-control error";
        return false;
    } else if (passVal.length <= 5) {
        fc.classList = "form-control error";
        return false;
    } else {
        fc.classList = "form-control success";
        return true;
    }
}
const cnfpass = document.querySelector(".cnfPass");
const cnfPassValidation = () => {

    const cnfpassVal = cnfpass.value.trim();
    if (cnfpassVal == "") {
        fc.classList = "form-control error";
        return false;
    } else if (cnfpassVal.length <= 5) {
        fc.classList = "form-control error";
        return false;
    } else {
        fc.classList = "form-control success"
        return true;
    }
}
const num = document.querySelector(".num");
const numberValidation = () => {

    const numVal = num.value.trim();
    if (numVal == "" && numVal.length != 10) {
        fc.classList = "form-control error";
        return false;
    } else {
        fc.classList = "form-control success";
        return true;
    }
}

// Stops submission if data is not filled.

// form.addEventListener("submit", (event) => {


// });

const signUp = () => {
    let nameDone = nameValidation();
    console.log(nameDone);
    let emailDone = emailValidation();
    console.log(emailDone);
    let passDone = passValidation();
    console.log(passDone);
    let numDone = numberValidation();
    console.log(numDone);
    let cnfPassDone = cnfPassValidation();
    console.log(cnfPassDone);
    if (nameDone == true && emailDone == true && passDone == true && numDone == true && cnfPassDone == true && passDone === cnfPassDone) {
        return true;
    }
    else {
        return false;
    }

}
const but = document.querySelector(".butSignUp");
but.addEventListener("submit", function (event) {
    // console.log("done");
    event.preventDefault();
    let signUpDone = signUp();
    if (signUpDone == true) {
        console.log("Validation done");
    } else {

        console.log("validation faild");
    }
    // console.log(form);
});


let eye = document.querySelector(".eye");
let inputPass = document.querySelector(".pass");
// console.log(eye);

// Password show functionality
eye.addEventListener('mousedown', function show() {
    inputPass.type = "text";
});
// Password hide functionality
eye.addEventListener('mouseup', () => {
    inputPass.type = "password";

})