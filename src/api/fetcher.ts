import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const internalApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const localFetcher = (url: string) =>
  internalApi.get(url).then((res) => res.data);
