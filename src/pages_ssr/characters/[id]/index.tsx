import { GetInternalCharacterDto } from '@app/api/dto/GetInternalCharacterDto';
import { localFetcher } from '@app/api/fetcher';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';

interface CharacterProps {}

const Character: FC<CharacterProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR<GetInternalCharacterDto>(
    id ? `/characters/${id}` : null,
    localFetcher
  );

  if (!id) return null;
  if (error)
    return <div>Oops, something went wrong. Please, try again later</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data)
    return <div>Oops, something went wrong. Please, try again later</div>;

  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <div>
        <p>Name: {data.name}</p>
        <p>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        <p>Gender: {data.gender}</p>
        <p>Origin: {data.origin}</p>
        <p>Location: {data.location}</p>
      </div>
      <Image src={data.image} alt={data.name} width="144" height="144" />
    </div>
  );
};

export default Character;
