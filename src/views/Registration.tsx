import { Link } from "react-router-dom";
import "../style/registration-styles.css"


function Registration() {
    return (
        <div className="RegistrationBox">
            <h1>Registration</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Your Password"></input>
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