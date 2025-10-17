'use client'

import { useUserContext } from "@/utils/contexts";
import { saveUser } from "@/utils/functions";
import { UserContextType } from "@/utils/types";
import { useEffect } from "react";

const UserLogic = () => {
    const {user, setUser} = useUserContext() as UserContextType

    useEffect(() => {
        const storedSession = localStorage.getItem("lastSession");
        if (storedSession) {
            const userKey = `savedUser__${storedSession}`
            const lastUser = localStorage.getItem(userKey)
            if (lastUser) {
                setUser(JSON.parse(lastUser))
            }         
        }
    }, []);

    useEffect(() => {   
        if (user) {
            saveUser(user)
        } else {
            return
        }
    },[user])

    return (
        <>
        </>
    )
}

export default UserLogic