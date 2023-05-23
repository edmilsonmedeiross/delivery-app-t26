import { Router } from 'express'
import { getAllDrinks } from '../services/drinks'

const drinkRouter = Router();

drinkRouter.get('/', async (req, res) => {
  return res.status(200).json(await getAllDrinks())
})

export default drinkRouter;
