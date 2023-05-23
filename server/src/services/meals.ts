import prisma from '../lib/prisma'

export const getAllMeals = async () => prisma.recipes.findMany({
  where: {
    type: 'meal'
  }
})