import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

function useIsAuth() {
    
    const { user } = useContext(AuthContext);
    const isAuthenticated = user !== null ? true : false;

    return (
        isAuthenticated
    );
};

export { useIsAuth };