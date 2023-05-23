import { drinksAtom } from '@/jotai/atoms';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';


function Drinks() {
  const [drinks] = useAtom(drinksAtom);

  return (
    <div>
      {drinks.map((drink) => (
        <Link key={drink.id} href={drink.name} >
          <div>
            <p>{drink.name}</p>
            {/* <img src={drink.thumb} alt={drink.name} /> */}
            <Image
              src={drink.thumb}
              alt={drink.name}
              width={300}
              height={300}
            />
            <p>{drink.nationality}</p>
            <p>{drink.type}</p>
            <p>{drink.instructions}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Drinks;
