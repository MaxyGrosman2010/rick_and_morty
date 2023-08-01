const validationLogin = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.+\d).{6,10}$/gm;
    let error = {};
    if(inputs.email) {
        if(inputs.email.length < 35){
            if(!regexEmail.test(inputs.email)) error.email = "No es un email";

        }else error.email = "Es muy largo para ser un email";
    };
    if(inputs.password){
        if(!regexPassword.test(inputs.password)) error.password = "No cumple las condiciones para ser un password";
    };
    return error;
};

const validationSignUp = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.+\d).{6,10}$/gm;
    let error = {};
    if(inputs.name) ;
    if(inputs.email) 
        if(inputs.email.length < 35)
            if(!regexEmail.test(inputs.email))
                error.email = "No es un email";
        else error.email = "Es muy largo para ser un email";
    if(inputs.password)
        if(!regexPassword.test(inputs.password)) 
            error.password = "No cumple las condiciones para ser un password";
    if(inputs.repeat !== inputs.password) error.repeat = "Invalido, las passwords no son iguales";
    return error;
};

module.exports = {validationLogin, validationSignUp};