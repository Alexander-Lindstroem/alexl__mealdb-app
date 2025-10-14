import YouTubeEmbed from "@/components/YoutubeEmbed"
import { ObjectToArrayFilter } from "@/utils/functions"
import { SavedMealType } from "@/utils/types"
import Image from "next/image"
import FavoriteRecipeButton from "./FavoriteRecipeButton"

const Meal = async ( {params} : {params : {meal:string}} ) => {
    const {meal} = await params

    const fetchMealData = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
            const data = await response.json()
            return data.meals[0]
        } catch (error) {
            console.log(error)
        }
    }

    const mealData = await fetchMealData()
    
    let youtubeID
    if (mealData && mealData.strYoutube) {youtubeID = new URL(mealData.strYoutube).searchParams.get("v")}
 
    const ingredients = ObjectToArrayFilter(mealData, "strIngredient")
    const measures = ObjectToArrayFilter(mealData, "strMeasure")
    
    const recipeToSave:SavedMealType = {
        title: mealData.strMeal,
        image: mealData.strMealThumb,
        link: mealData.idMeal,
        category: mealData.strCategory
    }

    const startsWithVowel = /^[aeiou]/.test(mealData.strArea.toLowerCase())
    const aOrAn = startsWithVowel ? "An" : "A"

    return (
        <>
            {mealData &&
            <section className="flex flex-col gap-12 font-body py-12">
                <div className="pb-12 border-b-1 border-dotted">
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="font-header capitalize text-4xl text-center">{mealData.strMeal}</h2>
                        <FavoriteRecipeButton recipe={recipeToSave}/>
                    </div>
                    <h3 className="font-header text-xl text-center">{aOrAn} {mealData.strArea} {mealData.strCategory.toLowerCase()} dish</h3>
                </div>
                <div className="mx-4 flex flex-col lg:flex-row justify-center items-center gap-10">
                    <Image className="rounded-lg" alt={`Image of ${mealData.strMeal}`} src={mealData.strMealThumb} height={400} width={400}/>
                    <div className="flex gap-4 text-lg">
                        <div className="text-right">{ingredients.map((item, index) => <p key={index}>{item}</p>)}</div>
                        <div>{measures.map((item, index) => <p key={index}>{item}</p>)}</div>
                    </div>
                </div>
                <h4 className="text-center font-header text-2xl">Instructions</h4>
                <p className="text-lg mx-4">{mealData.strInstructions}</p>
                {mealData && youtubeID &&
                <div className="border-t-1 border-dotted mx-4">  
                    <h4 className="text-center font-header text-2xl py-12">Video Instruction</h4>
                    <YouTubeEmbed videoId={youtubeID} title={mealData.strMeal}/>
                </div>
                }
            </section>
            }
        </>
    )
}

export default Meal