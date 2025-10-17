import { Category } from "./data";
import { UserTypes } from "./types";

export const removeReferenceBrackets = (string:string): string => {
  return string.replace(/\[\d+\]/g, "");
}
 
export const ObjectToArrayFilter = (object:object, filter:string):string[] => {
  return Object.entries(object).filter(entry => entry[0].startsWith(filter)).map(entry => entry[1]).filter(item => item)
}

export const saveUser = (object:UserTypes | null) => {
  localStorage.setItem(`savedUser__${object!.name}`, JSON.stringify(object))
}

export const saveSession = (userName: string | null) => {
  if (userName) {
    localStorage.setItem("lastSession", userName)
  } else {
    localStorage.removeItem("lastSession")
  }
}

export const fetchCategories = async ():Promise<Category[]> => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const data = await response.json()
    return data.categories
}