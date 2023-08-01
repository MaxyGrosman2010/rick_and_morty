import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {validationSignUp} from '../../validation';
import axios from 'axios';
import env from 'react-dotenv';
import style from './Form.module.css';

const endPointUser = env.REACT_APP_ENDPOINTUSER;

export default function SignUp(){
    const [signUpData, setSignUp] = useState({name: "", email: "", password: "", 
    repeat: ""});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        setErrors(validationSignUp({...signUpData, [event.target.name]: event.target.value}));
        setSignUp({...signUpData, [event.target.name]: event.target.value});
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
        <div className={style.contains} >
            <form className={style.form}  onSubmit={handleSubmit} >
                <p>Sign Up</p>

                <label className={style.usernameLabel} >Name:</label>
                <input className={style.username} type="text" name="name" 
                value={signUpData.name} onChange={handleChange} />
                <p className={style.error} >{errors.name}</p>

                <label className={style.usernameLabel} >Email:</label>
                <input className={style.username} type="text" name="email" 
                value={signUpData.email} onChange={handleChange} />
                <p className={style.error} >{errors.email}</p>

                <label className={style.passwordLabel} >Password:</label>
                <input className={style.password} type="text" name="password" 
                value={signUpData.password} onChange={handleChange} />
                <p className={style.error} >{errors.password}</p>

                <label className={style.passwordLabel} >Repeat Password:</label>
                <input className={style.password} type="text" name="repeat" 
                value={signUpData.repeat} onChange={handleChange} />
                <p className={style.error} >{errors.repeat}</p>

                {Object.values(errors).length === 0 && signUpData.name !== "" && 
                signUpData.email !== "" && signUpData.password !== "" && 
                signUpData.repeat !== "" && <button className={style.submit} 
                name="submit" type="submit">Sign Up</button>}
            </form>
        </div>
    );
};