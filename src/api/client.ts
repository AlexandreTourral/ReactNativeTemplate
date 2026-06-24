import '@/types/client.types';

import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exemple : ajouter ici les interceptors (auth, refresh token, etc.)

export default apiClient;
