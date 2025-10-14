import { UserTypes } from "./types";

export const removeReferenceBrackets = (string:string): string => {
  return string.replace(/\[\d+\]/g, "");
}
 
export const ObjectToArrayFilter = (object:object, filter:string):string[] => {
  return Object.entries(object).filter(entry => entry[0].startsWith(filter)).map(entry => entry[1]).filter(item => item)
}

export const saveUser = (object:UserTypes | null) => {
  if (object === null) {
    localStorage.removeItem("savedUser")
  } else {
    localStorage.setItem("savedUser", JSON.stringify(object))
  }
}