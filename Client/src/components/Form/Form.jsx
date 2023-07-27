import validation from "../../validation";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import style from './Form.module.css';
import {login} from '../../redux/actions/actions';

export default function Form(){
    const [userData, setData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [isShow, setShow] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setErrors(validation({...userData, [event.target.name]: event.target.value}));
        setData({...userData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.values(errors).length === 0){
            dispatch(login(userData));
            setData({email: "", password: ""});
            setErrors({});
        }else window.alert("El usuario/password no son validos");
        navigate('/home');
    };

    return(
        <div className={style.contains} >
            <form className={style.form} onSubmit={handleSubmit}>
                <p>Login</p>
                <label className={style.usernameLabel} >Email: </label>
                <input className={style.username} name="email" type="text" 
                value={userData.email} onChange={handleChange}/>
                <p className={style.error} >{errors.email}</p>
                <label className={style.passwordLabel} >Password: </label>
                <input className={style.password} name="password" type={isShow ? "text" : 
                "password"} value={userData.password} onChange={handleChange}/>
                <input className={style.checkbox} type="checkbox" checked={isShow} onChange={() => setShow(!isShow)}/>
                <p className={style.error} >{errors.password}</p>
                {userData.email !== "" && Object.keys(errors).length === 0 &&
                <button name="submit" type="submit">Log In</button>}
            </form>
        </div>
    );
};