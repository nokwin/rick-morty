import { GetCharacterDto } from '@app/api/dto/GetCharacterDto';
import { GetInternalCharacterDto } from '@app/api/dto/GetInternalCharacterDto';
import { api } from '@app/api/fetcher';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetInternalCharacterDto>
) {
  const { id } = req.query;
  const { data } = await api.get<GetCharacterDto>(`/character/${id}`);

  return res.status(200).json({
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
    origin: data.origin.name,
    location: data.location.name,
    image: data.image,
  });
}
