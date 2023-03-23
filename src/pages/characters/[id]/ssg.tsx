import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import { GetInternalCharacterDto } from '@app/api/dto/GetInternalCharacterDto';
import { internalApi } from '@app/api/fetcher';

interface CharacterSsgProps {
  data: GetInternalCharacterDto;
}

const CharacterSsr: FC<CharacterSsgProps> = ({ data }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: new Array(7)
      .fill(1)
      .map((v, index) => ({ params: { id: String(index + 1) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CharacterSsgProps> = async (
  context
) => {
  const id = context.params?.id;
  const { data } = await internalApi.get(`/characters/${id}`);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default CharacterSsr;
