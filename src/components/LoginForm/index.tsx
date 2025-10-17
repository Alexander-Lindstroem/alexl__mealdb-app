'use client'
import { useUserContext } from "@/utils/contexts"
import { users } from "@/utils/data"
import { saveSession } from "@/utils/functions"
import { UserContextType, UserTypes } from "@/utils/types"
import { redirect } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
    const {user, setUser} = useUserContext() as UserContextType
    const [usernameInput, setUsernameInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [loginError, setLoginError] = useState<string | null>(null)

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()

        if (usernameInput && passwordInput) {
            const userObject:UserTypes = users.filter(object => object.name == usernameInput)[0]

            if (userObject) {
                const savedUser = localStorage.getItem(`savedUser__${userObject.name}`)
                if (savedUser) {
                    setUser(JSON.parse(savedUser))
                    saveSession(JSON.parse(savedUser).name)
                    redirect("/")
                } else {
                    setUser(userObject)
                    saveSession(userObject.name)
                    redirect("/")
                }
            } else {
                setLoginError("Invalid user or password")
            }
        } else {
            setLoginError("Please enter the fields")
        }
    }

    return (
        <form className="font-button text-lg flex flex-col gap-3 lg:w-[500px]">
            <fieldset className="flex flex-col">
                <label className="mx-2" htmlFor="username">Username</label>
                <input className="bg-gray-100 p-2 rounded-md" onChange={handleUsernameChange} id="username" value={usernameInput} placeholder="Enter your username"/>
            </fieldset>
            <fieldset className="flex flex-col">
                <label className="mx-2" htmlFor="password">Password</label>
                <input className="bg-gray-100 p-2 rounded-md" onChange={handlePasswordChange} id="password" value={passwordInput} type="password" placeholder="Enter your password"/>
            </fieldset>
            <div className="flex lg:flex-row flex-col justify-between items-center">
                <div className="grow">
                {loginError && <p className="text-red-300 text-center">{loginError}</p>}
                </div>
                <button className="font-light m-2 w-40 p-2 border-1 border-gray-400 rounded-lg cursor-pointer hover:font-normal active:bg-gray-50" onClick={handleSubmit}>Log in</button>
            </div>
        </form>        
    )
}

export default LoginForm