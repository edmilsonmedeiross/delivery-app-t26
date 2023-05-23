import mealsRouter from './meals';
import drinkRouter from './drinks';

export default [
  { path: '/meals', router: mealsRouter },
  { path: '/drinks', router: drinkRouter },
]