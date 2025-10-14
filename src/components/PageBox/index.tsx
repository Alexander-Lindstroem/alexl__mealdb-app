import { useUserContext } from "@/utils/contexts"
import { PageType, UserContextType } from "@/utils/types"
import Link from "next/link"

const PageBox = ({page, image}:PageType) => {
    const {user, setUser} = useUserContext() as UserContextType

    let pageReference:string
    let noFavorite:boolean
    if (page === "favorites") {
        if (user?.favoriteCategory) {
            pageReference = `categories/${user?.favoriteCategory}`
        } else {
            pageReference = "categories"
            noFavorite = true
        }
    } else {
        pageReference = page
    }

    return (
        <Link 
            className=
                {`bg-cover bg-center w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] rounded-2xl  
                items-center justify-center bg-repeat-none p-10 flex`}
            href={`/${pageReference}`}
            style={{ backgroundImage: `url(${image})` }} 
        >
            <h3 
                className=
                    {`backdrop-blux-sm text-white text-6xl text-shadow-md text-shadow-black/70 
                    capitalize text-center font-body`}
            >
                {noFavorite! ? "Pick a favorite here" : page}
            </h3>
        </Link>
    )
}

export default PageBox