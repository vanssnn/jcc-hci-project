function validate(event){

    event.preventDefault();

    // Get all element
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");
    var prefPhone = document.getElementById("prefPhone");
    var prefEmail = document.getElementById("prefEmail");

    // Get error element
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");
    var messageError = document.getElementById("message-error");
    var prefError = document.getElementById("pref-error");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    prefError.textContent = "";

    var isValid = true;

    // 1
    if (name.value.length < 3) {
        isValid = false;
        nameError.textContent = "Name must be atleast 3 character long."
    }

    // 2
    if (!email.value.includes("@")) {
        isValid = false;
        emailError.textContent = "Email must have an @ symbol."
    }

    if (email.value.length < 3) {
        isValid = false;
        emailError.textContent = "Email must be atleast 3 character long."
    }

    // 3
    if (phone.value.length < 4) {
        isValid = false;
        phoneError.textContent = "Phone Number must be atleast 4 character long."
    }
    
    if (!isAllNumber(phone.value)) {
        isValid = false;
        phoneError.textContent = "Phone Number must contain only numbers."
    }

    // 4
    if (message.value.length < 4) {
        isValid = false;
        messageError.textContent = "Message must be atleast 4 character long."
    }

    // 5
    if (!prefPhone.checked && !prefEmail.checked) {
        isValid = false;
        prefError.textContent = "Atleast one preferred contact method must be selected."
    }

    if (isValid) {
        document.getElementById("dataForm").submit();
        alert("Data has been submitted!");
    }

}

function resetError(event) {
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");
    var messageError = document.getElementById("message-error");
    var prefError = document.getElementById("pref-error");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    prefError.textContent = "";
}

function isAllNumber(str){
    for (let i=0; i<str.length; i++) {
        if (isNaN(str[i])) {
            return false;
        }
    }

    return true;
}