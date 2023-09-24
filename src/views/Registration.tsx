import { Link, useNavigate } from "react-router-dom";
import "../style/registration-styles.css"


function Registration() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    return (
        <div className="RegistrationBox">
            <img
                src="../src/assets/purple-arrow-left.svg"
                className="RegistrationGoBackArrow"
                onClick={goBack}
            />
            <h1>Registration</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Your Name"></input>
                </div>
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