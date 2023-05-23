import prisma from '../lib/prisma'

export const getAllDrinks = async () => prisma.recipes.findMany({
  where: {
    type: 'drink'
  }
})