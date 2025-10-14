'use client'
import Link from "next/link"

type CategoryDisplayerProps = {
    name: string,
    image: string
}

const CategoryDisplayer = ({name, image}:CategoryDisplayerProps) => {

    //The images for the breakfast and goat cateogories did not fit in with
    //the others and so I replaced them with my own.
    const parsedImage = 
          name.toLowerCase() === "goat" ? "/goat-meat.png" 
        : name.toLowerCase() === "breakfast" ? "/breakfast.png"
        : image

    return (
        <>
            <Link 
                href={`/categories/${name.toLowerCase()}`}
                className=
                    {`w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] flex justify-center items-end  
                    bg-repeat-space rounded-2xl bg-contain bg-center flex-wrap`}
                style={{ backgroundImage: `url(${parsedImage})` }}
            >
                <h3 className="text-xl font-body capitalize">{name}</h3>
            </Link>
        </>
    )
}

export default CategoryDisplayer;