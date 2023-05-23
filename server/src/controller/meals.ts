import {Router} from 'express'
import {getAllMeals} from '../services/meals'

const mealsRouter = Router();

mealsRouter.get('/', async (req, res) => {
  return res.status(200).json(await getAllMeals())
})

export default mealsRouter;
