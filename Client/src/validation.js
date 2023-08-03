const validationLogin = (inputs) => {
    let regexEmail = /\S+@\S+\.\S+/;
    let errors = {};

    if(!inputs.email) {
        errors.email = 'Email is required';
    }else if(!regexEmail.test(inputs.email)) {
        errors.email = 'Invalid email format';
    };
    
    if(!inputs.password) {
        errors.password = 'Password required';
    };
    
    return errors;
};

const validationSignUp = (inputs) => {
    let errors = {};
    let regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/;
    let regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    if(!inputs.name) {
        errors.name = 'Name is required';
    }else if(!regexName.test(inputs.name)) {
        errors.name = 'Invalid name';
    };

  if(!inputs.email) {
    errors.email = 'Email is required';
  }else if(!regexEmail.test(inputs.email)) {
    errors.email = 'Invalid email';
  };

  if(!inputs.password) {
    errors.password = 'Password is required'; 
  }else if(!regexPassword.test(inputs.password)) {
    errors.password ='Password must contain at least 8 characters, including letters, numbers, and special characters.';
  };

  if(inputs.password !== inputs.repeat){
    errors.password = 'No match passwords';
    errors.repeat = 'No match passwords'
  } else if (!inputs.repeat){
    errors.repeat = 'No match passwords'
  };

  return errors;
};

module.exports = {validationLogin, validationSignUp};