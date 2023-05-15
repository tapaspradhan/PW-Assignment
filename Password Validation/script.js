
subBtn=document.getElementById("subBtn");

subBtn.addEventListener("click",validationPassword)

function validationPassword() {
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let validationMessage=document.getElementById("validationMessage");

    if(password.length<8){
        validationMessage.innerHTML="Password must be 8 charactor";
        validationMessage.style.color="red";
    }else if(password !== confirmPassword){
        validationMessage.innerHTML="Password can't match";
        validationMessage.style.color="red";
    }else{
        validationMessage.innerHTML="Password Match scuessfully";
        validationMessage.style.color="green";
    }
}

