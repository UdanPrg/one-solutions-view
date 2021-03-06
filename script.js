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
const listMenu = document.getElementById("list-menu li");
// Menu
const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const element4 = document.getElementById("element4");
const element5 = document.getElementById("element5");
const aereolinea = document.getElementById("aereolinea");
const arrayMenu = [element1, element2, element3, element4, element5];

// Default Aereolinea
aereolinea.textContent = arrayMenu[0].textContent;
// Change age while range input change
rangeAge.addEventListener('input' , changeAge);
// Submit information to console
email.addEventListener('input', verifyEmailString)
send.addEventListener('click', sendToConsole);

/**
 * # Change text
 *  
 * Change text in Welcome Message
 */
for (let element of arrayMenu) {
    element.addEventListener("click", function() {
        aereolinea.textContent = element.textContent;
    });
}
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
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
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
    if(yesSend != false){
        console.log("Estos son los datos del furmulario: \n" + "Nombre Completo: " + fullName.value + "\nCorreo Electr??nico: " + email.value + "\nNo. Celular: " + celPhone.value + "\nEdad: " + rangeAge.value);
        sendSuccess.setAttribute('style', 'visibility: visible');
        
        setTimeout(function(){
            fullName.value = "";
            email.value = "";
            celPhone.value = "";
            rangeAge.value = 22;
            age.textContent = rangeAge.value;
            aereolinea.textContent = arrayMenu[0].textContent;
            sendSuccess.setAttribute('style', 'visibility: hidden');
        },5000);
    }else{
        alert("Todos la informaci??n es requerida. Completa correctamente cada campo.")
    }
}