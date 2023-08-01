import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {validationSignUp} from '../../validation';
import axios from 'axios';
import env from 'react-dotenv';

const endPointUser = env.REACT_APP_ENDPOINTUSER;

export default function SignUp(){
    const [signUpData, setSignUp] = useState({name: "", email: "", password: "", 
        repeat: ""});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        setErrors(validationSignUp({...signUpData, 
            [event.target.name]: event.target.value}));
        setSignUp({...setSignUp, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.values(errors).length === 0){
            axios.post(`${endPointUser}/signup`, signUpData).then(({data}) => {
                window.alert('El usuario fue creado');
                navigate('/');
            }).catch((error) => {
                window.alert('Los datos no son validos')
            });
        }else window.alert("Ingrese datos validos");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p>Sign Up</p>
                <label >Name:</label>
                <input type="text" name="name" value={signUpData.name} 
                onChange={handleChange} />
                <p>{errors.name}</p>
                <label >Email:</label>
                <input type="text" name="email" value={signUpData.email} 
                onChange={handleChange} />
                <p>{errors.email}</p>
                <label >Password:</label>
                <input type="text" name="password" value={signUpData.password} 
                onChange={handleChange} />
                <p>{errors.password}</p>
                <label >Repeat Password:</label>
                <input type="text" name="repeat" value={signUpData.repeat} 
                onChange={handleChange} />
                <p>{errors.repeat}</p>
                {Object.keys(errors).length === 0 && signUpData.name !== "" && 
                signUpData.email !== "" && signUpData.password !== "" && 
                signUpData !== "" && 
                <button name="submit" type="submit">Sign Up</button>}
            </form>
        </div>
    );
};