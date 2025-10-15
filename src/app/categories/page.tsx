import CategoryDisplayer from "@/components/CategoryDisplayer";
import { fetchCategories } from "@/utils/functions";

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