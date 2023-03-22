import { GetAllCharactersDto } from '@app/api/dto/GetAllCharactersDto';
import { fetcher } from '@app/api/fetcher';
import Link from 'next/link';
import { FC } from 'react';
import useSWR from 'swr';

interface CharactersProps {}

const Characters: FC<CharactersProps> = ({}) => {
  const { data, error, isLoading } = useSWR<GetAllCharactersDto>(
    '/character',
    fetcher
  );

  if (error)
    return <div>Oops, something went wrong. Please, try again later</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="list-disc">
        {data?.results.map((character) => (
          <li key={`character-${character.id}`}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
