import { Link } from "react-router-dom";
import "../style/registration-styles.css"


function Login() {
    return (
        <div className="RegistrationBox">
            <h1>Login</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Your Password"></input>
                </div>
                <button type="submit">Login</button>

            </form>
            {/* <div className="SignupDisclaimer">
                <p>By clicking the “Sign up” button, you are creating an account and therefore you agree to Terms of Use and Privacy Policy.</p>
            </div> */}
            <div>
                <p className="LoginOption">Not a member?<Link to="/registration">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login