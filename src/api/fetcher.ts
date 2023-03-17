import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
