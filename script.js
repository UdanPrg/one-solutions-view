// Take Id's from DOM
const mainContain = document.getElementById("main-container");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var verifyEmail = false;
const celPhone = document.getElementById("celPhone");
const rangeAge = document.getElementById("rangeAge");
const age = document.getElementById("age");
const send = document.getElementById("send-button");
const sendSuccess = document.getElementById("send-success");

// Change age while range input change
rangeAge.addEventListener('input' , changeAge);
// Submit information to console
email.addEventListener('input', verifyEmailString)
send.addEventListener('click', sendToConsole);
console.log('x')
// celPhone.addEventListener('onkeypress', phoneValidation);

/**
 * # Change Age
 * 
 * @param {Event} e 
 */
function changeAge(e){
    age.textContent = e.target.value;
}

/**
 * # Verify Email
 * 
 * Verify Email
 */

function verifyEmailString(event) {
    let campo = event.target;
    
    if (emailRegex.test(campo.value)) {
        verifyEmail = true;
    } else {
        verifyEmail = false;
    }
};

/**
 * # Phone validation
 * 
 * Only phone charcter accepted 
 */

// function phoneValidation(event) {
//     var charCode = (evt.which) ? evt.which : evt.keyCode
//     cons
//     if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode == 107 ) 
//         return false;
//     return true;
// };
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    console.log(charCode)
    if(charCode == 43){
    console.log("dentro");
        return true;
    }else if (charCode > 31 && (charCode < 48 || charCode > 57) ) {
        return false;
    }
    return true;
}
/** # Send Info
 * 
 * Send information to console
 */
function sendToConsole(){
    var yesSend = fullName.value != ""  && verifyEmail != false && celPhone.value != "" && rangeAge.value != 0 ? true : false;
    console.log(yesSend);
    if(yesSend != false){
        console.log("Estos son los datos del furmulario: \n" + "Nombre Completo: " + fullName.value + "\nCorreo Electrónico: " + email.value + "\nNo. Celular: " + celPhone.value + "\nEdad: " + rangeAge.value);
        sendSuccess.setAttribute('style', 'visibility: visible');
        
        setTimeout(function(){
            fullName.value = "";
            email.value = "";
            celPhone.value = "";
            rangeAge.value = 22;
            age.textContent = rangeAge.value;
            sendSuccess.setAttribute('style', 'visibility: hidden');
        },5000);
    }else{
        alert("Todos la información es requerida. Completa correctamente cada campo.")
    }
}