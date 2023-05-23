import { atom } from 'jotai'

interface drinkProps {
  id: string,        
  name: string,        
  type: string,      
  categoryId: string, 
  nationality: string,
  instructions: string,
  ingredients: object[], 
  thumb: string,
}

interface mealProps {
  id: string,
  name: string,
  type: string,
  categoryId: string,
  nationality: string,
  instructions: string,
  ingredients: object[],
  thumb: string,
}

export const mealsAtom = atom([] as mealProps[])


export const drinksAtom = atom([] as drinkProps[])