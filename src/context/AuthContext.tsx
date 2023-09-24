import { ReactNode, createContext, useState } from "react";
import { User } from "../types/customTypes";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

type UserCredentialsType = (a: string, b: string) => void;

interface AuthContextType {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
    register: UserCredentialsType;
    login: UserCredentialsType;
};

interface AuthContextProviderProps {
    children: ReactNode;
    // ReactNode is a built-in type for components. This is gonna be one or an array of React components. Functions that return JSX. The predefined type for it is ReactNode.
};

const AuthInitContext = {
    user: null,
    setUser: ()=> console.log("context not initialized"),
    logout: () => console.log("context not initialized"),
    register: () => console.log("context not initialized"),
    login: () => console.log("context not initialized"),
};

// 1. Create context

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

// 2. Define the provider component

export const AuthContextProvider = ({children} : AuthContextProviderProps) => {

    // Declare here the states and functions you want to export/make available

    const [user, setUser] = useState<User | null>(null);
    
    const register = async (email: string, password: string) => {
        // console.log('name, email, password :>> ', name, email, password);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const registeredUser = userCredential.user;
            console.log('registered user :>> ', registeredUser); 
        } catch (error) {
            const errorCode = "";
            const errorMessage = "";
            console.log('registration failed :>> ', error);
            // .. 
        };
        
    };

    const login: UserCredentialsType = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('user :>> ', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error :>> ', error);
            });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, setUser, logout, register, login}}>
            {children}
        </AuthContext.Provider>
    );
};