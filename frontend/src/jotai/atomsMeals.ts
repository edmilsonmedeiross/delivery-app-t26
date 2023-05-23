import { atom } from 'jotai'

export interface mealsProps {
  id: string;
  name: string;
  thumb: string;
  category: string;
  instructions: string;
}

export const mealsAtom = atom([] as mealsProps[])