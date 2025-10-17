'use client'
import { useUserContext } from "@/utils/contexts"
import ButtonBody from "../ButtonMenu"
import { saveSession } from "@/utils/functions"

const LogoutButton = () => {
    const { user, setUser } = useUserContext()

    const logout = () => {
        setUser(null) 
        saveSession(null)
    }
    
    return (
        <div onClick={logout}>
            <ButtonBody label="Logout" isLast={true}/>
        </div>
    )
}

export default LogoutButton