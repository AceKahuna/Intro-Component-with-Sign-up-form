const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


//form submission
form.addEventListener('submit', (event) => {
    if(form.getAttribute("invalid")){
        event.preventDefault();
        console.log(form.getAttribute("invalid"));
        formValidation();
        console.log(form.getAttribute("invalid"));
    }
        console.log("success");
        form.reset();
});

// email format validation
const checkMail = (email) =>{
    let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailFormat.test((email).toLowerCase());
}

//form validation
const formValidation = () =>{

    if(firstName.value === ''){
        showError(firstName);
        
    }else if(firstName.value.length > 15){
        showError(firstName);      
    }else{
        hideError(firstName);       
    }

    if(lastName.value === ''){
        showError(lastName);    
    }else if(lastName.value.length > 15){
        showError(lastName);       
    }else{
        hideError(lastName);    
    }

    if(email.value === ''){
        showError(email);    
    }else{
        if(!checkMail(email.value)){
            showError(email);  
        }else{
            hideError(email);
        }  
    } 
    if(password.value === ''){
        showError(password);
    }else if(password.value.length > 15){
        showError(password); 
    }else{
        hideError(password);
    }
    if(!form.getAttribute("invalid")){
        form.submit();
    }
}

const showError= (input) =>{
    console.log(input.parentElement);
    const iconError = input.parentElement.querySelector(".icon");
    const msg = input.parentElement.querySelector(".msg");
    iconError.classList.remove('icon');
    iconError.classList.add('icon-error');
    msg.classList.remove('msg');
    msg.classList.add('error-message');
    input.parentElement.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    form.setAttribute("invalid", true);
}

const hideError = (input) =>{
    const iconError = input.parentElement.querySelector(".icon-error");
    const msg = input.parentElement.querySelector(".error-message");
    if(iconError && msg){
        iconError.classList.add('icon');
        iconError.classList.remove('icon-error');
        msg.classList.add('msg');
        msg.classList.remove('error-message');
        input.parentElement.style.setProperty('--border', '2px solid #b9b6d3');
    }
    form.setAttribute("invalid", false);
}