'use client'
import { MealTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import MealPreview from "../MealPreview";

const SearchForm = () => {
      const [searchResults, setSearchResults] = useState<MealTypes[] | null>(null)
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [userInput, setUserInput] = useState<string>("");
    
      const fetchSearchResults = async () => {
        try {
          const response = await fetch(`api/mealdb/search.php?s=${userInput}`)
          const data = await response.json()
          const results = data.meals
          setSearchResults(results)
        } catch (error) {
          console.error("Search failed: ", error)
          setSearchResults(null)
        } finally {
          setIsLoading(false)
        }
      }
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
      }
    
      useEffect(() => {
        if (userInput.length === 0) {
          setSearchResults(null)
          setIsLoading(false)
          return
        }
    
        setIsLoading(true)
    
        const timer = setTimeout(() => {
          fetchSearchResults();
        }, 500)
    
        return () => clearTimeout(timer)
      },[userInput])

    return (
      <div className="font-body w-full flex flex-col gap-12 justify-center items-center text-lg">
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-4xl text-2xl font-header text-center">Search</h2>
          <p className="lg:text-lg text-md mx-4 font-body lg:w-[700px]">If you're looking for something specific, and you can't find it by browsing through the categories, you can try using the search function present on this page!</p>
        </div>
        <fieldset className="font-button flex flex-col w-full lg:w-[400px]">
          <input 
            id="search-input" 
            onChange={handleChange} 
            placeholder="Write your search term here..." 
            value={userInput}
            className="bg-gray-100 p-2 mx-4 lg:m-0 rounded-md"
          />
        </fieldset>
        {isLoading && <p>Loading...</p>}
        {searchResults && searchResults.length > 0 &&
          <>
            {!isLoading && <p>Results:</p>}
            <div className="flex flex-wrap justify-center gap-8">
              {searchResults.map(({strMeal, strMealThumb, idMeal, strCategory}, index) => <MealPreview key={index} title={strMeal} image={strMealThumb} link={idMeal} category={strCategory}/>)}
            </div>
          </>
        }
        {userInput.length > 0 && !isLoading && (!searchResults || searchResults.length === 0) &&
          <div>No results found...</div>
        }
      </div>
    )
}

export default SearchForm