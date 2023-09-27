import { Link, useNavigate } from "react-router-dom";
import "../style/registration-styles.css"
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    
    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value);
    //     console.log('username :>> ', handleUsernameChange);
    //  };
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
        login(email, password);
        if (email && password) { navigate("/UserPage") };
    }

    return (
        <div className="RegistrationBox">
            <img
                src="../src/assets/purple-arrow-left.svg"
                className="RegistrationGoBackArrow"
                onClick={goBack}
            />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                {/* <div>
                    <label>Username</label>
                    <input type="text" placeholder="Your Username" onChange={handleUsernameChange}></input>
                </div> */}
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" onChange={handleEmailChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Your Password" onChange={handlePasswordChange}></input>
                </div>
                <p>Did you forget your password? <Link to="/">Reset it</Link></p>
                <button type="submit">Login</button>

            </form>
            {/* <div className="SignupDisclaimer">
                <p>By clicking the “Sign up” button, you are creating an account and therefore you agree to Terms of Use and Privacy Policy.</p>
            </div> */}
            <div>
                <p className="LoginOption">Not a member?<Link to="/registration">Create an Account</Link></p>
               
            </div>
        </div>
    );
};

export default Login