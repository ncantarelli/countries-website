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
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        console.log('username :>> ', username);
     };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log('email :>> ', email);
     };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { 
        setPassword(e.target.value);
        console.log('password :>> ', password);
    };
    
    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(username, email, password);
        if (username && email && password) { navigate("/UserPage") };
    }

    return (
        <div className="RegistrationBox">
            <img
                src="/src/assets/purple-arrow-left.svg"
                className="RegistrationGoBackArrow"
                onClick={goBack}
            />
            <h1>Registration</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username<span>*</span></label>
                    <input type="text" placeholder="Your Username" onChange={handleUsernameChange} required></input>
                </div>
                <div>
                    <label>Email<span>*</span></label>
                    <input type="email" placeholder="Your Email" onChange={handleEmailChange} required></input>
                </div>
                <div>
                    <label>Password<span>*</span></label>
                    <input type="password" placeholder="Your Password" onChange={handlePasswordChange}required></input>
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="SignupDisclaimer">
                <p>By clicking the “Sign up” button, you are creating an account and therefore you agree to Terms of Use and Privacy Policy.</p>
                <p>* All of this items are required in order to sign up.</p>
            </div>
            <div>
                <p className="LoginOption">Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default Registration