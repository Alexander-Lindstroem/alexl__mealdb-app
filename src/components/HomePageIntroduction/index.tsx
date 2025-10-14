import { PageType } from "@/utils/types"
import PageBox from "../PageBox"

const HomePageIntroduction = () => {
    const pages:PageType[] = [
        {
            page: "categories",
            image: "/categories-of-food.jpg"
        }, 
        {
            page: "search",
            image: "/searching-for-recipe.jpg"
        }, 
        {
            page: "favorites", 
            image: "/favorite.jpg"
        }, 
        {
            page: "profile", 
            image: "/profile-default.jpg"
        }
    ]

    return (
        <section className="flex flex-wrap justify-center gap-12 p-12">
            {pages.map((item, index) => (
                <PageBox key={index} {...item}/>
            ))}
        </section>
    )
}

export default HomePageIntroduction