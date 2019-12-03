//Select All Input
const inputs = document.querySelectorAll('input');

//REGEX Checking
const patterns = {
    //Check REGEX Username must be and contain 5 - 12 characters and incasesensitive
    username: /^[a-z\d]{5,12}$/i,

    //Check common email verification 
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

    //Check REGEX must be alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters
    password: /^[\w@-]{8,20}$/,

    //Check REGEX number (10 - 12 digits) and must start with 08
    telephone: /^[0][8]\d{8,10}$/,

    //Check REGEX lowercase letters, numbers and hyphens and be 8 - 20 characters
    slug: /^[a-z\d-]{8,20}$/
}

//Checking validate each user type in selected field
const validate = (field,regex) => {
    if(regex.test(field.value)) {
        field.className="valid";
    } else {
        field.className="invalid";
    }
}

//
inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
});