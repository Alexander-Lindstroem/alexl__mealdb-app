import CategoryDisplayer from "@/components/CategoryDisplayer";

type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export const fetchCategories = async ():Promise<Category[]> => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const data = await response.json()
    return data.categories
}

const Categories = async () => {
    const categories = await fetchCategories()

    return (
        <section className="flex gap-6 pt-8 pb-12 flex-wrap justify-center items-center">
            {categories && categories.map(({idCategory, strCategory, strCategoryThumb, strCategoryDescription}, index:number) => (
                <CategoryDisplayer key={index} name={strCategory} image={strCategoryThumb}/>
            ))}
        </section>
    )
}

export default Categories