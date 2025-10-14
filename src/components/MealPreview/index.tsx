import Link from "next/link"
import Image from "next/image"
import { SavedMealType } from "@/utils/types"

const MealPreview = ({title, image, link, category}:SavedMealType) => {
    return (
        <Link className="flex flex-col w-[150px] h-[auto]" href={`/categories/${category.toLowerCase()}/${link}`}>
            <Image 
                alt={`${title} image`} 
                src={image} 
                height={100} 
                width={100} 
                className="rounded-lg w-full h-auto"
            />
            <h3 className="font-body text-lg text-center py-1">{title}</h3>
        </Link>
    )
}

export default MealPreview