const initialState = {
    likedPhotos: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LIKE_PHOTO':
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, action.payload],
        };
      case 'DISLIKE_PHOTO':
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter(id => id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  