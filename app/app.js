const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.querySelector('.msg');
const iconError = document.querySelector('.icon');
const root = document.documentElement;


//form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
});

// email format validation
const checkMail = (email) =>{
    let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailFormat.test((email).toLowerCase());
}

//form validation
const formValidation = () =>{

    if(firstName.value === ''){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else if(firstName.value.length > 15){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else{
        firstName.value = "";
        iconError.classList.add('icon');
        iconError.classList.remove('icon-error');
        msg.classList.add('msg');
        msg.classList.remove('error-message');
        root.style.setProperty('--border', '2px solid #b9b6d3');
    }

    if(lastName.value === ''){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else if(lastName.value.length > 15){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else{
        lastName.value = "";
        iconError.classList.add('icon');
        iconError.classList.remove('icon-error');
        msg.classList.add('msg');
        msg.classList.remove('error-message');
        root.style.setProperty('--border', '2px solid #b9b6d3');
    }

    if(email.value === ''){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else{
        if(!checkMail(email.value)){
            iconError.classList.remove('icon');
            iconError.classList.add('icon-error');
            msg.classList.remove('msg');
            msg.classList.add('error-message');
            root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
        }else{
            email.value = "";
            iconError.classList.add('icon');
            iconError.classList.remove('icon-error');
            msg.classList.add('msg');
            msg.classList.remove('error-message');
            root.style.setProperty('--border', '2px solid #b9b6d3');
        }  
    } 

    if(password.value === ''){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)');
    }else if(password.value.length > 15){
        iconError.classList.remove('icon');
        iconError.classList.add('icon-error');
        msg.classList.remove('msg');
        msg.classList.add('error-message');
        root.style.setProperty('--border', '2px solid hsl(0, 100%, 74%)'); 
    }else{
        password.value = "";
        iconError.classList.add('icon');
        iconError.classList.remove('icon-error');
        msg.classList.add('msg');
        msg.classList.remove('error-message');
        root.style.setProperty('--border', '2px solid #b9b6d3');
    }
}
