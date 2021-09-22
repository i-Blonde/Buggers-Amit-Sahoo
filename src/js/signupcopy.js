let eye = document.querySelector(".eye");
let inputPass = document.querySelector(".pass");
// console.log(eye);

// Password show functionality
eye.addEventListener("mousedown", function show() {
  inputPass.type = "text";
});
// Password hide functionality
eye.addEventListener("mouseup", () => {
  inputPass.type = "password";
 
});

// const fc = document.querySelectorAll(".form-control");
const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const cnfPass = document.querySelector(".cnfPass");
const num = document.querySelector(".num");

function setError(input) {
    const fc = document.querySelectorAll("form-control");
  input.className = "input-field error";
  fc.classList = "form-control error";
  input.parentElement.className = "form-control error"
}
function setSuccess(input) {
    const fc = document.getElementsByClassName("form-control");
    console.log(fc);
    input.className = "input-field success";
    fc.classList = "form-control success"
    input.parentElement.className = "form-control success"
}
// Name Validation
const nameValidation = () => {
  let nameVal = name.value.trim();
  if (nameVal == "") {
    setError(name);
    return false;
  } else if (nameVal.length < 3) {
    setError(name);
    return false;
  } else {
    setSuccess(name);
    // console.log(fc);
    return true;
  }
};
// Email Validation
const emailValidation = () => {
    let emailVal = email.value.trim();
    // console.log(emailVal);
  var dot = emailVal.indexOf(".");
  var atSym = emailVal.indexOf("@");
if (atSym < 1 || dot <= atSym + 2 || emailVal == "" || emailVal.length < 5) {
      console.log("done");
      setError(email);
    // console.log(fc);
    return false;
 }else {
    setSuccess(email);
    console.log("gggg");
    return true;
  }
};
// Password Validitation
const passValidation = () => {
  let passVal = pass.value.trim();
  if (passVal == "") {
    setError(pass);
    return false;
  } else if (passVal.length <= 5) {
    setError(pass);
    return false;
  } else {
    setSuccess(pass);
    return true;
  }
};
// Confirm Password Validation
const cnfPassValidation = () => {
  let cnfPassVal = cnfPass.value.trim();
//   let passVal = pass.value.trim();
  if (cnfPassVal == "") {
    setError(cnfPass);
    return false;
  } else if (cnfPassVal.length <= 5) {
    setError(cnfPass);
    return false;
  }
//    else if (cnfPassVal === passVal) {
//     setError(cnfPass);
//     return false;
//   }
   else {
    setSuccess(cnfPass);
    return true;
  }
};
// Number Validation
const numValidation = () => {
  const numVal = num.value.trim();
  if (numVal == "" || numVal.length != 10) {
    setError(num);
    return false;
  } else {
    setSuccess(num);
    return true;
  }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameValidationDone = nameValidation();
    const emailValidationDone = emailValidation();
    const passValidationDone = passValidation();
    const cnfPassValidationDone = cnfPassValidation();
    const numValidationDone = numValidation();

    if(nameValidationDone == true && emailValidationDone == true && passValidationDone == true && cnfPassValidationDone == true && numValidationDone == true && passValidationDone === cnfPassValidationDone){
        swal("Good job!", "You have successfully Signed Up!", "success", {
            button: "Aww yiss!",
          });
    }
    

})