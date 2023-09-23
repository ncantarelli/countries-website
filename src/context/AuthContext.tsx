import { ReactNode, createContext, useState } from "react";
import { User } from "../types/customTypes";

interface AuthContextType {
    user: User | null;
    setUser: (user:User) => void;
};

interface AuthContextProviderProps {
    children: ReactNode;
    // ReactNode is a built-in type for components. This is gonna be one or an array of React components. Functions that return JSX. The predefined type for it is ReactNode.
};

const AuthInitContext = {
    user: null,
    setUser: ()=>console.log("context not initialized")
};

// 1. Create context

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

// 2. Define the provider component

export const AuthContextProvider = ({children} : AuthContextProviderProps) => {

    // Declare here the states and functions you want to export/make available

    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};