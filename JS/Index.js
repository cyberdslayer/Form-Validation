


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// * adding event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Validate();

})


// more email validate

const isEmail(emailValue)=> {
    var atSymbol = emailValue.indexOf('@');
    if (atSymbol < 1) {return false;}
    var dot = emailValue.lastIndexOf('.');
    if (dot <= atSymbol +2 ) return false;
    if (dot ===  emailValue.length - 1) return false;
    return true ;
}


// Defining the validate function

const validate = () => {

    // removing before and after whitespacing
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // validating username

    if (usernameValue === ""){
    setErrorMsg(username, 'username cannot be blank');
    } else if (usernameValue.length <= 2){
        setErrorMsg(usernameValue, 'username min 3 char required');
    }else{
        setSuccessMsg(username);
    }


    // validate your email

    if (emailValue === "") {
        setErrorMsg(username, 'email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorMsg(emailValue, 'not a valid email');
    } else {
        setSuccessMsg(username);
    }
}


function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "formControl error";
    small.innerText = errormsgs
}



