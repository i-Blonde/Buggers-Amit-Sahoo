
// Contact Number Validation
    function numValid() {
        let num = document.querySelector("#num").value;
        let pnum = parseInt(num);
        // console.log(num);
        var inp = /[^0-9]/gi;
        // console.log(inp);
        if(pnum.length < 10 && num == " " ){
           
            document.querySelector("#num").style.borderColor = "Red";
        }if(num == ""){
            document.querySelector("#num").style.borderColor = "";
        }
        if(num.length == 10){
            document.querySelector("#num").style.borderColor = "Green";
        }
    }

//  function numberValidation(){
//      let num = document.querySelector(".num").value;
//      if(num.length == 10 || num == ""){
//         // document.querySelector(".error").innerHTML = ` `;
//         document.querySelector(".num").style.borderColor = "Green";
//     }else if(num == "a"){
//        document.querySelector(".num").style.borderColor = "Red";
//     }
//      else if(num.length <10){
//         document.querySelector(".num").style.borderColor = "Red";
//      }
//     // else if(num.length <10){
//     //     document.querySelector(".error").innerHTML = `**Please enter a correct number**`;
//     // }else if (num >= 'a' && num <= 'z'){
//     //     document.querySelector(".error").innerHTML = "****"
//     // }
// }

// function emailValidation() {
//     let mail = document.querySelector(".mail").value;
//     if(mail == null){
//         mail.style.borderColor = "Red";
//     }
//     else if( mail.length -2 == "." || mail.length -3 == "."){
//         document.querySelector(".error").innerHTML = ` `;
//         document.querySelector(".mail").style.borderColor = "Green"

//     }
//     // if(mail == ""){
//     //     document.querySelector('.error').innerHTML = " **Please fill the email**";
//     // }
//     // else if(mail.indexOf('@') <= 0){
//     //     document.querySelector('.error').innerHTML = " **Please enter the correct email**";
//     //     mail.style.border = "red";
//     // }
//     // else if(mail.length <= 0 || mail == " " || mail.length -2 != "." || mail.length -3 != "."){
//     //     document.querySelector(".mail").style.borderColor = "Red";
//     // }
//     else{
//         return false;
//     }
// }

// Password Validation
function passValidation() {
    let pass = document.querySelector(".pass").value;
    let st = "@#$!%^&*()_+><?:'{}[]\|";
    
    if(pass.indexOf(st) == 1){
console.log("@@");
    }
}

// Name Validation
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

function emailValidation(){
    let email = document.getElementsByClassName("mail");
    if(email.match("a")){

        console.log(email);
    }
}

