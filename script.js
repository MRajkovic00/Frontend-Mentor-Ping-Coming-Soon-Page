const email=document.querySelector("#email");
const btn=document.querySelector("#btn");
const form=document.querySelector("#form");
const error=document.querySelector(".error");


form.addEventListener("submit", (e) => {

    if(email.value==="" || !email.value.includes("@")|| !email.value.includes(".com")){
        e.preventDefault();
        email.style.border="1px solid rgb(241, 113, 113)";
        error.style.display="block";
    }
    
});