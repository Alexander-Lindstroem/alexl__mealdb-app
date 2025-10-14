'use client'
import { useUserContext } from "@/utils/contexts";
import LogoutButton from "../LogoutButton";
import Link from "next/link";
import ButtonMenu from "../ButtonMenu";
import Image from "next/image";
import { useState } from "react";
import { UserContextType } from "@/utils/types";

const Header = () => {
    const {user, setUser} = useUserContext() as UserContextType
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const closeMenu = () =>  {
        setShowMenu(false)
    }

    return (
        <>
        <header className="z-20 bg-white relative flex flex-col items-center w-full gap-2 border-b-1 border-dotted">
            {user && 
            <div className="hidden lg:flex justify-center">
                <Link href="/categories" onClick={closeMenu}><ButtonMenu label="Categories"/></Link>
                <Link href="/search" onClick={closeMenu}><ButtonMenu label="Search"/></Link>
                <Link href="/profile" onClick={closeMenu}><ButtonMenu label="Profile"/></Link>
                <LogoutButton/>
            </div>
            }
            <div className="flex justify-center items-center gap-3">
                {user && 
                <div className="lg:hidden" onClick={toggleMenu}>
                    <Image src="/menu.svg" alt="menu" width={50} height={50}></Image>
                </div>
                }
                <Link className="my-16" href="/"><h1 className="font-header text-center text-4xl lg:text-6xl">Meals & Recipes</h1></Link>
            </div>
            {showMenu && 
            <div className="absolute bottom-0 translate-y-full flex flex-col w-full text-2xl gap-4 p-5 font-body lg:hidden">
                <Link href="/categories" className="border-b-1 border-dotted pb-4" onClick={closeMenu}><ButtonMenu label="Categories"/></Link>
                <Link href="/search" className="border-b-1 border-dotted pb-4" onClick={closeMenu}><ButtonMenu label="Search"/></Link>
                <Link href="/profile" className="border-b-1 border-dotted pb-4" onClick={closeMenu}><ButtonMenu label="Profile"/></Link>
                <div onClick={closeMenu}><LogoutButton/></div>
            </div>
            }
        </header>
        {showMenu && 
        <div className="z-10 lg:hidden absolute h-full w-full bg-gray-100 opacity-95"></div>
        }
        </>
    )
}

export default Header