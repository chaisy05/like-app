export const likePhoto = (photoId) => ({
    type: 'LIKE_PHOTO',
    payload: photoId,
  });
  
  export const dislikePhoto = (photoId) => ({
    type: 'DISLIKE_PHOTO',
    payload: photoId,
  });
  