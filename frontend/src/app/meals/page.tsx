import { mealsAtom } from '@/jotai/atoms';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

function Meals() {
  const [meals] = useAtom(mealsAtom);

  return (
    <div>
      {meals.map((meal) => (
        <Link key={meal.id} href={meal.name}>
          <div>
            <p>{meal.name}</p>
            <Image src={meal.thumb} alt={meal.name} width={300} height={300} />
            <p>{meal.categoryId}</p>
            <p>{meal.instructions}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Meals;