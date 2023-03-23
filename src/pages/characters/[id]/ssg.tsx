import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import { GetInternalCharacterDto } from '@app/api/dto/GetInternalCharacterDto';
import { internalApi } from '@app/api/fetcher';
import Head from 'next/head';

interface CharacterSsgProps {
  data: GetInternalCharacterDto;
}

const CharacterSsr: FC<CharacterSsgProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`${data.name} | Rick & Morty DB`}</title>
        <meta
          name="description"
          content={`All information about character ${data.name} in Rick & Morty cartoon`}
        />

        <meta
          property="og:url"
          content="https://witty-eagles-knock-188-24-153-202.loca.lt/characters/1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.name} | Rick & Morty DB`} />
        <meta
          property="og:description"
          content={`All information about character ${data.name} in Rick & Morty cartoon`}
        />
        <meta property="og:image" content={data.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="witty-eagles-knock-188-24-153-202.loca.lt"
        />
        <meta
          property="twitter:url"
          content="https://witty-eagles-knock-188-24-153-202.loca.lt/characters/1"
        />
        <meta name="twitter:title" content={`${data.name} | Rick & Morty DB`} />
        <meta
          name="twitter:description"
          content={`All information about character ${data.name} in Rick & Morty cartoon`}
        />
        <meta name="twitter:image" content={data.image} />
      </Head>
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
    </>
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
