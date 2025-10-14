'use client'
import CategoryDisplayer from "@/components/CategoryDisplayer"
import LoginForm from "@/components/LoginForm"
import MealPreview from "@/components/MealPreview"
import { useUserContext } from "@/utils/contexts"
import { CATEGORY_IMAGE_URL } from "@/utils/globals"
import { UserContextType } from "@/utils/types"
import Link from "next/link"

const Profile = () => {
    const {user, setUser} = useUserContext() as UserContextType

    return (
        <>
        { user ?
            <section className="w-full flex flex-col gap-12 justify-center items-center text-md lg:text-lg font-body py-12">
                <div className="flex flex-col gap-4 lg:w-[600px]">
                    <div className="flex justify-center items-end gap-2">
                        <h2 className="font-header text-xl lg:text-2xl">Welcome to your profile,</h2>
                        <h2 className="text-blue-800 text-4xl">{user.name}</h2>
                    </div>
                    <p className="text-center mx-6">Here you can view whatever recipes you have favorited, as well as what your category you have chosen as your overall favorite.</p>
                </div>
                <div className="py-12 w-full flex flex-col justify-center items-center border-y-1 border-dotted">
                    <p>Your current favorite category is...</p>
                    {user.favoriteCategory ? <CategoryDisplayer image={`${CATEGORY_IMAGE_URL}/${user.favoriteCategory.toLowerCase()}.png`} name={user.favoriteCategory}/> : "None"}
                </div>
                <div>
                    <p className="text-center pb-12">Your current favorite recipes are...</p>
                    <div className="flex justify-center flex-wrap gap-8">
                        {user.favoriteRecipes.map( (meal, index) => (
                            <MealPreview key={index} {...meal} />
                        ))}
                    </div>
                </div>
            </section>
        : <LoginForm/>}
        </>
    )
}

export default Profile