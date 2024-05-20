import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  const likedPhotos = useSelector(state => state.likedPhotos);

  return (
    <View style={styles.container}>
      <FlatList
        data={likedPhotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.photoItem}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
            <Text style={styles.title}>{item.title}</Text>
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
});

export default FavoritesScreen;
