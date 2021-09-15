
 function numberValidation(){
     let number = document.querySelector(".num").value;
     
    //  let error = document.querySelector(".error").value;
    if(number == ""){
        document.querySelector(".error").innerHTML = ` `;

    }
     else if(number != NaN){
        document.querySelector(".error").innerHTML = `** Enter a correct contact number **`
     } else if (number >= 0 && number <= 9){
         return false;
     }
     else{
         return false;
     }
}

function emailValidation() {
    let mail = document.querySelector(".mail").value;
    if(mail == ""){
        document.querySelector(".error").innerHTML = ` `;

    }
    // if(mail == ""){
    //     document.querySelector('.error').innerHTML = " **Please fill the email**";
    // }
    else if(mail.indexOf('@') <= 0){
        document.querySelector('.error').innerHTML = " **Please enter the correct email**";

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