import {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import env from 'react-dotenv';
import {validationLogin} from "../../validation";
import style from './Form.module.css';
import axios from 'axios';
import {setToken, setUser, getUser} from "../../utils/localStorage";



const endPointUser = env.REACT_APP_ENDPOINTUSER;

export default function Form(){
    const [userData, setData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [isShow, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let user = getUser();
        if(user) navigate('/home');
    }, []);

    const handleChange = (event) => {
        setErrors(validationLogin({...userData, [event.target.name]: event.target.value}));
        setData({...userData, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.values(errors).length === 0){
            axios.post(`${endPointUser}login`, userData).then(({data}) => {
                setToken(data?.token);
                let fullname = data?.name.split(" ");
                let response;
                if(fullname.length === 3) response = {name: fullname.shift().trim(), 
                    middleName: fullname.shift().trim(), lastName: fullname.pop().trim(), 
                    role: data?.role};
                else response = {name: fullname.shift().trim(), 
                    lastName: fullname.pop().trim(), role: data?.role};
                setUser(response);
                setData({email: "", password: ""});
                setErrors({});
                navigate('/home');
            }).catch((error) => {
                window.alert('Este usuario no existe');
                console.log(error);
            });
        }else window.alert('El usuario/password no son validos');
    };

    return(
        <div className={style.background} >
            <Link to="/" >
               <img src='rickAndMorty.png' alt='logo' />
            </Link>
            <div className={style.contains} >
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2 className={style.title} >Login</h2>

                    <label className={style.usernameLabel} >Email: </label>
                    <input className={style.username} name="email" type="text" 
                    value={userData.email} onChange={handleChange}/>
                    <p className={style.error} >{errors.email}</p>

                    <label className={style.passwordLabel} >Password: </label>
                    <input className={style.password} name="password" type={isShow ? "text" : 
                    "password"} value={userData.password} onChange={handleChange}/>
                    <input className={style.checkbox} type="checkbox" checked={isShow} 
                    onChange={() => setShow(!isShow)}/>
                    <p className={style.error} >{errors.password}</p>

                    <button className={style.submit} 
                    name="submit" type="submit">Log In</button>
                    
                    <Link to={'/signUp'} >
                        <button className={style.move} >Sign Up</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};