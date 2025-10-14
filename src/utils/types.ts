export type MealTypes = {
    idMeal: string,
    strMeal: string,
    strMealAlternate: string | null,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string | null,
    strYoutube: string,
    strIngredient1: string | null | undefined,
    strIngredient2:	string | null | undefined,
    strIngredient3:	string | null | undefined,
    strIngredient4:	string | null | undefined,
    strIngredient5:	string | null | undefined,
    strIngredient6: string | null | undefined,
    strIngredient7:	string | null | undefined,
    strIngredient8:	string | null | undefined,
    strIngredient9:	string | null | undefined,
    strIngredient10: string | null | undefined,
    strIngredient11: string | null | undefined,
    strIngredient12: string | null | undefined,
    strIngredient13: string | null | undefined,
    strIngredient14: string | null | undefined,
    strIngredient15: string | null | undefined,
    strIngredient16: string | null | undefined,
    strIngredient17: string | null | undefined,
    strIngredient18: string | null | undefined,
    strIngredient19: string | null | undefined,
    strIngredient20: string | null | undefined,
    strMeasure1: string | null | undefined,
    strMeasure2: string | null | undefined,
    strMeasure3: string | null | undefined,
    strMeasure4: string | null | undefined,
    strMeasure5: string | null | undefined,
    strMeasure6: string | null | undefined,
    strMeasure7: string | null | undefined,
    strMeasure8: string | null | undefined,
    strMeasure9: string | null | undefined,
    strMeasure10: string | null | undefined,
    strMeasure11: string | null | undefined,
    strMeasure12: string | null | undefined,
    strMeasure13: string | null | undefined,
    strMeasure14: string | null | undefined,
    strMeasure15: string | null | undefined,
    strMeasure16: string | null | undefined,
    strMeasure17: string | null | undefined,
    strMeasure18: string | null | undefined,
    strMeasure19: string | null | undefined,
    strMeasure20: string | null | undefined,
    strSource: string | null,
    strImageSource:	string | null,
    strCreativeCommonsConfirmed: string | null,
    dateModified: string | null,
}

export type SavedMealType = {
    title: string,
    image: string,
    link: string,
    category: string
}

export type UserTypes = {
    name: string,
    password: string,
    favoriteCategory: string | null,
    favoriteRecipes: SavedMealType[],
}

export type UserContextType = {
    user: UserTypes | null
    setUser: (user: UserTypes | null) => void
}

export type PageType = {
    page: string,
    image: string
}