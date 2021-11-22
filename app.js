const btn = document.querySelector(".form-btn");
let emailValue = document.getElementById("userMail");
let passwordValue = document.getElementById("passw");
let errorDialogue = document.createElement("h1");


btn.addEventListener("click" , (event)=>{
    event.preventDefault();

    if(emailValue.value.trim().length === 0 || passwordValue.value.trim().length === 0 ){
        errorDialogue.innerText = "please fill the form";
        document.querySelector(".container").append(errorDialogue);
        return;
    }else if(passwordValue.value.trim().length < 8 ){
        errorDialogue.innerText = "please enter password minimum 8 digit or character";
        document.querySelector(".container").append(errorDialogue);
        return;
    }else if(!emailValue.value.includes("@")){
        errorDialogue.innerText = "please enter the valid E-mail";
        document.querySelector(".container").append(errorDialogue);
        return;
    }else{
        errorDialogue.innerText = "SUCCESSFULLY FORM SUBMITTED !";
        document.querySelector(".container").append(errorDialogue);
    }

    console.log(emailValue.value);
    console.log(passwordValue.value);
})

