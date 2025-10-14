'use client'

import StarSVG from "@/components/StarSVG"
import { useUserContext } from "@/utils/contexts"
import { SavedMealType, UserContextType } from "@/utils/types"

type FavoriteRecipeButtonTypes = {
    recipe: SavedMealType
}

const FavoriteRecipeButton = ({recipe}:FavoriteRecipeButtonTypes) => {
    const { user, setUser } = useUserContext() as UserContextType

    if (!user) return null

    const isFavorite = user.favoriteRecipes.some(item => item.link === recipe.link)

    const handleAddFavoriteClick = () => {
        const favoriteRecipes = [...user.favoriteRecipes, recipe]; 
        const newUserObject = {...user, favoriteRecipes: favoriteRecipes}
        setUser(newUserObject)
    }

    const handleRemoveFavoriteClick = () => {
        const favoriteRecipes = user.favoriteRecipes.filter(item => item.link !== recipe.link)
        const newUserObject = {...user, favoriteRecipes: favoriteRecipes}
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

export default FavoriteRecipeButton