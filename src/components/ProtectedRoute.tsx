import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useIsAuth } from "../hooks/useIsAuth.js";

interface ProtectedRouteProps {
    children: ReactNode;
};

function ProtectedRoute({children}: ProtectedRouteProps) {
    // This bouncer will check you and  let you in... or not.
    const {loading} = useContext(AuthContext);

    const allowAccess = useIsAuth();

    return <>
        {loading ? <div className="LoadingPage"><h1>Loading...</h1></div> : allowAccess ? children : <div className="WarningMessage">
        <h2><Link to="/registration">Register</Link> or <Link to="/login">login</Link> to access this area</h2>
        </div>}
    </>
};

export default ProtectedRoute