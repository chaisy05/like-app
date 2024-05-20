import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { likePhoto, dislikePhoto } from '../store/actions';

const PhotosScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const likedPhotos = useSelector(state => state.likedPhotos);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search photos..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredPhotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.photoItem}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => 
                likedPhotos.includes(item.id)
                  ? dispatch(dislikePhoto(item.id))
                  : dispatch(likePhoto(item.id))
              }
            >
              <Text style={styles.likeButton}>
                {likedPhotos.includes(item.id) ? 'Unlike' : 'Like'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  photoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    flex: 1,
  },
  likeButton: {
    color: 'blue',
  },
});

export default PhotosScreen;
