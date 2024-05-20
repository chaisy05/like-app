import api from './api';

export const getPhotos = async () => {
  const response = await api.get('/photos');
  return response.data;
};