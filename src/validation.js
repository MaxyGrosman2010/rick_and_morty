export default function validation(inputs){

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.+\d).{6,10}$/gm;
    let errors = {};
    
    if(inputs.email) {

        if(inputs.email.length < 35){

            if(!regexEmail.test(inputs.email)) errors.email = "No es un email";
            else errors.email = "";

        }else errors.email = "Es muy largo para ser un email";
    }
    
    if(inputs.password){

        if(!regexPassword.test(inputs.password)) errors.password = "No cumple las condiciones para ser un password";
        else errors.password = "";
    }

    return errors;
}