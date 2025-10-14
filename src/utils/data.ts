import { UserTypes } from "./types";

export const users:UserTypes[] = [
    {   
        name: "alex",
        password: "alex123",
        favoriteCategory: "beef",
        favoriteRecipes: [
            {
                title: "Ma Po Tofu",
                image: "https://www.themealdb.com/images/media/meals/1525874812.jpg",
                link: "52947",
                category: "Beef",
            },
            {
                title: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
                image: 	"https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
                link: "52997",
                category: "Beef",
            },
        ]
    },
    {
        name: "testuser",
        password: "test123",
        favoriteCategory: null,
        favoriteRecipes: []
    }
]