'use client'
import { createContext, useContext, useState} from "react";
import { UserContextType, UserTypes } from "./types";

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }: { children: React.ReactNode;}) => {
    const [user, setUser] = useState<UserTypes | null>(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === null) {
        throw new Error('useUserContext must be used within a UserContextProvider')
    }
    return context
}