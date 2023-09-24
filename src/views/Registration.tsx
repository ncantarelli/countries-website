import { Link, useNavigate } from "react-router-dom";
import "../style/registration-styles.css"
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


function Registration() {
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    };
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => { 
        setName(e.target.value);
        console.log('name :>> ', name);
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log('email :>> ', email);
     };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { 
        setPassword(e.target.value);
        console.log('password :>> ', password);
    };
    
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('name, email, password :>> ', name, email, password);
    }

    return (
        <div className="RegistrationBox">
            <img
                src="../src/assets/purple-arrow-left.svg"
                className="RegistrationGoBackArrow"
                onClick={goBack}
            />
            <h1>Registration</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" onChange={handleNameChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" onChange={handleEmailChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Your Password" onChange={handlePasswordChange}></input>
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="SignupDisclaimer">
                <p>By clicking the “Sign up” button, you are creating an account and therefore you agree to Terms of Use and Privacy Policy.</p>
            </div>
            <div>
                <p className="LoginOption">Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default Registration