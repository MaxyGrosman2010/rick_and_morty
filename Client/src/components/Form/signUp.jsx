import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {validationSignUp} from '../../validation';
import axios from 'axios';
import env from 'react-dotenv';
import style from './SignUp.module.css';

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
        <div className={style.background} >
            <Link to="/" >
               <img src='rickAndMorty.png' alt='logo' />
            </Link>
            <div className={style.contains} >
                <form className={style.form}  onSubmit={handleSubmit} >
                    <h2 className={style.title} >Sign Up</h2>

                    <label className={style.nameLabel} >Name:</label>
                    <input className={style.name} type="text" name="name" 
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

                    <label className={style.repeatLabel} >Repeat Password:</label>
                    <input className={style.repeat} type="text" name="repeat" 
                    value={signUpData.repeat} onChange={handleChange} />
                    <p className={style.error} >{errors.repeat}</p>

                    <button className={style.submit} name="submit" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};