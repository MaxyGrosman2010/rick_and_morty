import validation from "../../validation";
import { useState } from "react";

export default function Form({login}){

    const [userData, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(validation({...userData, [event.target.name]: event.target.value}));
        setData({...userData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const error = Object.values(errors);

        if(error.length === 0){
            
            login(userData);
            setData({email: "", password: ""});
            setErrors({});

        }else window.alert("El usuario/password no son validos")
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <label>Email: </label>
                <input name="email" type="text" value={userData.email} onChange={handleChange}/>
                <p>{errors.email}</p>

                <label>Password: </label>
                <input name="password" type="text" value={userData.password} onChange={handleChange}/>
                <p>{errors.password}</p>

                {userData.email !== "" && Object.keys(errors).length === 0 &&
                <button name="submit" type="submit">Submit</button>}
            </form>
        </div>
    );
}