'use client'
import StarSVG from "@/components/StarSVG"
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

type FavoriteCategoryButtonProps = {
    category: string
}

const FavoriteCategoryButton = ({category}:FavoriteCategoryButtonProps) => {
    const { user, setUser } = useUserContext() as UserContextType

    if (!user) return null
    
    const isFavorite = user.favoriteCategory === category

    const handleRemoveFavoriteClick = () => {
        const newUserObject = {...user, favoriteCategory: null}
        setUser(newUserObject)
    }

    const handleAddFavoriteClick = () => {
        const newUserObject = {...user, favoriteCategory: category}
        setUser(newUserObject)
    }

    return (
        <>
            {isFavorite 
                ? 
                <div onClick={handleRemoveFavoriteClick} className="cursor-pointer">
                    <StarSVG fill="url('#FillGradient')"/>
                </div>
                : 
                <div onClick={handleAddFavoriteClick} className="cursor-pointer">
                    <StarSVG fill="none"/>
                </div>
            }
        </>
    )
}

export default FavoriteCategoryButton