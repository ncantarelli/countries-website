import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode;
};


function ProtectedRoute(children: ProtectedRouteProps) {
    // This bouncer will check you and  let you in... or not.
    const { user } = useContext(AuthContext)

    // console.log('props :>> ', props);
    
    return (
        <>
        {user ? children : <h2>Register or login to access this content</h2>}
        </>
    );
};

export default ProtectedRoute