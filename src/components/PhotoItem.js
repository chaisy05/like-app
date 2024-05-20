// import React from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { likePhoto, dislikePhoto } from '../store/reducers';

// const PhotoItem = ({ photo }) => {
//   const dispatch = useDispatch();

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: photo.thumbnailUrl }} style={styles.image} />
//       <Text>{photo.title}</Text>
//       <View style={styles.buttons}>
//         <Button title="Like" onPress={() => dispatch(likePhoto(photo))} />
//         <Button title="Dislike" onPress={() => dispatch(dislikePhoto(photo))} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc'
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginRight: 10
//   },
//   buttons: {
//     flexDirection: 'row'
//   }
// });

// export default PhotoItem;