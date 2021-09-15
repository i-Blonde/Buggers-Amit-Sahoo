
 console.log("cc");
 function numberValidation(){
     let num = document.querySelector(".num").value;
     if(num.length == 10 || num == ""){
        document.querySelector(".error").innerHTML = ` `;
     }
    // else if(num.length <10){
    //     document.querySelector(".error").innerHTML = `**Please enter a correct number**`;
    // }else if (num >= 'a' && num <= 'z'){
    //     document.querySelector(".error").innerHTML = "****"
    // }
}

function emailValidation() {
    let mail = document.querySelector(".mail").value;
    if(mail == null){
        mail.style.border = "red";
    }
    else if(mail == ""){
        document.querySelector(".error").innerHTML = ` `;

    }
    // if(mail == ""){
    //     document.querySelector('.error').innerHTML = " **Please fill the email**";
    // }
    else if(mail.indexOf('@') <= 0){
        document.querySelector('.error').innerHTML = " **Please enter the correct email**";
        mail.style.border = "red";
    }
    else{
        return false;
    }
}
function passValidation() {
    let pass = document.querySelector(".pass").value;
    let st = "@#$!%^&*()_+><?:'{}[]\|";
    
    if(pass.indexOf(st) == 1){
console.log("@@");
    }
}

function nameValidation() {
    let name = document.querySelector(".name").value;

    if(name == ""){
        document.querySelector(".error").innerHTML = ` `;

    }
    else if(name == " "){
        document.querySelector(".error").innerHTML = `** Enter a valid Name **`
    }
}

function submit() {
   let btn =  document.querySelector('.btn');
   console.log("Button clicked");
}
let eye = document.querySelector(".eye");
let inputPass = document.querySelector(".pass");
// console.log(eye);

// Password show functionality
eye.addEventListener('mousedown', function show() {
    inputPass.type = "text";
});
// Password hide functionality
eye.addEventListener('mouseup', ()=> {
    inputPass.type = "password";
        
})