import MealPreview from "@/components/MealPreview"
import { fetchCategories } from "@/app/categories/page"
import { removeReferenceBrackets } from "@/utils/functions"
import FavoriteCategoryButton from "@/components/FavoriteCategoryButton"

type MealCategoryType = {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}

type Params = Promise<{ category: string }>

const CategoryPage = async ({ params }:{ params: Params }) => {
    const {category} = await params

    const fetchCategoryData = async ():Promise<MealCategoryType[]> => {
        let data
        try {   
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            data = await response.json()
        } catch (error) {
            console.log(error)
        }
        return data.meals
    }

    const categoryData = await fetchCategoryData()

    const categories = await fetchCategories()
    const categoryDescription = removeReferenceBrackets(categories.filter(object => object.strCategory.toLowerCase() == category)[0].strCategoryDescription)

    return (
        <section className="flex items-center flex-col gap-12 py-12">
            <div className="flex justify-center items-center gap-4">
                <h2 className="font-header capitalize text-4xl text-center">{category}</h2>
                <FavoriteCategoryButton category={category}/>
            </div>
            <p className="font-body mx-16 leading-7">{categoryDescription}</p>
            <h3 className="capitalize text-center font-header text-2xl">{category} recipes</h3>
            <div className="flex justify-center flex-wrap gap-8">
                {categoryData && categoryData.map(({strMeal, strMealThumb, idMeal}, index) => (
                    <MealPreview key={index} title={strMeal} image={strMealThumb} link={idMeal} category={category}/>
                ))}
            </div>
        </section>
    )
}

export default CategoryPage