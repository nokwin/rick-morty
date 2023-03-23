import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, secret } = req.query;

  if (secret !== 'WUBBA_LUBBA_DUB_DUB') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate(`/characters/${id}/ssg`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
