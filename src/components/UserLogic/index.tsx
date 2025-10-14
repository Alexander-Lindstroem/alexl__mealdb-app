'use client'

import { useUserContext } from "@/utils/contexts";
import { saveUser } from "@/utils/functions";
import { UserContextType } from "@/utils/types";
import { useEffect } from "react";

const UserLogic = () => {
    const {user, setUser} = useUserContext() as UserContextType

    useEffect(() => {
        const storedUserString = localStorage.getItem("savedUser");
        if (storedUserString) {
            const storedUserObject = JSON.parse(storedUserString)
            setUser(storedUserObject);
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